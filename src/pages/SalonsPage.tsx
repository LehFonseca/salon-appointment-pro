
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Star, 
  Search, 
  Filter,
  Scissors,
  Clock,
  DollarSign
} from "lucide-react";

const SalonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Dados mockados de salões
  const salons = [
    {
      id: "1",
      businessName: "Eliza Hair & Beauty",
      category: "hair_salon",
      address: {
        city: "São Paulo",
        state: "SP",
        street: "Rua Augusta",
        number: "1200",
        neighborhood: "Consolação"
      },
      photos: [
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.8,
      reviewCount: 156,
      priceRange: "R$ 60 - R$ 220",
      services: ["Corte", "Coloração", "Tratamentos"],
      description: "Salão premium com mais de 10 anos de experiência"
    },
    {
      id: "2", 
      businessName: "Barbearia Clássica",
      category: "barbershop",
      address: {
        city: "São Paulo",
        state: "SP", 
        street: "Rua da Consolação",
        number: "850",
        neighborhood: "Centro"
      },
      photos: [
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.6,
      reviewCount: 89,
      priceRange: "R$ 35 - R$ 80",
      services: ["Corte Masculino", "Barba", "Bigode"],
      description: "Tradição em cortes masculinos desde 1985"
    },
    {
      id: "3",
      businessName: "Spa & Bem-estar",
      category: "spa",
      address: {
        city: "São Paulo",
        state: "SP",
        street: "Av. Paulista",
        number: "2000",
        neighborhood: "Bela Vista"
      },
      photos: [
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.9,
      reviewCount: 203,
      priceRange: "R$ 90 - R$ 350",
      services: ["Massagem", "Facial", "Tratamentos Corporais"],
      description: "Seu refúgio de relaxamento no coração da cidade"
    },
    {
      id: "4",
      businessName: "Nail Art Studio",
      category: "nail_salon",
      address: {
        city: "São Paulo",
        state: "SP",
        street: "Rua Oscar Freire",
        number: "1500",
        neighborhood: "Jardins"
      },
      photos: [
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.7,
      reviewCount: 124,
      priceRange: "R$ 45 - R$ 120",
      services: ["Manicure", "Pedicure", "Nail Art", "Alongamento"],
      description: "Arte nas unhas com técnicas inovadoras"
    },
    {
      id: "5",
      businessName: "Estúdio Makeup Pro",
      category: "makeup_studio",
      address: {
        city: "São Paulo",
        state: "SP",
        street: "Rua Haddock Lobo",
        number: "300",
        neighborhood: "Cerqueira César"
      },
      photos: [
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.8,
      reviewCount: 167,
      priceRange: "R$ 80 - R$ 300",
      services: ["Maquiagem Social", "Maquiagem Noiva", "Curso de Automaquiagem"],
      description: "Especialistas em realçar sua beleza natural"
    },
    {
      id: "6",
      businessName: "Clínica Estética Renovar",
      category: "esthetic_clinic",
      address: {
        city: "São Paulo",
        state: "SP",
        street: "Av. Brigadeiro Faria Lima",
        number: "2500",
        neighborhood: "Itaim Bibi"
      },
      photos: [
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"
      ],
      rating: 4.9,
      reviewCount: 312,
      priceRange: "R$ 150 - R$ 800",
      services: ["Limpeza de Pele", "Peeling", "Harmonização Facial"],
      description: "Tecnologia avançada para sua beleza e bem-estar"
    }
  ];

  const categories = [
    { value: "all", label: "Todos" },
    { value: "hair_salon", label: "Salão de Beleza" },
    { value: "barbershop", label: "Barbearia" },
    { value: "spa", label: "Spa" },
    { value: "nail_salon", label: "Nail Salon" },
    { value: "makeup_studio", label: "Estúdio de Maquiagem" },
    { value: "esthetic_clinic", label: "Clínica Estética" }
  ];

  const filteredSalons = salons.filter(salon => {
    const matchesSearch = salon.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salon.address.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || salon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const icons = {
      hair_salon: Scissors,
      barbershop: Scissors,
      spa: Star,
      nail_salon: Star,
      makeup_studio: Star,
      esthetic_clinic: Star
    };
    const Icon = icons[category as keyof typeof icons] || Scissors;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold gradient-heading mb-2">
            Encontre o Salão Perfeito
          </h1>
          <p className="text-gray-300">
            Descubra os melhores estabelecimentos de beleza da sua região
          </p>
        </div>

        {/* Filtros */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Buscar por nome ou bairro..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-glam-800 border-glam-600 text-white"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`${
                  selectedCategory === category.value
                    ? 'bg-gold-500 text-glam-900 hover:bg-gold-600'
                    : 'border-glam-600 text-gray-300 hover:bg-glam-700'
                }`}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Lista de Salões */}
        {filteredSalons.length === 0 ? (
          <Card className="bg-glam-800 border-glam-700 text-center p-8">
            <CardContent>
              <Scissors className="h-16 w-16 text-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Nenhum estabelecimento encontrado
              </h3>
              <p className="text-gray-400">
                Tente ajustar seus filtros ou termo de busca
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSalons.map((salon) => (
              <Card key={salon.id} className="bg-glam-800 border-glam-700 hover:border-gold-500 transition-colors">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={salon.photos[0]}
                    alt={salon.businessName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gold-500 text-glam-900">
                      {getCategoryIcon(salon.category)}
                      <span className="ml-1">{categories.find(c => c.value === salon.category)?.label}</span>
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-lg">
                    {salon.businessName}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-gold-400 fill-gold-400 mr-1" />
                      <span className="text-white font-medium">{salon.rating}</span>
                      <span className="text-gray-400 ml-1">({salon.reviewCount})</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin className="h-4 w-4 text-gold-400 mr-2" />
                      <span>{salon.address.street}, {salon.address.number} - {salon.address.neighborhood}</span>
                    </div>

                    <div className="flex items-center text-gray-300 text-sm">
                      <DollarSign className="h-4 w-4 text-gold-400 mr-2" />
                      <span>{salon.priceRange}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {salon.services.slice(0, 3).map((service, index) => (
                        <Badge key={index} variant="outline" className="border-glam-600 text-gray-300 text-xs">
                          {service}
                        </Badge>
                      ))}
                      {salon.services.length > 3 && (
                        <Badge variant="outline" className="border-glam-600 text-gray-300 text-xs">
                          +{salon.services.length - 3} mais
                        </Badge>
                      )}
                    </div>

                    <p className="text-gray-400 text-sm line-clamp-2">
                      {salon.description}
                    </p>

                    <div className="flex gap-2 pt-2">
                      <Link to={`/salon/${salon.id}`} className="flex-1">
                        <Button className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonsPage;
