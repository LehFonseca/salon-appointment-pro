
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";
import EmployeeSelection from "./EmployeeSelection";
import { useEmployees } from "@/hooks/useEmployees";
import { useAppointments } from "@/hooks/useAppointments";

interface BookingCalendarProps {
  salonId: string;
  salonName: string;
  services: Tables<'services'>[];
  onBookingComplete: () => void;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  rating: number;
  imageUrl?: string;
  availableTimes: string[];
  specialties: string[];
}

const BookingCalendar = ({ salonId, salonName, services, onBookingComplete }: BookingCalendarProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<Tables<'services'> | null>(null);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { employees: dbEmployees } = useEmployees(salonId);
  const { createAppointment } = useAppointments();

  // Converter funcionários do banco para o formato esperado
  const employees: Employee[] = dbEmployees.map(emp => ({
    id: emp.id,
    name: emp.name,
    position: emp.position,
    rating: 4.8, // Valor padrão
    imageUrl: emp.image_url || undefined,
    availableTimes: ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"],
    specialties: ["Diversos serviços"] // Valor padrão
  }));

  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];

  const handleServiceSelect = (service: Tables<'services'>) => {
    setSelectedService(service);
    setSelectedEmployee(null); // Reset employee when service changes
  };

  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployee(employee);
  };

  const handleTimeSelect = (time: string) => {
    if (!selectedEmployee || !selectedEmployee.availableTimes.includes(time)) {
      toast({
        title: "Horário indisponível",
        description: "Este horário não está disponível para o profissional selecionado.",
        variant: "destructive"
      });
      return;
    }
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !selectedService || !selectedEmployee) {
      toast({
        title: "Dados incompletos",
        description: "Por favor, selecione data, horário, serviço e profissional.",
        variant: "destructive"
      });
      return;
    }
    setShowConfirmation(true);
  };

  const confirmBooking = async () => {
    if (!selectedDate || !selectedTime || !selectedService || !selectedEmployee) return;

    try {
      // Criar data do agendamento
      const [hours, minutes] = selectedTime.split(':').map(Number);
      const appointmentDate = new Date(selectedDate);
      appointmentDate.setHours(hours, minutes, 0, 0);

      await createAppointment({
        business_id: salonId,
        service_id: selectedService.id,
        employee_id: selectedEmployee.id,
        appointment_date: appointmentDate.toISOString(),
        status: 'scheduled',
        user_id: '', // Será preenchido automaticamente pelo RLS
      });

      toast({
        title: "Agendamento confirmado!",
        description: `Seu agendamento para ${selectedService?.name} com ${selectedEmployee?.name} foi confirmado para ${selectedDate?.toLocaleDateString('pt-BR')} às ${selectedTime}.`,
      });
      
      setShowConfirmation(false);
      onBookingComplete();
    } catch (error) {
      console.error('Erro ao confirmar agendamento:', error);
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const isTimeAvailable = (time: string) => {
    return selectedEmployee ? selectedEmployee.availableTimes.includes(time) : false;
  };

  return (
    <div className="space-y-6">
      <Card className="bg-glam-800 border-glam-700">
        <CardHeader>
          <CardTitle className="text-gold-400">Selecione o Serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-colors ${
                  selectedService?.id === service.id 
                    ? 'bg-gold-500/20 border-gold-500' 
                    : 'bg-glam-900 border-glam-600 hover:bg-glam-700'
                }`}
                onClick={() => handleServiceSelect(service)}
              >
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-white">{service.name}</h3>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                      <p className="text-gray-400 text-sm">{service.duration} minutos</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gold-400 font-bold">R$ {service.price}</p>
                      {selectedService?.id === service.id && (
                        <Check className="h-5 w-5 text-gold-400 ml-auto mt-1" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {selectedService && (
        <EmployeeSelection
          employees={employees}
          selectedEmployee={selectedEmployee}
          onEmployeeSelect={handleEmployeeSelect}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-glam-800 border-glam-700">
          <CardHeader>
            <CardTitle className="text-gold-400">Selecione a Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0}
              className="rounded-md border border-glam-600 bg-glam-900 text-white pointer-events-auto"
            />
          </CardContent>
        </Card>

        <Card className="bg-glam-800 border-glam-700">
          <CardHeader>
            <CardTitle className="text-gold-400">Selecione o Horário</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => {
                const isAvailable = selectedEmployee ? isTimeAvailable(time) : false;
                const isSelected = selectedTime === time;
                
                return (
                  <Button
                    key={time}
                    variant={isSelected ? "default" : "outline"}
                    className={`${
                      isSelected 
                        ? 'bg-gold-500 text-glam-900 hover:bg-gold-600' 
                        : isAvailable
                        ? 'border-glam-600 text-gray-300 hover:bg-glam-700'
                        : 'border-glam-600 text-gray-500 bg-glam-800 cursor-not-allowed'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                    disabled={!selectedDate || !selectedEmployee || !isAvailable}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {time}
                  </Button>
                );
              })}
            </div>
            {selectedEmployee && (
              <p className="text-gray-400 text-sm mt-3">
                Horários disponíveis para {selectedEmployee.name}
              </p>
            )}
          </CardContent>
        </Card>
      </div>

      {selectedDate && selectedTime && selectedService && selectedEmployee && (
        <Card className="bg-glam-800 border-glam-700">
          <CardHeader>
            <CardTitle className="text-gold-400">Resumo do Agendamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-300">Estabelecimento:</span>
                <span className="text-white font-medium">{salonName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Serviço:</span>
                <span className="text-white font-medium">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Profissional:</span>
                <span className="text-white font-medium">{selectedEmployee.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Data:</span>
                <span className="text-white font-medium">{formatDate(selectedDate)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Horário:</span>
                <span className="text-white font-medium">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Duração:</span>
                <span className="text-white font-medium">{selectedService.duration} minutos</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="text-gold-400 font-semibold">Total:</span>
                <span className="text-gold-400 font-bold">R$ {selectedService.price}</span>
              </div>
            </div>
            <Button 
              onClick={handleBooking}
              className="w-full mt-6 bg-gold-500 hover:bg-gold-600 text-glam-900"
            >
              Confirmar Agendamento
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="bg-glam-800 border-glam-700 text-white">
          <DialogHeader>
            <DialogTitle className="text-gold-400 text-center text-xl">
              Confirmar Agendamento
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-center">
            <div className="bg-glam-900 p-4 rounded-lg space-y-2">
              <p className="text-lg font-semibold text-white">{selectedService?.name}</p>
              <p className="text-gray-300">{salonName}</p>
              <p className="text-gray-300">Profissional: {selectedEmployee?.name}</p>
              <p className="text-gold-400 font-medium">
                {selectedDate && formatDate(selectedDate)} às {selectedTime}
              </p>
              <p className="text-gold-400 font-bold text-xl">
                R$ {selectedService?.price}
              </p>
            </div>
            <p className="text-gray-300">
              Você receberá uma confirmação por email com todos os detalhes do seu agendamento.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={() => setShowConfirmation(false)}
                className="flex-1 border-glam-600 text-gray-300 hover:bg-glam-700"
              >
                Cancelar
              </Button>
              <Button 
                onClick={confirmBooking}
                className="flex-1 bg-gold-500 hover:bg-gold-600 text-glam-900"
              >
                Confirmar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookingCalendar;
