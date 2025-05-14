
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Business } from "@/types";

interface SalonCardProps {
  salon: Partial<Business>;
  highlight?: boolean;
}

const SalonCard = ({ salon, highlight = false }: SalonCardProps) => {
  const {
    id = "1",
    businessName = "Sample Salon",
    category = "hair_salon",
    address = { city: "Sample City", state: "SP" },
    photos = ["/placeholder.svg"],
    rating = 4.5,
    reviewCount = 128,
    services = [],
  } = salon;

  const categoryNames = {
    hair_salon: "Hair Salon",
    barbershop: "Barbershop",
    nail_salon: "Nail Salon",
    spa: "Spa",
    esthetic_clinic: "Esthetic Clinic",
    makeup_studio: "Makeup Studio",
    other: "Beauty Service",
  };

  return (
    <Link to={`/salon/${id}`}>
      <div 
        className={`
          overflow-hidden rounded-xl card-hover
          ${highlight ? "border-2 border-beauty-400" : "border border-border"}
        `}
      >
        <div className="relative h-48">
          <img
            src={photos[0]}
            alt={businessName}
            className="h-full w-full object-cover"
          />
          {highlight && (
            <div className="absolute top-3 left-3 bg-beauty-400 text-white text-xs font-bold px-3 py-1 rounded-full">
              Featured
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">{businessName}</h3>
            <div className="flex items-center bg-beauty-50 px-2 py-1 rounded-md">
              <Star size={14} className="text-yellow-500 mr-1 fill-yellow-500" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-xs text-gray-500 ml-1">({reviewCount})</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500">
            <span>{categoryNames[category]}</span>
            <span className="mx-2">•</span>
            <span>{address.city}, {address.state}</span>
          </div>

          {services && services.length > 0 && (
            <div className="pt-2 border-t border-border">
              <p className="text-sm text-gray-600 font-medium mb-1.5">Services:</p>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service) => (
                  <span 
                    key={service.id}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {service.name}
                  </span>
                ))}
                {services.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    +{services.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SalonCard;
