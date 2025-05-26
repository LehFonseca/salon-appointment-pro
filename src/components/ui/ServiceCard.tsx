
import { Button } from "@/components/ui/button";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onBook: (serviceId: string) => void;
}

const ServiceCard = ({ service, onBook }: ServiceCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const formatDuration = (minutes: number) => {
    if (minutes < 60) {
      return `${minutes} min`;
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return remainingMinutes > 0 
        ? `${hours}h ${remainingMinutes}min` 
        : `${hours}h`;
    }
  };

  return (
    <div className="border rounded-lg overflow-hidden hover:border-beauty-200 transition-colors">
      <div className="p-4 flex justify-between">
        <div className="space-y-1.5">
          <h3 className="font-semibold text-base">{service.name}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{service.description}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-medium text-beauty-500">{formatPrice(service.price)}</span>
            <span>•</span>
            <span>{formatDuration(service.duration)}</span>
          </div>
        </div>
        
        {service.imageUrl && (
          <div className="ml-4 flex-shrink-0">
            <img
              src={service.imageUrl}
              alt={service.name}
              className="h-20 w-20 object-cover rounded-md"
            />
          </div>
        )}
      </div>
      <div className="px-4 py-3 bg-gray-50 flex justify-between items-center">
        <div className="text-xs text-gray-500">
          {getServiceCategoryName(service.category)}
        </div>
        <Button
          onClick={() => onBook(service.id)}
          className="bg-beauty-400 hover:bg-beauty-500 text-sm h-9"
        >
          Agendar
        </Button>
      </div>
    </div>
  );
};

const getServiceCategoryName = (category: string) => {
  const categories = {
    haircut: "Corte de Cabelo",
    hair_coloring: "Coloração",
    hair_treatment: "Tratamento Capilar",
    beard: "Barba",
    facial: "Facial",
    nails: "Unhas",
    makeup: "Maquiagem",
    massage: "Massagem",
    other: "Outros",
  };
  
  return categories[category as keyof typeof categories] || "Serviço";
};

export default ServiceCard;
