
import { useParams } from "react-router-dom";
import SalonDetails from "@/components/salon/SalonDetails";
import { Business } from "@/types";

// Dados expandidos com mais salões
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
  },
  "2": {
    id: "2",
    businessName: "Barbearia Clássica",
    category: "barbershop",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Rua da Consolação",
      number: "850",
      zipCode: "01302-100",
      neighborhood: "Centro"
    },
    photos: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    ],
    rating: 4.6,
    reviewCount: 89,
    services: [
      { id: "b1", name: "Corte Masculino Clássico", description: "Corte tradicional com máquina e tesoura", price: 35, duration: 30, category: "haircut" },
      { id: "b2", name: "Barba Completa", description: "Aparar, modelar e finalizar a barba", price: 25, duration: 20, category: "beard" },
      { id: "b3", name: "Corte + Barba", description: "Combo completo de corte e barba", price: 55, duration: 45, category: "haircut" },
      { id: "b4", name: "Bigode", description: "Aparar e modelar bigode", price: 15, duration: 15, category: "beard" },
    ],
    description: "Tradição em cortes masculinos desde 1985. Nossa barbearia oferece a experiência clássica com o conforto moderno."
  },
  "3": {
    id: "3",
    businessName: "Spa & Bem-estar",
    category: "spa",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Av. Paulista",
      number: "2000",
      zipCode: "01310-100",
      neighborhood: "Bela Vista"
    },
    photos: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
    ],
    rating: 4.9,
    reviewCount: 203,
    services: [
      { id: "sp1", name: "Massagem Relaxante", description: "Massagem completa para relaxamento", price: 120, duration: 60, category: "massage" },
      { id: "sp2", name: "Limpeza de Pele", description: "Limpeza profunda facial", price: 90, duration: 75, category: "facial" },
      { id: "sp3", name: "Massagem Terapêutica", description: "Massagem para alívio de tensões", price: 150, duration: 90, category: "massage" },
    ],
    description: "Seu refúgio de relaxamento no coração da cidade. Oferecemos tratamentos que proporcionam bem-estar e renovação."
  },
  "4": {
    id: "4",
    businessName: "Nail Art Studio",
    category: "nail_salon",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Rua Oscar Freire",
      number: "1500",
      zipCode: "01426-001",
      neighborhood: "Jardins"
    },
    photos: [
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
    ],
    rating: 4.7,
    reviewCount: 124,
    services: [
      { id: "n1", name: "Manicure", description: "Cuidados completos para as unhas das mãos", price: 35, duration: 45, category: "nails" },
      { id: "n2", name: "Pedicure", description: "Cuidados completos para os pés", price: 40, duration: 60, category: "nails" },
      { id: "n3", name: "Nail Art", description: "Decoração artística das unhas", price: 60, duration: 90, category: "nails" },
      { id: "n4", name: "Alongamento", description: "Alongamento com gel ou fibra", price: 80, duration: 120, category: "nails" },
    ],
    description: "Arte nas unhas com técnicas inovadoras e produtos de alta qualidade."
  },
  "5": {
    id: "5",
    businessName: "Estúdio Makeup Pro",
    category: "makeup_studio",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Rua Haddock Lobo",
      number: "300",
      zipCode: "01414-000",
      neighborhood: "Cerqueira César"
    },
    photos: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
    ],
    rating: 4.8,
    reviewCount: 167,
    services: [
      { id: "m1", name: "Maquiagem Social", description: "Maquiagem para eventos sociais", price: 80, duration: 60, category: "makeup" },
      { id: "m2", name: "Maquiagem Noiva", description: "Maquiagem especial para noivas", price: 150, duration: 90, category: "makeup" },
      { id: "m3", name: "Curso de Automaquiagem", description: "Aprenda técnicas de maquiagem", price: 200, duration: 120, category: "makeup" },
    ],
    description: "Especialistas em realçar sua beleza natural com técnicas profissionais."
  },
  "6": {
    id: "6",
    businessName: "Clínica Estética Renovar",
    category: "esthetic_clinic",
    address: {
      city: "São Paulo",
      state: "SP",
      street: "Av. Brigadeiro Faria Lima",
      number: "2500",
      zipCode: "04538-132",
      neighborhood: "Itaim Bibi"
    },
    photos: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
    ],
    rating: 4.9,
    reviewCount: 312,
    services: [
      { id: "e1", name: "Limpeza de Pele Profunda", description: "Limpeza de pele com tecnologia avançada", price: 120, duration: 90, category: "facial" },
      { id: "e2", name: "Peeling Químico", description: "Renovação celular com ácidos", price: 200, duration: 60, category: "facial" },
      { id: "e3", name: "Harmonização Facial", description: "Procedimentos de harmonização", price: 400, duration: 120, category: "facial" },
    ],
    description: "Tecnologia avançada para sua beleza e bem-estar com procedimentos seguros e eficazes."
  }
};

const SalonPage = () => {
  const { id } = useParams<{id: string}>();
  
  // Busca o salão pelo ID ou usa o primeiro como fallback
  const salon = mockSalons[id || "1"] || mockSalons["1"];

  return (
    <div className="min-h-screen bg-glam-900">
      <SalonDetails salon={salon} />
    </div>
  );
};

export default SalonPage;
