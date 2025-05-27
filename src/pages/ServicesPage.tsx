
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Scissors, Palette, Sparkles, Heart, Star, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const serviceCategories = [
    { 
      id: "haircut", 
      label: "Cortes", 
      icon: <Scissors className="h-5 w-5" />,
      color: "bg-blue-500/20 text-blue-400"
    },
    { 
      id: "hair_coloring", 
      label: "Coloração", 
      icon: <Palette className="h-5 w-5" />,
      color: "bg-purple-500/20 text-purple-400"
    },
    { 
      id: "facial", 
      label: "Tratamentos Faciais", 
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-pink-500/20 text-pink-400"
    },
    { 
      id: "nails", 
      label: "Unhas", 
      icon: <Heart className="h-5 w-5" />,
      color: "bg-red-500/20 text-red-400"
    },
    { 
      id: "massage", 
      label: "Massagens", 
      icon: <Heart className="h-5 w-5" />,
      color: "bg-green-500/20 text-green-400"
    },
    { 
      id: "makeup", 
      label: "Maquiagem", 
      icon: <Sparkles className="h-5 w-5" />,
      color: "bg-orange-500/20 text-orange-400"
    }
  ];

  const services = [
    {
      id: "1",
      name: "Corte Feminino",
      category: "haircut",
      description: "Corte moderno e personalizado para mulheres",
      priceRange: { min: 80, max: 150 },
      duration: 60,
      rating: 4.8,
      reviewCount: 234,
      businessCount: 45,
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Salão Beleza Pura", "Hair Studio", "Espaço Cabelo"]
    },
    {
      id: "2", 
      name: "Coloração Completa",
      category: "hair_coloring",
      description: "Mudança completa de cor ou retoque de raiz",
      priceRange: { min: 120, max: 300 },
      duration: 120,
      rating: 4.7,
      reviewCount: 189,
      businessCount: 38,
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Color Expert", "Salão Cores", "Studio Hair"]
    },
    {
      id: "3",
      name: "Manicure Completa", 
      category: "nails",
      description: "Cuidados completos para as unhas das mãos",
      priceRange: { min: 25, max: 60 },
      duration: 45,
      rating: 4.9,
      reviewCount: 567,
      businessCount: 89,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Nail Art Studio", "Unhas & Cia", "Beauty Nails"]
    },
    {
      id: "4",
      name: "Limpeza de Pele",
      category: "facial", 
      description: "Tratamento facial profundo para limpeza e hidratação",
      priceRange: { min: 90, max: 180 },
      duration: 90,
      rating: 4.6,
      reviewCount: 145,
      businessCount: 32,
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Spa Facial", "Estética Avançada", "Clin Beauty"]
    },
    {
      id: "5",
      name: "Massagem Relaxante",
      category: "massage",
      description: "Massagem corporal para alívio do stress e tensões",
      priceRange: { min: 100, max: 200 },
      duration: 60,
      rating: 4.8,
      reviewCount: 298,
      businessCount: 28,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Spa Zen", "Relax Center", "Wellness Spa"]
    },
    {
      id: "6",
      name: "Maquiagem Social",
      category: "makeup",
      description: "Maquiagem profissional para eventos e ocasiões especiais",
      priceRange: { min: 80, max: 200 },
      duration: 45,
      rating: 4.7,
      reviewCount: 167,
      businessCount: 41,
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Make Up Pro", "Studio Glamour", "Beauty Artist"]
    },
    {
      id: "7",
      name: "Corte Masculino",
      category: "haircut",
      description: "Corte moderno e estiloso para homens",
      priceRange: { min: 30, max: 80 },
      duration: 30,
      rating: 4.9,
      reviewCount: 423,
      businessCount: 67,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Barbearia Clássica", "Men's Hair", "Barber Shop"]
    },
    {
      id: "8",
      name: "Pedicure Spa",
      category: "nails",
      description: "Tratamento relaxante e completo para os pés",
      priceRange: { min: 35, max: 80 },
      duration: 60,
      rating: 4.8,
      reviewCount: 234,
      businessCount: 52,
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      popularBusinesses: ["Spa dos Pés", "Pedicure Luxo", "Feet Care"]
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesPriceRange = selectedPriceRange === "all" || 
                             (selectedPriceRange === "low" && service.priceRange.max <= 100) ||
                             (selectedPriceRange === "medium" && service.priceRange.min >= 50 && service.priceRange.max <= 200) ||
                             (selectedPriceRange === "high" && service.priceRange.min >= 150);
    
    return matchesSearch && matchesCategory && matchesPriceRange;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case "price_low":
        return a.priceRange.min - b.priceRange.min;
      case "price_high":
        return b.priceRange.max - a.priceRange.max;
      case "rating":
        return b.rating - a.rating;
      case "duration":
        return a.duration - b.duration;
      default: // popular
        return b.reviewCount - a.reviewCount;
    }
  });

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
      />
    ));
  };

  const formatPrice = (priceRange: { min: number; max: number }) => {
    if (priceRange.min === priceRange.max) {
      return `R$ ${priceRange.min}`;
    }
    return `R$ ${priceRange.min} - R$ ${priceRange.max}`;
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-heading mb-4">
              Serviços de Beleza
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubra os melhores serviços de beleza disponíveis na sua região. 
              Compare preços, avaliações e encontre o profissional perfeito para você.
            </p>
          </div>

          {/* Categorias em Destaque */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {serviceCategories.map((category) => (
              <Card 
                key={category.id} 
                className={`bg-glam-800 border-glam-700 cursor-pointer transition-all hover:scale-105 ${
                  selectedCategory === category.id ? 'ring-2 ring-gold-500' : ''
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-3`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-sm text-white">
                    {category.label}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Filtros */}
          <Card className="bg-glam-800 border-glam-700 mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Busca */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      placeholder="Buscar serviços..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-glam-900 border-glam-600"
                    />
                  </div>
                </div>
                
                {/* Filtros */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-48 bg-glam-900 border-glam-600">
                      <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent className="bg-glam-800 border-glam-600">
                      <SelectItem value="all">Todas as Categorias</SelectItem>
                      {serviceCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                    <SelectTrigger className="w-40 bg-glam-900 border-glam-600">
                      <SelectValue placeholder="Preço" />
                    </SelectTrigger>
                    <SelectContent className="bg-glam-800 border-glam-600">
                      <SelectItem value="all">Todos os Preços</SelectItem>
                      <SelectItem value="low">Até R$ 100</SelectItem>
                      <SelectItem value="medium">R$ 50 - R$ 200</SelectItem>
                      <SelectItem value="high">Acima de R$ 150</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40 bg-glam-900 border-glam-600">
                      <SelectValue placeholder="Ordenar" />
                    </SelectTrigger>
                    <SelectContent className="bg-glam-800 border-glam-600">
                      <SelectItem value="popular">Mais Popular</SelectItem>
                      <SelectItem value="rating">Melhor Avaliado</SelectItem>
                      <SelectItem value="price_low">Menor Preço</SelectItem>
                      <SelectItem value="price_high">Maior Preço</SelectItem>
                      <SelectItem value="duration">Menor Duração</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resultados */}
          {sortedServices.length === 0 ? (
            <Card className="bg-glam-800 border-glam-700 text-center p-8">
              <CardContent>
                <Filter className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Nenhum serviço encontrado
                </h3>
                <p className="text-gray-400 mb-4">
                  Tente ajustar os filtros para encontrar mais serviços.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedPriceRange("all");
                  }}
                  className="bg-gold-500 hover:bg-gold-600 text-glam-900"
                >
                  Limpar Filtros
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-400">
                  {sortedServices.length} serviço(s) encontrado(s)
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedServices.map((service) => (
                  <Card key={service.id} className="bg-glam-800 border-glam-700 hover:border-gold-500/50 transition-colors">
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge 
                        className="absolute top-3 right-3 bg-gold-500 text-glam-900"
                      >
                        {serviceCategories.find(cat => cat.id === service.category)?.label}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {service.description}
                      </p>

                      {/* Avaliação e Duração */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {renderStars(service.rating)}
                          <span className="text-gold-400 font-semibold ml-2">
                            {service.rating}
                          </span>
                          <span className="text-gray-400 text-sm">
                            ({service.reviewCount})
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-sm">
                          <Clock className="h-4 w-4" />
                          {service.duration}min
                        </div>
                      </div>

                      {/* Preço */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-gold-400">
                          {formatPrice(service.priceRange)}
                        </span>
                      </div>

                      {/* Estabelecimentos Populares */}
                      <div className="mb-4">
                        <p className="text-gray-400 text-sm mb-2">
                          Disponível em {service.businessCount} estabelecimentos
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {service.popularBusinesses.slice(0, 2).map((business, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {business}
                            </Badge>
                          ))}
                          {service.popularBusinesses.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{service.popularBusinesses.length - 2}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Ações */}
                      <div className="flex gap-2">
                        <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900 flex-1">
                          <Link to={`/salons?service=${service.id}`}>
                            Ver Profissionais
                          </Link>
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-glam-600 text-gray-300 hover:bg-glam-700"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Call to Action */}
          <Card className="bg-glam-800 border-glam-700 mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold-400">
                Não encontrou o serviço que procura?
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato conosco ou explore nossos estabelecimentos para descobrir mais opções.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                  <Link to="/salons">
                    <MapPin className="h-4 w-4 mr-2" />
                    Explorar Estabelecimentos
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-gold-500 text-gold-400">
                  <Link to="/contact">
                    Fale Conosco
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
