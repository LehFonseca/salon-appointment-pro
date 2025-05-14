
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Star, MapPin, Phone, Clock, Heart } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import { Business, Service } from "@/types";

interface SalonDetailsProps {
  salon: Partial<Business>;
}

const SalonDetails = ({ salon }: SalonDetailsProps) => {
  const [activeTab, setActiveTab] = useState("services");
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handleBookService = (serviceId: string) => {
    console.log("Booking service:", serviceId);
    // Handle booking logic here
  };

  // Group services by category
  const servicesByCategory: Record<string, Service[]> = {};
  
  if (salon.services) {
    salon.services.forEach(service => {
      if (!servicesByCategory[service.category]) {
        servicesByCategory[service.category] = [];
      }
      servicesByCategory[service.category].push(service);
    });
  }

  const categoryNames = {
    haircut: "Haircuts",
    hair_coloring: "Hair Coloring",
    hair_treatment: "Hair Treatments",
    beard: "Beard & Shave",
    facial: "Facials",
    nails: "Nail Services",
    makeup: "Makeup",
    massage: "Massage",
    other: "Other Services",
  };

  return (
    <div>
      {/* Salon cover photo */}
      <div className="h-64 md:h-80 lg:h-96 w-full relative overflow-hidden">
        <img
          src={salon.photos?.[0] || "/placeholder.svg"}
          alt={salon.businessName}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
          <div className="container max-w-6xl flex justify-between items-end">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{salon.businessName}</h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <Star size={16} className="text-yellow-400 mr-1 fill-yellow-400" />
                  <span className="font-medium">{salon.rating}</span>
                  <span className="text-sm opacity-90 ml-1">({salon.reviewCount} reviews)</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>
                    {salon.address?.city}, {salon.address?.state}
                  </span>
                </div>
              </div>
            </div>
            <Button 
              variant="outline"
              className={`
                border-2 h-10 px-3 rounded-full
                ${isFavorite 
                  ? 'bg-white/10 border-white text-white' 
                  : 'bg-white/10 border-white/40 text-white hover:bg-white/20 hover:border-white'}
              `}
              onClick={() => setIsFavorite(!isFavorite)}
            >
              <Heart size={18} className={isFavorite ? "fill-pink-200 mr-2" : "mr-2"} />
              {isFavorite ? "Favorited" : "Favorite"}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl py-6 px-4">
        {/* Salon info and tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            <div className="p-5 border rounded-xl space-y-4">
              <h3 className="font-semibold text-lg">Information</h3>
              
              <div className="flex gap-3">
                <Phone size={18} className="text-beauty-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Contact</h4>
                  <p className="text-gray-600">{salon.phone || "(11) 9999-9999"}</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <MapPin size={18} className="text-beauty-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">
                    {salon.address?.street}, {salon.address?.number}
                    <br />
                    {salon.address?.city}, {salon.address?.state}
                    <br />
                    {salon.address?.zipCode}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Clock size={18} className="text-beauty-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Opening Hours</h4>
                  <div className="text-gray-600 text-sm grid grid-cols-2 gap-x-4 gap-y-1">
                    <div>Monday</div><div>9:00 - 19:00</div>
                    <div>Tuesday</div><div>9:00 - 19:00</div>
                    <div>Wednesday</div><div>9:00 - 19:00</div>
                    <div>Thursday</div><div>9:00 - 19:00</div>
                    <div>Friday</div><div>9:00 - 19:00</div>
                    <div>Saturday</div><div>9:00 - 17:00</div>
                    <div>Sunday</div><div>Closed</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border rounded-xl">
              <h3 className="font-semibold text-lg mb-4">About</h3>
              <p className="text-gray-600">
                {salon.description || "This establishment has been servicing clients for over 5 years with professional beauty services. Our team of experienced professionals are dedicated to providing you with the best service experience."}
              </p>
            </div>
          </div>

          {/* Tabs content */}
          <div className="lg:w-2/3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent mb-6">
                <TabsTrigger 
                  value="services"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-beauty-400 data-[state=active]:bg-transparent py-3"
                >
                  Services
                </TabsTrigger>
                <TabsTrigger 
                  value="gallery"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-beauty-400 data-[state=active]:bg-transparent py-3"
                >
                  Gallery
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-beauty-400 data-[state=active]:bg-transparent py-3"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger 
                  value="team"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-beauty-400 data-[state=active]:bg-transparent py-3"
                >
                  Team
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="services" className="mt-0">
                <div className="space-y-8">
                  {Object.keys(servicesByCategory).length > 0 ? (
                    Object.entries(servicesByCategory).map(([category, services]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-lg mb-4">
                          {categoryNames[category as keyof typeof categoryNames] || "Services"}
                        </h3>
                        <div className="grid gap-4">
                          {services.map(service => (
                            <ServiceCard 
                              key={service.id} 
                              service={service} 
                              onBook={handleBookService} 
                            />
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No services available at the moment.</p>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="gallery" className="mt-0">
                {salon.photos && salon.photos.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {salon.photos.map((photo, index) => (
                      <div key={index} className="aspect-square overflow-hidden rounded-lg">
                        <img 
                          src={photo} 
                          alt={`${salon.businessName} photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No photos available.</p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div className="text-center py-8">
                  <p className="text-gray-500">Reviews coming soon.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="team" className="mt-0">
                <div className="text-center py-8">
                  <p className="text-gray-500">Team information coming soon.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonDetails;
