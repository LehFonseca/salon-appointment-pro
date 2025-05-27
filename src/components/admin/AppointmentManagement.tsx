
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { Appointment, AppointmentStatus } from "@/types";
import { Plus, Edit, Trash2, Search, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AppointmentManagement = () => {
  const { appointments, addAppointment, updateAppointment, deleteAppointment, businesses, users, services } = useApp();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState({
    businessId: "",
    userId: "",
    serviceId: "",
    employeeId: "",
    date: "",
    time: "",
    status: "scheduled" as AppointmentStatus,
    note: "",
  });

  const filteredAppointments = appointments.filter(appointment => {
    const business = businesses.find(b => b.id === appointment.businessId);
    const user = users.find(u => u.id === appointment.userId);
    const service = services.find(s => s.id === appointment.serviceId);
    
    return (
      business?.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service?.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const statusLabels = {
    scheduled: "Agendado",
    confirmed: "Confirmado",
    completed: "Concluído",
    cancelled: "Cancelado",
    no_show: "Não Compareceu",
  };

  const statusColors = {
    scheduled: "border-yellow-500 text-yellow-400",
    confirmed: "border-blue-500 text-blue-400",
    completed: "border-green-500 text-green-400",
    cancelled: "border-red-500 text-red-400",
    no_show: "border-gray-500 text-gray-400",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const appointmentDate = new Date(`${formData.date}T${formData.time}`);
    
    if (editingAppointment) {
      updateAppointment(editingAppointment.id, {
        businessId: formData.businessId,
        userId: formData.userId,
        serviceId: formData.serviceId,
        employeeId: formData.employeeId || undefined,
        date: appointmentDate,
        status: formData.status,
        note: formData.note || undefined,
      });
      toast({
        title: "Agendamento atualizado",
        description: "O agendamento foi atualizado com sucesso.",
      });
    } else {
      const newAppointment: Appointment = {
        id: crypto.randomUUID(),
        businessId: formData.businessId,
        userId: formData.userId,
        serviceId: formData.serviceId,
        employeeId: formData.employeeId || undefined,
        date: appointmentDate,
        status: formData.status,
        note: formData.note || undefined,
      };
      addAppointment(newAppointment);
      toast({
        title: "Agendamento criado",
        description: "Novo agendamento foi criado com sucesso.",
      });
    }

    setIsDialogOpen(false);
    setEditingAppointment(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      businessId: "",
      userId: "",
      serviceId: "",
      employeeId: "",
      date: "",
      time: "",
      status: "scheduled",
      note: "",
    });
  };

  const handleEdit = (appointment: Appointment) => {
    setEditingAppointment(appointment);
    const appointmentDate = new Date(appointment.date);
    setFormData({
      businessId: appointment.businessId,
      userId: appointment.userId,
      serviceId: appointment.serviceId,
      employeeId: appointment.employeeId || "",
      date: appointmentDate.toISOString().split('T')[0],
      time: appointmentDate.toTimeString().slice(0, 5),
      status: appointment.status,
      note: appointment.note || "",
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir este agendamento?")) {
      deleteAppointment(id);
      toast({
        title: "Agendamento excluído",
        description: "O agendamento foi excluído com sucesso.",
      });
    }
  };

  const getAppointmentDetails = (appointment: Appointment) => {
    const business = businesses.find(b => b.id === appointment.businessId);
    const user = users.find(u => u.id === appointment.userId);
    const service = services.find(s => s.id === appointment.serviceId);
    
    return { business, user, service };
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 mr-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar agendamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-glam-800 border-glam-600 text-white"
            />
          </div>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Novo Agendamento
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-glam-800 border-glam-700 text-white">
            <DialogHeader>
              <DialogTitle>
                {editingAppointment ? "Editar Agendamento" : "Novo Agendamento"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="businessId">Empresa</Label>
                <select
                  id="businessId"
                  value={formData.businessId}
                  onChange={(e) => setFormData({ ...formData, businessId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione uma empresa</option>
                  {businesses.map(business => (
                    <option key={business.id} value={business.id}>
                      {business.businessName}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="userId">Cliente</Label>
                <select
                  id="userId"
                  value={formData.userId}
                  onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione um cliente</option>
                  {users.filter(user => user.role === 'client').map(user => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="serviceId">Serviço</Label>
                <select
                  id="serviceId"
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  required
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name} - R$ {service.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date">Data</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="time">Horário</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as AppointmentStatus })}
                  className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                >
                  {Object.entries(statusLabels).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <Label htmlFor="note">Observações</Label>
                <Input
                  id="note"
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  className="bg-glam-700 border-glam-600"
                />
              </div>

              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900">
                {editingAppointment ? "Atualizar" : "Criar"} Agendamento
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {filteredAppointments.map((appointment) => {
          const { business, user, service } = getAppointmentDetails(appointment);
          return (
            <Card key={appointment.id} className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-gold-400" />
                      <h3 className="text-xl font-semibold text-white">
                        {new Date(appointment.date).toLocaleDateString('pt-BR')} às {new Date(appointment.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </h3>
                    </div>
                    
                    <div className="space-y-1 mb-3">
                      <p className="text-gray-300">
                        <span className="font-medium">Empresa:</span> {business?.businessName || 'N/A'}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Cliente:</span> {user?.name || 'N/A'}
                      </p>
                      <p className="text-gray-300">
                        <span className="font-medium">Serviço:</span> {service?.name || 'N/A'}
                        {service && <span className="text-gold-400 ml-2">R$ {service.price.toFixed(2)}</span>}
                      </p>
                      {appointment.note && (
                        <p className="text-gray-400 text-sm">
                          <span className="font-medium">Observações:</span> {appointment.note}
                        </p>
                      )}
                    </div>
                    
                    <Badge variant="outline" className={statusColors[appointment.status]}>
                      {statusLabels[appointment.status]}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleEdit(appointment)}
                      className="border-glam-600 text-gray-300 hover:bg-glam-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(appointment.id)}
                      className="border-red-600 text-red-400 hover:bg-red-600/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredAppointments.length === 0 && (
        <Card className="bg-glam-800 border-glam-700 text-center p-8">
          <CardContent>
            <p className="text-gray-400">Nenhum agendamento encontrado.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentManagement;
