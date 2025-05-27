
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MapPin, Edit, Trash2, Plus, User, Scissors } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";
import type { Appointment, AppointmentStatus } from "@/types";

const appointmentSchema = z.object({
  businessName: z.string().min(1, "Nome do salão é obrigatório"),
  serviceName: z.string().min(1, "Serviço é obrigatório"),
  date: z.string().min(1, "Data é obrigatória"),
  time: z.string().min(1, "Horário é obrigatório"),
  employeeName: z.string().optional(),
  note: z.string().optional(),
  status: z.enum(["scheduled", "confirmed", "completed", "cancelled", "no_show"]),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<(Appointment & { businessName: string; serviceName: string; employeeName?: string })[]>([
    {
      id: "1",
      businessId: "salon1",
      userId: "user1",
      serviceId: "service1",
      employeeId: "emp1",
      date: new Date("2024-12-15T10:00:00"),
      status: "confirmed",
      note: "Primeiro corte neste salão",
      businessName: "Salão Beleza Pura",
      serviceName: "Corte e Escova",
      employeeName: "Ana Silva"
    },
    {
      id: "2",
      businessId: "salon2", 
      userId: "user1",
      serviceId: "service2",
      date: new Date("2024-12-20T14:30:00"),
      status: "scheduled",
      businessName: "Barbearia Clássica",
      serviceName: "Corte + Barba",
      employeeName: "Carlos Santos"
    },
    {
      id: "3",
      businessId: "salon3",
      userId: "user1", 
      serviceId: "service3",
      date: new Date("2024-12-10T09:00:00"),
      status: "completed",
      businessName: "Spa & Bem-estar",
      serviceName: "Massagem Relaxante"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<string | null>(null);

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      businessName: "",
      serviceName: "",
      date: "",
      time: "",
      employeeName: "",
      note: "",
      status: "scheduled",
    },
  });

  const getStatusBadge = (status: AppointmentStatus) => {
    const statusConfig = {
      scheduled: { label: "Agendado", variant: "secondary" as const },
      confirmed: { label: "Confirmado", variant: "default" as const },
      completed: { label: "Concluído", variant: "outline" as const },
      cancelled: { label: "Cancelado", variant: "destructive" as const },
      no_show: { label: "Não Compareceu", variant: "destructive" as const },
    };
    
    return (
      <Badge variant={statusConfig[status].variant}>
        {statusConfig[status].label}
      </Badge>
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const onSubmit = (data: AppointmentFormData) => {
    const newAppointment = {
      id: editingAppointment || `appointment_${Date.now()}`,
      businessId: `business_${Date.now()}`,
      userId: "current_user",
      serviceId: `service_${Date.now()}`,
      employeeId: data.employeeName ? `emp_${Date.now()}` : undefined,
      date: new Date(`${data.date}T${data.time}`),
      status: data.status,
      note: data.note,
      businessName: data.businessName,
      serviceName: data.serviceName,
      employeeName: data.employeeName,
    };

    if (editingAppointment) {
      setAppointments(prev => 
        prev.map(app => app.id === editingAppointment ? newAppointment : app)
      );
      toast({
        title: "Agendamento atualizado",
        description: "Seu agendamento foi atualizado com sucesso.",
      });
    } else {
      setAppointments(prev => [...prev, newAppointment]);
      toast({
        title: "Agendamento criado",
        description: "Seu novo agendamento foi criado com sucesso.",
      });
    }

    form.reset();
    setIsDialogOpen(false);
    setEditingAppointment(null);
  };

  const handleEdit = (appointment: typeof appointments[0]) => {
    setEditingAppointment(appointment.id);
    form.setValue("businessName", appointment.businessName);
    form.setValue("serviceName", appointment.serviceName);
    form.setValue("date", appointment.date.toISOString().split('T')[0]);
    form.setValue("time", appointment.date.toTimeString().slice(0, 5));
    form.setValue("employeeName", appointment.employeeName || "");
    form.setValue("note", appointment.note || "");
    form.setValue("status", appointment.status);
    setIsDialogOpen(true);
  };

  const handleDelete = (appointmentId: string) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
    toast({
      title: "Agendamento excluído",
      description: "O agendamento foi excluído com sucesso.",
    });
  };

  const handleNewAppointment = () => {
    setEditingAppointment(null);
    form.reset();
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-heading mb-2">
              Meus Agendamentos
            </h1>
            <p className="text-gray-300">
              Gerencie todos os seus compromissos de beleza em um só lugar
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={handleNewAppointment} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                <Plus className="h-4 w-4 mr-2" />
                Novo Agendamento
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-gold-400">
                  {editingAppointment ? "Editar Agendamento" : "Novo Agendamento"}
                </DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome do Salão</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="serviceName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Serviço</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-glam-900 border-glam-600" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Horário</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} className="bg-glam-900 border-glam-600" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="employeeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Profissional (Opcional)</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-glam-900 border-glam-600">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-glam-800 border-glam-600">
                            <SelectItem value="scheduled">Agendado</SelectItem>
                            <SelectItem value="confirmed">Confirmado</SelectItem>
                            <SelectItem value="completed">Concluído</SelectItem>
                            <SelectItem value="cancelled">Cancelado</SelectItem>
                            <SelectItem value="no_show">Não Compareceu</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="note"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Observações (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea {...field} className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-2 pt-4">
                    <Button type="submit" className="bg-gold-500 hover:bg-gold-600 text-glam-900 flex-1">
                      {editingAppointment ? "Atualizar" : "Criar"} Agendamento
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsDialogOpen(false)}
                      className="border-glam-600 text-gray-300"
                    >
                      Cancelar
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>

        {appointments.length === 0 ? (
          <Card className="bg-glam-800 border-glam-700 text-center p-8">
            <CardContent>
              <Calendar className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Nenhum agendamento encontrado
              </h3>
              <p className="text-gray-400 mb-4">
                Você ainda não possui agendamentos. Que tal marcar seu primeiro compromisso?
              </p>
              <Button onClick={handleNewAppointment} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                <Plus className="h-4 w-4 mr-2" />
                Criar Primeiro Agendamento
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="bg-glam-800 border-glam-700">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-gold-500/20 p-2 rounded-lg">
                        <Scissors className="h-5 w-5 text-gold-400" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">
                          {appointment.businessName}
                        </CardTitle>
                        <p className="text-gold-400 font-medium">
                          {appointment.serviceName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(appointment.status)}
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(appointment)}
                        className="border-glam-600 text-gray-300 hover:bg-glam-700"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(appointment.id)}
                        className="border-red-600 text-red-400 hover:bg-red-900/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      <span>{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <span>{formatTime(appointment.date)}</span>
                    </div>
                    {appointment.employeeName && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <User className="h-4 w-4 text-gold-400" />
                        <span>{appointment.employeeName}</span>
                      </div>
                    )}
                  </div>
                  {appointment.note && (
                    <div className="mt-3 p-3 bg-glam-900 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-gold-400">Observação:</strong> {appointment.note}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
