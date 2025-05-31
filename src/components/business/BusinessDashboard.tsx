
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
  BarChart3
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const BusinessDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");

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

  const todayAppointments = [
    { id: 1, time: "09:00", client: "Maria Silva", service: "Corte + Escova", status: "confirmed", value: 80 },
    { id: 2, time: "10:30", client: "João Santos", service: "Barba", status: "completed", value: 35 },
    { id: 3, time: "14:00", client: "Ana Costa", service: "Coloração", status: "confirmed", value: 150 },
    { id: 4, time: "15:30", client: "Pedro Lima", service: "Corte Masculino", status: "scheduled", value: 45 },
    { id: 5, time: "17:00", client: "Carla Souza", service: "Tratamento", status: "scheduled", value: 90 },
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      scheduled: { label: "Agendado", variant: "secondary" as const },
      confirmed: { label: "Confirmado", variant: "default" as const },
      completed: { label: "Concluído", variant: "outline" as const },
    };
    
    return (
      <Badge variant={statusConfig[status as keyof typeof statusConfig].variant}>
        {statusConfig[status as keyof typeof statusConfig].label}
      </Badge>
    );
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
                <p className="text-2xl font-bold text-white">12</p>
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
        <TabsList className="grid w-full grid-cols-5 bg-glam-800">
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
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{appointment.time}</p>
                      {getStatusBadge(appointment.status)}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
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
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Funcionários</h3>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Funcionário
            </Button>
          </div>
          
          <div className="grid gap-4">
            {[
              { name: "Ana Silva", role: "Cabeleireira Senior", agendamentos: 8, receita: "R$ 640" },
              { name: "Carlos Santos", role: "Barbeiro", agendamentos: 6, receita: "R$ 270" },
              { name: "Mariana Costa", role: "Esteticista", agendamentos: 4, receita: "R$ 320" },
            ].map((staff, index) => (
              <Card key={index} className="bg-glam-800 border-glam-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-white">{staff.name}</h4>
                      <p className="text-gray-400">{staff.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white">{staff.agendamentos} agendamentos hoje</p>
                      <p className="text-gold-400 font-semibold">{staff.receita}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="services" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-white">Serviços</h3>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Serviço
            </Button>
          </div>
          
          <div className="grid gap-4">
            {[
              { name: "Corte Feminino", price: "R$ 80", duration: "60 min", bookings: 15 },
              { name: "Coloração", price: "R$ 150", duration: "120 min", bookings: 8 },
              { name: "Corte Masculino", price: "R$ 45", duration: "45 min", bookings: 12 },
              { name: "Tratamento Capilar", price: "R$ 90", duration: "45 min", bookings: 6 },
            ].map((service, index) => (
              <Card key={index} className="bg-glam-800 border-glam-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-white">{service.name}</h4>
                      <p className="text-gray-400">{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gold-400 font-semibold">{service.price}</p>
                      <p className="text-gray-400">{service.bookings} agendamentos hoje</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BusinessDashboard;
