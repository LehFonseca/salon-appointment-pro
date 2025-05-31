
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, MapPin, Edit, Trash2, Plus, User, Scissors } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import type { AppointmentStatus } from "@/types";
import BookingCalendar from "@/components/booking/BookingCalendar";
import AppointmentConfirmation from "@/components/booking/AppointmentConfirmation";

interface ExtendedAppointment {
  id: string;
  businessId: string;
  userId: string;
  serviceId: string;
  employeeId?: string;
  date: Date;
  status: AppointmentStatus;
  note?: string;
  businessName: string;
  serviceName: string;
  employeeName?: string;
  price: number;
  duration: number;
  businessAddress: string;
}

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<ExtendedAppointment[]>([
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
      employeeName: "Ana Silva",
      price: 80,
      duration: 60,
      businessAddress: "Rua das Flores, 123 - Centro"
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
      employeeName: "Carlos Santos",
      price: 65,
      duration: 90,
      businessAddress: "Av. Principal, 456 - Jardins"
    },
    {
      id: "3",
      businessId: "salon3",
      userId: "user1", 
      serviceId: "service3",
      date: new Date("2024-12-10T09:00:00"),
      status: "completed",
      businessName: "Spa & Bem-estar",
      serviceName: "Massagem Relaxante",
      price: 120,
      duration: 60,
      businessAddress: "Rua do Spa, 789 - Vila Nova"
    }
  ]);

  const [showBookingDialog, setShowBookingDialog] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [pendingAppointment, setPendingAppointment] = useState<ExtendedAppointment | null>(null);

  const mockServices = [
    { id: "1", name: "Corte Feminino", description: "Corte moderno", price: 80, duration: 60, category: "haircut" as const },
    { id: "2", name: "Coloração", description: "Coloração completa", price: 150, duration: 120, category: "hair_coloring" as const },
    { id: "3", name: "Corte Masculino", description: "Corte clássico", price: 45, duration: 45, category: "haircut" as const },
  ];

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

  const handleBookingComplete = () => {
    setShowBookingDialog(false);
    // Aqui você atualizaria a lista de agendamentos
    toast({
      title: "Agendamento realizado!",
      description: "Seu agendamento foi criado com sucesso.",
    });
  };

  const handleDelete = (appointmentId: string) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
    toast({
      title: "Agendamento cancelado",
      description: "O agendamento foi cancelado com sucesso.",
    });
  };

  const handleConfirmAppointment = (appointment: ExtendedAppointment) => {
    setPendingAppointment(appointment);
    setShowConfirmationDialog(true);
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
          
          <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
            <DialogTrigger asChild>
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                <Plus className="h-4 w-4 mr-2" />
                Novo Agendamento
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-gold-400">
                  Agendar Novo Serviço
                </DialogTitle>
              </DialogHeader>
              <BookingCalendar
                salonId="salon1"
                salonName="Salão Exemplo"
                services={mockServices}
                onBookingComplete={handleBookingComplete}
              />
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
              <Button onClick={() => setShowBookingDialog(true)} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
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
                      {appointment.status === 'scheduled' && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleConfirmAppointment(appointment)}
                          className="border-gold-600 text-gold-400 hover:bg-gold-900/20"
                        >
                          Confirmar
                        </Button>
                      )}
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-4 w-4 text-gold-400" />
                      <span>{formatDate(appointment.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <span>{formatTime(appointment.date)} ({appointment.duration}min)</span>
                    </div>
                    {appointment.employeeName && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <User className="h-4 w-4 text-gold-400" />
                        <span>{appointment.employeeName}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4 text-gold-400" />
                      <span className="text-gold-400 font-semibold">R$ {appointment.price.toFixed(2)}</span>
                    </div>
                  </div>
                  {appointment.note && (
                    <div className="mt-3 p-3 bg-glam-900 rounded-lg">
                      <p className="text-gray-300 text-sm">
                        <strong className="text-gold-400">Observação:</strong> {appointment.note}
                      </p>
                    </div>
                  )}
                  <div className="mt-3 p-3 bg-glam-900 rounded-lg">
                    <p className="text-gray-300 text-sm">
                      <strong className="text-gold-400">Endereço:</strong> {appointment.businessAddress}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Diálogo de Confirmação */}
        {pendingAppointment && (
          <AppointmentConfirmation
            appointment={pendingAppointment}
            isOpen={showConfirmationDialog}
            onClose={() => {
              setShowConfirmationDialog(false);
              setPendingAppointment(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AppointmentsPage;
