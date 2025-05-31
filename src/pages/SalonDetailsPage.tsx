
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  MapPin, 
  Star, 
  Clock,
  Phone,
  Calendar,
  DollarSign
} from "lucide-react";
import { useBusinessById } from "@/hooks/useBusinesses";
import BookingCalendar from "@/components/booking/BookingCalendar";
import { useState } from "react";

const SalonDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { business, loading, error } = useBusinessById(id || '');
  const [showBookingDialog, setShowBookingDialog] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-glam-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-16 w-16 text-gold-400 mx-auto mb-4 animate-spin" />
          <p className="text-xl">Carregando estabelecimento...</p>
        </div>
      </div>
    );
  }

  if (error || !business) {
    return (
      <div className="min-h-screen bg-glam-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400">Estabelecimento não encontrado</p>
        </div>
      </div>
    );
  }

  const handleBookingComplete = () => {
    setShowBookingDialog(false);
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header do Salão */}
        <div className="mb-8">
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-6">
            <img
              src={business.photos?.[0] || "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"}
              alt={business.business_name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute bottom-6 left-6">
              <h1 className="text-4xl font-bold text-white mb-2">{business.business_name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-gold-400 fill-gold-400 mr-1" />
                  <span className="text-white font-medium">{business.rating || 0}</span>
                  <span className="text-gray-300 ml-1">({business.review_count || 0} avaliações)</span>
                </div>
                {business.address && (
                  <div className="flex items-center text-gray-300">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{business.address.neighborhood}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações do Salão */}
          <div className="lg:col-span-2 space-y-6">
            {business.description && (
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400">Sobre o Estabelecimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{business.description}</p>
                </CardContent>
              </Card>
            )}

            {/* Serviços */}
            {business.services && business.services.length > 0 && (
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400">Serviços Oferecidos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {business.services.map((service: any) => (
                      <div key={service.id} className="flex justify-between items-center p-4 bg-glam-900 rounded-lg">
                        <div>
                          <h3 className="font-semibold text-white">{service.name}</h3>
                          {service.description && (
                            <p className="text-gray-400 text-sm">{service.description}</p>
                          )}
                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center text-gray-300">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{service.duration} min</span>
                            </div>
                            <div className="flex items-center text-gold-400">
                              <DollarSign className="h-4 w-4 mr-1" />
                              <span>R$ {service.price}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Profissionais */}
            {business.employees && business.employees.length > 0 && (
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400">Nossa Equipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {business.employees.map((employee: any) => (
                      <div key={employee.id} className="flex items-center gap-4 p-4 bg-glam-900 rounded-lg">
                        <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center">
                          {employee.image_url ? (
                            <img src={employee.image_url} alt={employee.name} className="w-full h-full rounded-full object-cover" />
                          ) : (
                            <span className="text-gold-400 font-semibold">
                              {employee.name.split(' ').map((n: string) => n[0]).join('')}
                            </span>
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{employee.name}</h3>
                          <p className="text-gray-400 text-sm">{employee.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar de Agendamento */}
          <div className="space-y-6">
            <Card className="bg-glam-800 border-glam-700">
              <CardHeader>
                <CardTitle className="text-gold-400">Agende seu Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <Dialog open={showBookingDialog} onOpenChange={setShowBookingDialog}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      Agendar Agora
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-gold-400">
                        Agendar em {business.business_name}
                      </DialogTitle>
                    </DialogHeader>
                    <BookingCalendar
                      salonId={business.id}
                      salonName={business.business_name}
                      services={business.services || []}
                      onBookingComplete={handleBookingComplete}
                    />
                  </DialogContent>
                </Dialog>
                
                {business.address && (
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Localização</h4>
                      <div className="flex items-start gap-2 text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 text-gold-400 mt-0.5" />
                        <div>
                          <p>{business.address.street}, {business.address.number}</p>
                          <p>{business.address.neighborhood}</p>
                          <p>{business.address.city} - {business.address.state}</p>
                          <p>CEP: {business.address.zip_code}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetailsPage;
