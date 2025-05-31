
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, Clock, User, CreditCard, MapPin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface AppointmentConfirmationProps {
  appointment: {
    id: string;
    businessName: string;
    serviceName: string;
    employeeName: string;
    date: Date;
    duration: number;
    price: number;
    businessAddress: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentConfirmation = ({ appointment, isOpen, onClose }: AppointmentConfirmationProps) => {
  const [isConfirming, setIsConfirming] = useState(false);

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const getEndTime = (startDate: Date, duration: number) => {
    const endDate = new Date(startDate.getTime() + duration * 60000);
    return formatTime(endDate);
  };

  const handleConfirmAppointment = async () => {
    setIsConfirming(true);
    
    // Simular confirmação do agendamento
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Agendamento confirmado!",
      description: "Você receberá um e-mail com os detalhes do seu agendamento.",
    });
    
    setIsConfirming(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-gold-400 text-center text-xl flex items-center justify-center gap-2">
            <CheckCircle className="h-6 w-6" />
            Confirmar Agendamento
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="bg-glam-900 border-glam-600">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg text-white">{appointment.businessName}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <Calendar className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{formatDate(appointment.date)}</p>
                    <p className="text-gray-400 text-sm">Data do agendamento</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <Clock className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">
                      {formatTime(appointment.date)} - {getEndTime(appointment.date, appointment.duration)}
                    </p>
                    <p className="text-gray-400 text-sm">{appointment.duration} minutos</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <User className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{appointment.employeeName}</p>
                    <p className="text-gray-400 text-sm">Profissional</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/20 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-gold-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{appointment.businessAddress}</p>
                    <p className="text-gray-400 text-sm">Localização</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-glam-600 pt-4">
                <h4 className="font-semibold text-white mb-2">Serviço</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">{appointment.serviceName}</span>
                  <span className="text-gold-400 font-bold">R$ {appointment.price.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-glam-600 pt-4">
                <div className="flex justify-between items-center text-lg">
                  <span className="font-semibold text-white">Total</span>
                  <span className="font-bold text-gold-400">R$ {appointment.price.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">Informações Importantes</h4>
            <ul className="space-y-1 text-sm text-blue-300">
              <li>• Chegue com 10 minutos de antecedência</li>
              <li>• Cancelamentos devem ser feitos com 24h de antecedência</li>
              <li>• Você receberá um lembrete por WhatsApp</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 border-glam-600 text-gray-300 hover:bg-glam-700"
              disabled={isConfirming}
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleConfirmAppointment}
              className="flex-1 bg-gold-500 hover:bg-gold-600 text-glam-900"
              disabled={isConfirming}
            >
              {isConfirming ? "Confirmando..." : "Confirmar Agendamento"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentConfirmation;
