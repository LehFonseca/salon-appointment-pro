
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Phone, Calendar, MapPin, Star, Clock, Camera } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "Maria Santos",
    email: "maria.santos@email.com",
    phone: "(11) 99999-9999",
    cpf: "123.456.789-00",
    birthDate: "1990-05-15",
    address: {
      street: "Rua das Flores, 123",
      neighborhood: "Centro",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567"
    },
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b6d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    memberSince: "2023-01-15"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const recentAppointments = [
    {
      id: "1",
      businessName: "Salão Beleza Pura",
      serviceName: "Corte e Escova",
      date: "2024-12-10",
      time: "14:00",
      status: "completed",
      rating: 5
    },
    {
      id: "2", 
      businessName: "Spa & Bem-estar",
      serviceName: "Massagem Relaxante",
      date: "2024-12-05",
      time: "10:30",
      status: "completed",
      rating: 4
    },
    {
      id: "3",
      businessName: "Nail Design Studio",
      serviceName: "Manicure Francesa",
      date: "2024-11-28",
      time: "16:00", 
      status: "completed",
      rating: 5
    }
  ];

  const favoriteBusinesses = [
    {
      id: "1",
      name: "Salão Beleza Pura",
      category: "Salão de Beleza",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "2",
      name: "Barbearia Clássica", 
      category: "Barbearia",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleSave = () => {
    setUser(formData);
    setIsEditing(false);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "Concluído", variant: "outline" as const },
      scheduled: { label: "Agendado", variant: "secondary" as const },
      confirmed: { label: "Confirmado", variant: "default" as const },
    };
    
    return (
      <Badge variant={statusConfig[status as keyof typeof statusConfig]?.variant || "secondary"}>
        {statusConfig[status as keyof typeof statusConfig]?.label || status}
      </Badge>
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold gradient-heading mb-8">
            Meu Perfil
          </h1>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="bg-glam-800 border-glam-700">
              <TabsTrigger value="profile" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Informações Pessoais
              </TabsTrigger>
              <TabsTrigger value="appointments" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Agendamentos Recentes
              </TabsTrigger>
              <TabsTrigger value="favorites" className="data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">
                Favoritos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-gold-400">Informações Pessoais</CardTitle>
                    {!isEditing ? (
                      <Button
                        onClick={() => setIsEditing(true)}
                        className="bg-gold-500 hover:bg-gold-600 text-glam-900"
                      >
                        Editar Perfil
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button
                          onClick={handleSave}
                          className="bg-gold-500 hover:bg-gold-600 text-glam-900"
                        >
                          Salvar
                        </Button>
                        <Button
                          onClick={handleCancel}
                          variant="outline"
                          className="border-glam-600 text-gray-300"
                        >
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Avatar Section */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={user.profileImage} />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {isEditing && (
                        <Button
                          size="sm"
                          className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-gold-500 hover:bg-gold-600 text-glam-900"
                        >
                          <Camera className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                      <p className="text-gray-400">Membro desde {new Date(user.memberSince).toLocaleDateString('pt-BR')}</p>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nome Completo</Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-glam-900 border-glam-600"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-white">
                          <User className="h-4 w-4 text-gold-400" />
                          {user.name}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">E-mail</Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-glam-900 border-glam-600"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-white">
                          <Mail className="h-4 w-4 text-gold-400" />
                          {user.email}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Telefone</Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-glam-900 border-glam-600"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-white">
                          <Phone className="h-4 w-4 text-gold-400" />
                          {user.phone}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cpf" className="text-gray-300">CPF</Label>
                      {isEditing ? (
                        <Input
                          id="cpf"
                          value={formData.cpf}
                          onChange={(e) => setFormData({...formData, cpf: e.target.value})}
                          className="bg-glam-900 border-glam-600"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-white">
                          <Calendar className="h-4 w-4 text-gold-400" />
                          {user.cpf}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gold-400 flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Endereço
                    </h4>
                    
                    {isEditing ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="street" className="text-gray-300">Rua</Label>
                          <Input
                            id="street"
                            value={formData.address.street}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, street: e.target.value}
                            })}
                            className="bg-glam-900 border-glam-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="neighborhood" className="text-gray-300">Bairro</Label>
                          <Input
                            id="neighborhood"
                            value={formData.address.neighborhood}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, neighborhood: e.target.value}
                            })}
                            className="bg-glam-900 border-glam-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="city" className="text-gray-300">Cidade</Label>
                          <Input
                            id="city"
                            value={formData.address.city}
                            onChange={(e) => setFormData({
                              ...formData, 
                              address: {...formData.address, city: e.target.value}
                            })}
                            className="bg-glam-900 border-glam-600"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="text-gray-300">
                        <p>{user.address.street}</p>
                        <p>{user.address.neighborhood}, {user.address.city} - {user.address.state}</p>
                        <p>CEP: {user.address.zipCode}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="appointments">
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400">Agendamentos Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex items-center justify-between p-4 bg-glam-900 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="bg-gold-500/20 p-2 rounded-lg">
                            <Clock className="h-5 w-5 text-gold-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{appointment.businessName}</h4>
                            <p className="text-gold-400">{appointment.serviceName}</p>
                            <p className="text-gray-400 text-sm">
                              {new Date(appointment.date).toLocaleDateString('pt-BR')} às {appointment.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            {renderStars(appointment.rating)}
                          </div>
                          {getStatusBadge(appointment.status)}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400">Estabelecimentos Favoritos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favoriteBusinesses.map((business) => (
                      <div key={business.id} className="flex items-center gap-4 p-4 bg-glam-900 rounded-lg">
                        <img
                          src={business.image}
                          alt={business.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{business.name}</h4>
                          <p className="text-gray-400 text-sm">{business.category}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-gray-300 text-sm">{business.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
