
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
import { useBusinesses } from "@/hooks/useBusinesses";

const SalonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { businesses, loading, error } = useBusinesses();

  const categories = [
    { value: "all", label: "Todos" },
    { value: "hair_salon", label: "Salão de Beleza" },
    { value: "barbershop", label: "Barbearia" },
    { value: "spa", label: "Spa" },
    { value: "nail_salon", label: "Nail Salon" },
    { value: "makeup_studio", label: "Estúdio de Maquiagem" },
    { value: "esthetic_clinic", label: "Clínica Estética" }
  ];

  const filteredSalons = businesses.filter(business => {
    const matchesSearch = business.business_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (business.address?.neighborhood?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || business.category === selectedCategory;
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

  if (loading) {
    return (
      <div className="min-h-screen bg-glam-900 text-white flex items-center justify-center">
        <div className="text-center">
          <Clock className="h-16 w-16 text-gold-400 mx-auto mb-4 animate-spin" />
          <p className="text-xl">Carregando estabelecimentos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-glam-900 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-red-400">Erro ao carregar estabelecimentos: {error}</p>
        </div>
      </div>
    );
  }

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
                    src={salon.photos?.[0] || "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80"}
                    alt={salon.business_name}
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
                    {salon.business_name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-gold-400 fill-gold-400 mr-1" />
                      <span className="text-white font-medium">{salon.rating || 0}</span>
                      <span className="text-gray-400 ml-1">({salon.review_count || 0})</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {salon.address && (
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="h-4 w-4 text-gold-400 mr-2" />
                        <span>{salon.address.street}, {salon.address.number} - {salon.address.neighborhood}</span>
                      </div>
                    )}

                    {salon.description && (
                      <p className="text-gray-400 text-sm line-clamp-2">
                        {salon.description}
                      </p>
                    )}

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
