
import { useParams } from "react-router-dom";
import SalonDetails from "@/components/salon/SalonDetails";
import { Business } from "@/types";

// Dados mock para demonstração
const mockSalons: Record<string, Partial<Business>> = {
  "1": {
    id: "1",
    businessName: "Eliza Hair & Beauty",
    category: "hair_salon",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Rua Augusta",
      number: "1200",
      zipCode: "01304-001",
      neighborhood: "Consolação"
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
      { id: "s1", name: "Corte Feminino", description: "Inclui lavagem, corte e escova", price: 80, duration: 60, category: "haircut" },
      { id: "s2", name: "Corte Masculino", description: "Inclui lavagem, corte e finalização", price: 60, duration: 45, category: "haircut" },
      { id: "s3", name: "Coloração", description: "Aplicação de cor completa", price: 150, duration: 120, category: "hair_coloring" },
      { id: "s4", name: "Mechas", description: "Mechas parciais ou completas", price: 180, duration: 150, category: "hair_coloring" },
      { id: "s5", name: "Balayage", description: "Mechas naturais com efeito degradê", price: 220, duration: 180, category: "hair_coloring" },
      { id: "s6", name: "Tratamento Capilar", description: "Hidratação profunda", price: 70, duration: 45, category: "hair_treatment" },
      { id: "s7", name: "Escova e Penteado", description: "Lavagem, escova e finalização", price: 65, duration: 45, category: "other" },
      { id: "s8", name: "Penteado para Festa", description: "Penteados para ocasiões especiais", price: 100, duration: 60, category: "other" },
    ],
    description: "Eliza Hair & Beauty é um salão premium localizado no coração de São Paulo. Com mais de 10 anos de experiência, nossa equipe especializada oferece uma gama de serviços desde cortes e coloração até tratamentos especializados. Nos orgulhamos de usar produtos de alta qualidade e proporcionar um atendimento excepcional em um ambiente relaxante."
  }
};

const SalonPage = () => {
  const { id } = useParams<{id: string}>();
  
  // Em uma aplicação real, você buscaria esses dados de uma API
  // Por enquanto, usaremos dados mock
  const salon = mockSalons[id || "1"] || mockSalons["1"];

  return (
    <div className="min-h-screen bg-glam-900">
      <SalonDetails salon={salon} />
    </div>
  );
};

export default SalonPage;
