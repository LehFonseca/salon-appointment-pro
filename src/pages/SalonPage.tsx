
import { useParams } from "react-router-dom";
import SalonDetails from "@/components/salon/SalonDetails";
import { Business } from "@/types";

// Mock data for demonstration
const mockSalons: Record<string, Partial<Business>> = {
  "1": {
    id: "1",
    businessName: "Eliza's Hair & Beauty",
    category: "hair_salon",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Rua Augusta",
      number: "1200",
      zipCode: "01304-001",
      neighborhood: "Consolação" // Added neighborhood
    },
    photos: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    ],
    rating: 4.8,
    reviewCount: 156,
    services: [
      { id: "s1", name: "Women's Haircut", description: "Includes wash, cut and blow dry", price: 80, duration: 60, category: "haircut" },
      { id: "s2", name: "Men's Haircut", description: "Includes wash, cut and styling", price: 60, duration: 45, category: "haircut" },
      { id: "s3", name: "Hair Coloring", description: "Full color application", price: 150, duration: 120, category: "hair_coloring" },
      { id: "s4", name: "Highlights", description: "Partial or full highlights", price: 180, duration: 150, category: "hair_coloring" },
      { id: "s5", name: "Balayage", description: "Natural looking, sun-kissed highlights", price: 220, duration: 180, category: "hair_coloring" },
      { id: "s6", name: "Hair Treatment", description: "Deep conditioning treatment", price: 70, duration: 45, category: "hair_treatment" },
      { id: "s7", name: "Blowout & Styling", description: "Wash, blow dry and style", price: 65, duration: 45, category: "other" },
      { id: "s8", name: "Updo", description: "Formal hair styling for special occasions", price: 100, duration: 60, category: "other" },
    ],
    description: "Eliza's Hair & Beauty is a premium salon located in the heart of São Paulo. With over 10 years of experience, our skilled team offers a range of services from haircuts and coloring to specialized treatments. We pride ourselves on using high-quality products and providing exceptional customer service in a relaxing environment."
  }
};

const SalonPage = () => {
  const { id } = useParams<{id: string}>();
  
  // In a real application, you would fetch this data from an API
  // For now, we'll use mock data
  const salon = mockSalons[id || "1"] || mockSalons["1"];

  return (
    <div className="min-h-screen bg-glam-900">
      <SalonDetails salon={salon} />
    </div>
  );
};

export default SalonPage;
