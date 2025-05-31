import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Clock,
  Star,
  Plus,
  BarChart3,
  CheckCircle,
  XCircle
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import EmployeeManagement from "./EmployeeManagement";
import ServiceManagement from "./ServiceManagement";
import { useAppointments } from "@/hooks/useAppointments";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const BusinessDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [businessId, setBusinessId] = useState<string>(""); // Seria obtido do contexto do usuário

  // Para demonstração, vamos usar dados mockados, mas em produção seria do banco
  const { appointments, loading } = useAppointments(undefined, businessId);

  // Dados mockados para demonstração
  const appointmentsData = [
    { name: 'Seg', agendamentos: 12, receita: 960 },
    { name: 'Ter', agendamentos: 8, receita: 640 },
    { name: 'Qua', agendamentos: 15, receita: 1200 },
    { name: 'Qui', agendamentos: 10, receita: 800 },
    { name: 'Sex', agendamentos: 18, receita: 1440 },
    { name: 'Sáb', agendamentos: 22, receita: 1760 },
    { name: 'Dom', agendamentos: 0, receita: 0 },
  ];

  const revenueData = [
    { month: 'Jan', receita: 25000 },
    { month: 'Fev', receita: 28000 },
    { month: 'Mar', receita: 32000 },
    { month: 'Abr', receita: 30000 },
    { month: 'Mai', receita: 35000 },
    { month: 'Jun', receita: 38000 },
  ];

  const todayAppointments = appointments.slice(0, 5).map(appointment => ({
    id: appointment.id,
    time: new Date(appointment.appointment_date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    client: "Cliente",
    service: appointment.service?.name || "Serviço",
    status: appointment.status,
    value: appointment.service?.price || 0,
    employee: appointment.employee?.name || "Funcionário"
  }));

  const reviews = [
    { id: 1, client: "Maria Silva", rating: 5, comment: "Excelente atendimento! Adorei o corte.", date: "2024-01-10", service: "Corte Feminino" },
    { id: 2, client: "João Santos", rating: 4, comment: "Muito bom, profissional competente.", date: "2024-01-09", service: "Barba" },
    { id: 3, client: "Ana Costa", rating: 5, comment: "Superou minhas expectativas!", date: "2024-01-08", service: "Coloração" },
  ];

  const pendingPayments = [
    { id: 1, client: "Maria Silva", service: "Corte + Escova", value: 80, date: "2024-01-10", status: "pending" },
    { id: 2, client: "Pedro Lima", service: "Corte Masculino", value: 45, date: "2024-01-09", status: "pending" },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      scheduled: { label: "Agendado", variant: "secondary" as const, icon: Clock },
      confirmed: { label: "Confirmado", variant: "default" as const, icon: CheckCircle },
      completed: { label: "Concluído", variant: "outline" as const, icon: CheckCircle },
      cancelled: { label: "Cancelado", variant: "destructive" as const, icon: XCircle },
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.scheduled;
    const Icon = config.icon;
    
    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {config.label}
      </Badge>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  const updateAppointmentStatus = async (appointmentId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .update({ status: newStatus })
        .eq('id', appointmentId);

      if (error) throw error;

      toast({
        title: "Status atualizado",
        description: "O status do agendamento foi atualizado com sucesso."
      });
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o status do agendamento.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-glam-800 border-glam-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Agendamentos Hoje</p>
                <p className="text-2xl font-bold text-white">{todayAppointments.length}</p>
                <p className="text-green-400 text-sm">+2 que ontem</p>
              </div>
              <Calendar className="h-8 w-8 text-gold-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-glam-800 border-glam-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Receita Hoje</p>
                <p className="text-2xl font-bold text-white">R$ 960</p>
                <p className="text-green-400 text-sm">+15% que ontem</p>
              </div>
              <DollarSign className="h-8 w-8 text-gold-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-glam-800 border-glam-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Clientes Ativos</p>
                <p className="text-2xl font-bold text-white">234</p>
                <p className="text-green-400 text-sm">+8 este mês</p>
              </div>
              <Users className="h-8 w-8 text-gold-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-glam-800 border-glam-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avaliação Média</p>
                <p className="text-2xl font-bold text-white">4.8</p>
                <p className="text-green-400 text-sm">+0.2 este mês</p>
              </div>
              <Star className="h-8 w-8 text-gold-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-7 bg-glam-800">
          <TabsTrigger value="overview" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="appointments" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Agendamentos
          </TabsTrigger>
          <TabsTrigger value="revenue" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Faturamento
          </TabsTrigger>
          <TabsTrigger value="staff" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Funcionários
          </TabsTrigger>
          <TabsTrigger value="services" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Serviços
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Avaliações
          </TabsTrigger>
          <TabsTrigger value="payments" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
            Pagamentos
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-glam-800 border-glam-700">
              <CardHeader>
                <CardTitle className="text-gold-400">Agendamentos da Semana</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={appointmentsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#1F2937', 
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#ffffff'
                      }} 
                    />
                    <Bar dataKey="agendamentos" fill="#F59E0B" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-glam-800 border-glam-700">
              <CardHeader>
                <CardTitle className="text-gold-400">Agendamentos de Hoje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayAppointments.slice(0, 5).map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-3 bg-glam-900 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gold-500/20 p-2 rounded-lg">
                        <Clock className="h-4 w-4 text-gold-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">{appointment.client}</p>
                        <p className="text-sm text-gray-400">{appointment.service}</p>
                        <p className="text-xs text-gray-500">{appointment.employee}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{appointment.time}</p>
                      <p className="text-gold-400 font-semibold text-sm">R$ {appointment.value}</p>
                      {getStatusBadge(appointment.status)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="appointments" className="space-y-6">
          <Card className="bg-glam-800 border-glam-700">
            <CardHeader>
              <CardTitle className="text-gold-400">Todos os Agendamentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {appointments.map((appointment) => (
                <div key={appointment.id} className="flex items-center justify-between p-4 bg-glam-900 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold-500/20 p-3 rounded-lg">
                      <Clock className="h-5 w-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Cliente</p>
                      <p className="text-gray-400">{appointment.service?.name}</p>
                      <p className="text-sm text-gray-500">Profissional: {appointment.employee?.name}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-4">
                    <div>
                      <p className="text-white font-medium">
                        {new Date(appointment.appointment_date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                      <p className="text-gold-400 font-bold">R$ {appointment.service?.price}</p>
                      {getStatusBadge(appointment.status)}
                    </div>
                    <div className="flex gap-2">
                      {appointment.status === 'scheduled' && (
                        <Button
                          size="sm"
                          onClick={() => updateAppointmentStatus(appointment.id, 'confirmed')}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Confirmar
                        </Button>
                      )}
                      {appointment.status === 'confirmed' && (
                        <Button
                          size="sm"
                          onClick={() => updateAppointmentStatus(appointment.id, 'completed')}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Concluir
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue" className="space-y-6">
          <Card className="bg-glam-800 border-glam-700">
            <CardHeader>
              <CardTitle className="text-gold-400">Receita Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#ffffff'
                    }} 
                  />
                  <Line type="monotone" dataKey="receita" stroke="#F59E0B" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff" className="space-y-6">
          <EmployeeManagement businessId={businessId} />
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <ServiceManagement businessId={businessId} />
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Avaliações dos Clientes</h3>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-white font-semibold">4.8</span>
              <span className="text-gray-400">({reviews.length} avaliações)</span>
            </div>
          </div>
          
          <div className="grid gap-4">
            {reviews.map((review) => (
              <Card key={review.id} className="bg-glam-800 border-glam-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-white">{review.client}</h4>
                      <p className="text-gray-400 text-sm">{review.service}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex gap-1 mb-1">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">A Receber Hoje</p>
                    <p className="text-2xl font-bold text-white">R$ 125</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-gold-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Recebido Hoje</p>
                    <p className="text-2xl font-bold text-white">R$ 835</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">Total do Mês</p>
                    <p className="text-2xl font-bold text-white">R$ 38.000</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-gold-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-glam-800 border-glam-700">
            <CardHeader>
              <CardTitle className="text-gold-400">Pagamentos Pendentes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-4 bg-glam-900 rounded-lg">
                  <div>
                    <p className="font-medium text-white">{payment.client}</p>
                    <p className="text-gray-400">{payment.service}</p>
                    <p className="text-gray-500 text-sm">{payment.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gold-400 font-bold">R$ {payment.value}</p>
                    <Badge variant="secondary">Pendente</Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessDashboard;
