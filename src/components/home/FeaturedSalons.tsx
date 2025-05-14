
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SalonCard from "@/components/ui/SalonCard";
import { Business } from "@/types";

// Mock data for demonstration
const mockSalons: Partial<Business>[] = [
  {
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
    photos: ["https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"],
    rating: 4.8,
    reviewCount: 156,
    services: [
      { id: "s1", name: "Haircut", price: 80, duration: 60, category: "haircut" },
      { id: "s2", name: "Hair Coloring", price: 150, duration: 120, category: "hair_coloring" },
      { id: "s3", name: "Styling", price: 70, duration: 45, category: "other" },
    ],
  },
  {
    id: "2",
    businessName: "Barbershop Classic",
    category: "barbershop",
    address: {
      city: "Rio de Janeiro",
      state: "RJ",
      street: "Av. Atlântica",
      number: "500",
      zipCode: "22021-001",
      neighborhood: "Copacabana" // Added neighborhood
    },
    photos: ["https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"],
    rating: 4.6,
    reviewCount: 98,
    services: [
      { id: "s4", name: "Men's Haircut", price: 60, duration: 45, category: "haircut" },
      { id: "s5", name: "Beard Trim", price: 40, duration: 30, category: "beard" },
      { id: "s6", name: "Hot Towel Shave", price: 50, duration: 30, category: "other" },
    ],
  },
  {
    id: "3",
    businessName: "Nail Paradise",
    category: "nail_salon",
    address: {
      city: "Belo Horizonte",
      state: "MG",
      street: "Rua da Bahia",
      number: "1500",
      zipCode: "30160-011",
      neighborhood: "Centro" // Added neighborhood
    },
    photos: ["https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80"],
    rating: 4.9,
    reviewCount: 212,
    services: [
      { id: "s7", name: "Manicure", price: 45, duration: 40, category: "nails" },
      { id: "s8", name: "Pedicure", price: 55, duration: 50, category: "nails" },
      { id: "s9", name: "Gel Nails", price: 80, duration: 60, category: "nails" },
    ],
  },
  {
    id: "4",
    businessName: "Zen Spa & Wellness",
    category: "spa",
    address: {
      city: "Curitiba",
      state: "PR",
      street: "Av. Cândido de Abreu",
      number: "300",
      zipCode: "80530-000",
      neighborhood: "Centro Cívico" // Added neighborhood
    },
    photos: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"],
    rating: 4.7,
    reviewCount: 87,
    services: [
      { id: "s10", name: "Swedish Massage", price: 120, duration: 60, category: "massage" },
      { id: "s11", name: "Facial Treatment", price: 150, duration: 75, category: "facial" },
      { id: "s12", name: "Body Scrub", price: 100, duration: 45, category: "other" },
    ],
  },
  {
    id: "5",
    businessName: "Glam Studio",
    category: "makeup_studio",
    address: {
      city: "Brasília",
      state: "DF",
      street: "SBS Quadra 2",
      number: "10",
      zipCode: "70070-120",
      neighborhood: "Asa Sul" // Added neighborhood
    },
    photos: ["https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"],
    rating: 4.5,
    reviewCount: 65,
    services: [
      { id: "s13", name: "Evening Makeup", price: 120, duration: 60, category: "makeup" },
      { id: "s14", name: "Bridal Makeup", price: 250, duration: 90, category: "makeup" },
      { id: "s15", name: "Makeup Lesson", price: 180, duration: 120, category: "makeup" },
    ],
  },
  {
    id: "6",
    businessName: "Hair Revolution",
    category: "hair_salon",
    address: {
      city: "Salvador",
      state: "BA",
      street: "Av. Tancredo Neves",
      number: "450",
      zipCode: "41820-020",
      neighborhood: "Caminho das Árvores" // Added neighborhood
    },
    photos: ["https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"],
    rating: 4.4,
    reviewCount: 124,
    services: [
      { id: "s16", name: "Haircut & Style", price: 95, duration: 75, category: "haircut" },
      { id: "s17", name: "Hair Treatment", price: 130, duration: 60, category: "hair_treatment" },
      { id: "s18", name: "Balayage", price: 220, duration: 180, category: "hair_coloring" },
    ],
  },
];

const FeaturedSalons = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filterOptions = [
    { id: "all", label: "All" },
    { id: "hair_salon", label: "Hair Salons" },
    { id: "barbershop", label: "Barbershops" },
    { id: "nail_salon", label: "Nail Salons" },
    { id: "spa", label: "Spas" },
    { id: "makeup_studio", label: "Makeup Studios" },
  ];
  
  const filteredSalons = activeFilter === "all" 
    ? mockSalons 
    : mockSalons.filter(salon => salon.category === activeFilter);

  return (
    <section className="py-12 md:py-16 px-4 bg-glam-800">
      <div className="container max-w-7xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">
            Featured Beauty Establishments
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover top-rated salons and barbershops in your area, handpicked for their exceptional service and customer satisfaction.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {filterOptions.map((option) => (
            <Button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              variant={activeFilter === option.id ? "default" : "outline"}
              className={`
                rounded-full text-sm font-medium px-4
                ${activeFilter === option.id 
                  ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                  : "border-gold-500 text-gray-300 hover:bg-glam-700"}
              `}
            >
              {option.label}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredSalons.map((salon, index) => (
            <SalonCard 
              key={salon.id} 
              salon={salon} 
              highlight={index === 0} 
            />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            asChild
            className="bg-transparent hover:bg-transparent text-gold-400 hover:text-gold-300 border border-gold-500 hover:border-gold-300"
          >
            <a href="/salons">View All Salons</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSalons;
