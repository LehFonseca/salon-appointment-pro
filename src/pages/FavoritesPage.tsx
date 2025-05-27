
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Search, MapPin, Star, Phone, Clock, Filter } from "lucide-react";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const [favorites] = useState([
    {
      id: "1",
      name: "Salão Beleza Pura",
      category: "hair_salon",
      categoryLabel: "Salão de Beleza",
      address: "Rua das Flores, 123 - Centro, São Paulo - SP",
      phone: "(11) 99999-9999",
      rating: 4.8,
      reviewCount: 127,
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Corte", "Escova", "Coloração", "Tratamentos"],
      openingHours: "Segunda a Sábado: 9h às 18h",
      priceRange: "$$",
      isFavorite: true
    },
    {
      id: "2", 
      name: "Barbearia Clássica",
      category: "barbershop",
      categoryLabel: "Barbearia",
      address: "Av. Paulista, 456 - Bela Vista, São Paulo - SP",
      phone: "(11) 88888-8888",
      rating: 4.9,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Corte Masculino", "Barba", "Bigode", "Sobrancelha"],
      openingHours: "Segunda a Sexta: 8h às 19h",
      priceRange: "$",
      isFavorite: true
    },
    {
      id: "3",
      name: "Spa & Bem-estar", 
      category: "spa",
      categoryLabel: "Spa",
      address: "Rua Tranquila, 789 - Jardins, São Paulo - SP",
      phone: "(11) 77777-7777",
      rating: 4.7,
      reviewCount: 156,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Massagem", "Facial", "Corporal", "Relaxamento"],
      openingHours: "Todos os dias: 9h às 20h",
      priceRange: "$$$",
      isFavorite: true
    },
    {
      id: "4",
      name: "Nail Design Studio",
      category: "nail_salon",
      categoryLabel: "Studio de Unhas", 
      address: "Rua das Unhas, 321 - Vila Madalena, São Paulo - SP",
      phone: "(11) 66666-6666",
      rating: 4.6,
      reviewCount: 93,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Manicure", "Pedicure", "Nail Art", "Alongamento"],
      openingHours: "Terça a Domingo: 10h às 19h",
      priceRange: "$$",
      isFavorite: true
    }
  ]);

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "hair_salon", label: "Salão de Beleza" },
    { value: "barbershop", label: "Barbearia" },
    { value: "nail_salon", label: "Studio de Unhas" },
    { value: "spa", label: "Spa" },
    { value: "esthetic_clinic", label: "Clínica Estética" },
    { value: "makeup_studio", label: "Studio de Maquiagem" }
  ];

  const filteredFavorites = favorites.filter(favorite => {
    const matchesSearch = favorite.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         favorite.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || favorite.category === selectedCategory;
    const matchesRating = selectedRating === "all" || 
                         (selectedRating === "4+" && favorite.rating >= 4) ||
                         (selectedRating === "4.5+" && favorite.rating >= 4.5);
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
      />
    ));
  };

  const getPriceRangeLabel = (priceRange: string) => {
    const ranges = {
      "$": "Econômico",
      "$$": "Moderado", 
      "$$$": "Premium"
    };
    return ranges[priceRange as keyof typeof ranges] || priceRange;
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold gradient-heading mb-2">
              Meus Favoritos
            </h1>
            <p className="text-gray-300">
              Seus estabelecimentos de beleza favoritos em um só lugar
            </p>
          </div>

          {/* Filtros e Busca */}
          <Card className="bg-glam-800 border-glam-700 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Buscar favoritos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-glam-900 border-glam-600"
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 bg-glam-900 border-glam-600">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-glam-800 border-glam-600">
                      {categories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedRating} onValueChange={setSelectedRating}>
                    <SelectTrigger className="w-40 bg-glam-900 border-glam-600">
                      <SelectValue placeholder="Avaliação" />
                    </SelectTrigger>
                    <SelectContent className="bg-glam-800 border-glam-600">
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="4+">4+ estrelas</SelectItem>
                      <SelectItem value="4.5+">4.5+ estrelas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de Favoritos */}
          {filteredFavorites.length === 0 ? (
            <Card className="bg-glam-800 border-glam-700 text-center p-8">
              <CardContent>
                <Heart className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {searchTerm || selectedCategory !== "all" || selectedRating !== "all" 
                    ? "Nenhum favorito encontrado"
                    : "Você ainda não tem favoritos"
                  }
                </h3>
                <p className="text-gray-400 mb-4">
                  {searchTerm || selectedCategory !== "all" || selectedRating !== "all"
                    ? "Tente ajustar os filtros para encontrar seus estabelecimentos favoritos."
                    : "Explore nossa plataforma e adicione estabelecimentos aos seus favoritos."
                  }
                </p>
                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                  <Link to="/salons">Explorar Estabelecimentos</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-6">
              {filteredFavorites.map((favorite) => (
                <Card key={favorite.id} className="bg-glam-800 border-glam-700 hover:border-gold-500/50 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Imagem */}
                      <div className="md:w-1/3">
                        <img
                          src={favorite.image}
                          alt={favorite.name}
                          className="w-full h-48 md:h-full object-cover rounded-l-lg"
                        />
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="md:w-2/3 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-bold text-white">{favorite.name}</h3>
                              <Heart className="h-5 w-5 text-red-500 fill-current" />
                            </div>
                            <Badge variant="secondary" className="mb-2">
                              {favorite.categoryLabel}
                            </Badge>
                            <div className="flex items-center gap-1 mb-2">
                              {renderStars(favorite.rating)}
                              <span className="text-gold-400 font-semibold ml-2">
                                {favorite.rating}
                              </span>
                              <span className="text-gray-400 text-sm">
                                ({favorite.reviewCount} avaliações)
                              </span>
                            </div>
                          </div>
                          
                          <Badge variant="outline" className="border-gold-500 text-gold-400">
                            {getPriceRangeLabel(favorite.priceRange)}
                          </Badge>
                        </div>

                        {/* Informações */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-gray-300">
                            <MapPin className="h-4 w-4 text-gold-400" />
                            <span className="text-sm">{favorite.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Phone className="h-4 w-4 text-gold-400" />
                            <span className="text-sm">{favorite.phone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-300">
                            <Clock className="h-4 w-4 text-gold-400" />
                            <span className="text-sm">{favorite.openingHours}</span>
                          </div>
                        </div>

                        {/* Serviços */}
                        <div className="mb-4">
                          <p className="text-gray-400 text-sm mb-2">Serviços:</p>
                          <div className="flex flex-wrap gap-1">
                            {favorite.services.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-3">
                          <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                            <Link to={`/salon/${favorite.id}`}>Ver Detalhes</Link>
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-glam-600 text-gray-300 hover:bg-glam-700"
                          >
                            Agendar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage;
