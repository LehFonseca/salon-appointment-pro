
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApp } from "@/contexts/AppContext";
import UserManagement from "@/components/admin/UserManagement";
import BusinessManagement from "@/components/admin/BusinessManagement";
import ServiceManagement from "@/components/admin/ServiceManagement";
import AppointmentManagement from "@/components/admin/AppointmentManagement";
import ReviewManagement from "@/components/admin/ReviewManagement";
import { Users, Building, Wrench, Calendar, Star } from "lucide-react";

const AdminPage = () => {
  const { users, businesses, services, appointments, reviews } = useApp();

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold gradient-heading mb-2">
              Painel Administrativo
            </h1>
            <p className="text-gray-300">
              Gerencie todos os dados do sistema GlamPro
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Users className="h-8 w-8 text-gold-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{users.length}</p>
                    <p className="text-gray-400 text-sm">Usuários</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Building className="h-8 w-8 text-gold-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{businesses.length}</p>
                    <p className="text-gray-400 text-sm">Empresas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Wrench className="h-8 w-8 text-gold-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{services.length}</p>
                    <p className="text-gray-400 text-sm">Serviços</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-8 w-8 text-gold-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{appointments.length}</p>
                    <p className="text-gray-400 text-sm">Agendamentos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-glam-800 border-glam-700">
              <CardContent className="p-6">
                <div className="flex items-center gap-2">
                  <Star className="h-8 w-8 text-gold-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{reviews.length}</p>
                    <p className="text-gray-400 text-sm">Avaliações</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs de Gerenciamento */}
          <Tabs defaultValue="users" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-glam-800">
              <TabsTrigger value="users" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Usuários
              </TabsTrigger>
              <TabsTrigger value="businesses" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Empresas
              </TabsTrigger>
              <TabsTrigger value="services" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Serviços
              </TabsTrigger>
              <TabsTrigger value="appointments" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Agendamentos
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Avaliações
              </TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="mt-6">
              <UserManagement />
            </TabsContent>

            <TabsContent value="businesses" className="mt-6">
              <BusinessManagement />
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <ServiceManagement />
            </TabsContent>

            <TabsContent value="appointments" className="mt-6">
              <AppointmentManagement />
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <ReviewManagement />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
