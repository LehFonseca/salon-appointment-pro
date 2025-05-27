
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Star, Clock, Filter, Heart, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const SalonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [sortBy, setSortBy] = useState("rating");

  const locations = [
    { value: "all", label: "Todas as Regiões" },
    { value: "centro", label: "Centro" },
    { value: "zona_sul", label: "Zona Sul" },
    { value: "zona_norte", label: "Zona Norte" },
    { value: "zona_leste", label: "Zona Leste" },
    { value: "zona_oeste", label: "Zona Oeste" },
  ];

  const categories = [
    { value: "all", label: "Todas as Categorias" },
    { value: "hair_salon", label: "Salão de Beleza" },
    { value: "barbershop", label: "Barbearia" },
    { value: "nail_salon", label: "Studio de Unhas" },
    { value: "spa", label: "Spa" },
    { value: "esthetic_clinic", label: "Clínica Estética" },
    { value: "makeup_studio", label: "Studio de Maquiagem" },
  ];

  const salons = [
    {
      id: "1",
      name: "Salão Beleza Pura",
      category: "hair_salon",
      categoryLabel: "Salão de Beleza",
      address: "Rua das Flores, 123 - Centro, São Paulo - SP",
      location: "centro",
      phone: "(11) 99999-9999",
      rating: 4.8,
      reviewCount: 127,
      priceRange: { min: 80, max: 250 },
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Corte", "Escova", "Coloração", "Tratamentos"],
      openingHours: "Segunda a Sábado: 9h às 18h",
      specialties: ["Coloração", "Cortes Modernos"],
      isOpen: true,
      distance: "1.2 km",
      promo: "20% OFF para novos clientes"
    },
    {
      id: "2",
      name: "Barbearia Clássica",
      category: "barbershop", 
      categoryLabel: "Barbearia",
      address: "Av. Paulista, 456 - Bela Vista, São Paulo - SP",
      location: "centro",
      phone: "(11) 88888-8888",
      rating: 4.9,
      reviewCount: 89,
      priceRange: { min: 30, max: 80 },
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Corte Masculino", "Barba", "Bigode", "Sobrancelha"],
      openingHours: "Segunda a Sexta: 8h às 19h",
      specialties: ["Corte Tradicional", "Barba Perfeita"],
      isOpen: true,
      distance: "0.8 km"
    },
    {
      id: "3",
      name: "Spa & Bem-estar",
      category: "spa",
      categoryLabel: "Spa", 
      address: "Rua Tranquila, 789 - Jardins, São Paulo - SP",
      location: "zona_sul",
      phone: "(11) 77777-7777",
      rating: 4.7,
      reviewCount: 156,
      priceRange: { min: 100, max: 400 },
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Massagem", "Facial", "Corporal", "Relaxamento"],
      openingHours: "Todos os dias: 9h às 20h",
      specialties: ["Massagem Relaxante", "Tratamentos Faciais"],
      isOpen: true,
      distance: "2.1 km",
      promo: "Pacote spa: 3 sessões por R$ 280"
    },
    {
      id: "4",
      name: "Nail Design Studio",
      category: "nail_salon",
      categoryLabel: "Studio de Unhas",
      address: "Rua das Unhas, 321 - Vila Madalena, São Paulo - SP", 
      location: "zona_oeste",
      phone: "(11) 66666-6666",
      rating: 4.6,
      reviewCount: 93,
      priceRange: { min: 25, max: 120 },
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Manicure", "Pedicure", "Nail Art", "Alongamento"],
      openingHours: "Terça a Domingo: 10h às 19h",
      specialties: ["Nail Art", "Alongamento de Unhas"],
      isOpen: false,
      distance: "3.5 km"
    },
    {
      id: "5",
      name: "Estética Avançada",
      category: "esthetic_clinic",
      categoryLabel: "Clínica Estética",
      address: "Av. dos Tratamentos, 555 - Moema, São Paulo - SP",
      location: "zona_sul", 
      phone: "(11) 55555-5555",
      rating: 4.5,
      reviewCount: 78,
      priceRange: { min: 150, max: 500 },
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Limpeza de Pele", "Botox", "Preenchimento", "Laser"],
      openingHours: "Segunda a Sexta: 8h às 18h",
      specialties: ["Procedimentos Estéticos", "Rejuvenescimento"],
      isOpen: true,
      distance: "2.8 km"
    },
    {
      id: "6",
      name: "Studio Glamour",
      category: "makeup_studio",
      categoryLabel: "Studio de Maquiagem",
      address: "Rua do Glamour, 888 - Pinheiros, São Paulo - SP",
      location: "zona_oeste",
      phone: "(11) 44444-4444", 
      rating: 4.8,
      reviewCount: 112,
      priceRange: { min: 80, max: 300 },
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      services: ["Maquiagem Social", "Noiva", "Formatura", "Eventos"],
      openingHours: "Terça a Sábado: 9h às 19h",
      specialties: ["Maquiagem de Noiva", "Eventos Especiais"],
      isOpen: true,
      distance: "1.9 km",
      promo: "Teste grátis de maquiagem"
    }
  ];

  const filteredSalons = salons.filter(salon => {
    const matchesSearch = salon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         salon.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === "all" || salon.location === selectedLocation;
    const matchesCategory = selectedCategory === "all" || salon.category === selectedCategory;
    const matchesRating = selectedRating === "all" || 
                         (selectedRating === "4+" && salon.rating >= 4) ||
                         (selectedRating === "4.5+" && salon.rating >= 4.5);
    const matchesPriceRange = salon.priceRange.min <= priceRange[1] && salon.priceRange.max >= priceRange[0];
    
    return matchesSearch && matchesLocation && matchesCategory && matchesRating && matchesPriceRange;
  });

  const sortedSalons = [...filteredSalons].sort((a, b) => {
    switch (sortBy) {
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      case "price_low":
        return a.priceRange.min - b.priceRange.min;
      case "price_high":
        return b.priceRange.max - a.priceRange.max;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      default: // rating
        return b.rating - a.rating;
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

  const formatPriceRange = (priceRange: { min: number; max: number }) => {
    return `R$ ${priceRange.min} - R$ ${priceRange.max}`;
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-heading mb-4">
              Encontre o Salão Perfeito
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Descubra os melhores estabelecimentos de beleza perto de você. 
              Compare preços, avaliações e agende seu horário ideal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros Laterais */}
            <div className="lg:col-span-1">
              <Card className="bg-glam-800 border-glam-700 sticky top-4">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4 text-gold-400 flex items-center gap-2">
                    <Filter className="h-5 w-5" />
                    Filtros
                  </h3>
                  
                  <div className="space-y-6">
                    {/* Busca */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Buscar
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Nome ou serviço..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 bg-glam-900 border-glam-600"
                        />
                      </div>
                    </div>

                    {/* Localização */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Localização
                      </label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger className="bg-glam-900 border-glam-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-glam-800 border-glam-600">
                          {locations.map((location) => (
                            <SelectItem key={location.value} value={location.value}>
                              {location.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Categoria */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Categoria
                      </label>
                      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                        <SelectTrigger className="bg-glam-900 border-glam-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-glam-800 border-glam-600">
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Avaliação */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Avaliação Mínima
                      </label>
                      <Select value={selectedRating} onValueChange={setSelectedRating}>
                        <SelectTrigger className="bg-glam-900 border-glam-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-glam-800 border-glam-600">
                          <SelectItem value="all">Todas</SelectItem>
                          <SelectItem value="4+">4+ estrelas</SelectItem>
                          <SelectItem value="4.5+">4.5+ estrelas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Faixa de Preço */}
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Faixa de Preço
                      </label>
                      <div className="px-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={500}
                          step={10}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-400">
                          <span>R$ {priceRange[0]}</span>
                          <span>R$ {priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    {/* Botão Limpar Filtros */}
                    <Button 
                      variant="outline" 
                      className="w-full border-glam-600 text-gray-300"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedLocation("all");
                        setSelectedCategory("all");
                        setSelectedRating("all");
                        setPriceRange([0, 500]);
                      }}
                    >
                      Limpar Filtros
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Lista de Salões */}
            <div className="lg:col-span-3">
              {/* Barra de Resultados e Ordenação */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-400">
                  {sortedSalons.length} estabelecimento(s) encontrado(s)
                </p>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 bg-glam-800 border-glam-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-glam-800 border-glam-600">
                    <SelectItem value="rating">Melhor Avaliado</SelectItem>
                    <SelectItem value="distance">Mais Próximo</SelectItem>
                    <SelectItem value="price_low">Menor Preço</SelectItem>
                    <SelectItem value="price_high">Maior Preço</SelectItem>
                    <SelectItem value="reviews">Mais Avaliações</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Resultados */}
              {sortedSalons.length === 0 ? (
                <Card className="bg-glam-800 border-glam-700 text-center p-8">
                  <CardContent>
                    <MapPin className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Nenhum estabelecimento encontrado
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Tente ajustar os filtros para encontrar mais opções.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {sortedSalons.map((salon) => (
                    <Card key={salon.id} className="bg-glam-800 border-glam-700 hover:border-gold-500/50 transition-colors">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Imagem */}
                          <div className="md:w-1/3">
                            <div className="relative">
                              <img
                                src={salon.image}
                                alt={salon.name}
                                className="w-full h-48 md:h-full object-cover rounded-l-lg"
                              />
                              {salon.promo && (
                                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                                  PROMO
                                </div>
                              )}
                              <div className={`absolute top-3 right-3 px-2 py-1 rounded text-xs font-semibold ${
                                salon.isOpen ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                              }`}>
                                {salon.isOpen ? 'ABERTO' : 'FECHADO'}
                              </div>
                            </div>
                          </div>
                          
                          {/* Conteúdo */}
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start mb-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-xl font-bold text-white">{salon.name}</h3>
                                  <Badge variant="secondary">
                                    {salon.categoryLabel}
                                  </Badge>
                                </div>
                                
                                <div className="flex items-center gap-1 mb-2">
                                  {renderStars(salon.rating)}
                                  <span className="text-gold-400 font-semibold ml-2">
                                    {salon.rating}
                                  </span>
                                  <span className="text-gray-400 text-sm">
                                    ({salon.reviewCount} avaliações)
                                  </span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-300 mb-2">
                                  <MapPin className="h-4 w-4 text-gold-400" />
                                  <span className="text-sm">{salon.address}</span>
                                  <span className="text-gold-400 text-sm">• {salon.distance}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-300 mb-4">
                                  <Clock className="h-4 w-4 text-gold-400" />
                                  <span className="text-sm">{salon.openingHours}</span>
                                </div>
                              </div>
                              
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-500 text-red-400 hover:bg-red-900/20 shrink-0"
                              >
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>

                            {/* Preço e Promoção */}
                            <div className="mb-4">
                              <span className="text-lg font-bold text-gold-400">
                                {formatPriceRange(salon.priceRange)}
                              </span>
                              {salon.promo && (
                                <p className="text-red-400 text-sm font-medium">
                                  🎉 {salon.promo}
                                </p>
                              )}
                            </div>

                            {/* Serviços */}
                            <div className="mb-4">
                              <p className="text-gray-400 text-sm mb-2">Serviços:</p>
                              <div className="flex flex-wrap gap-1">
                                {salon.services.map((service, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {service}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Especialidades */}
                            <div className="mb-4">
                              <p className="text-gray-400 text-sm mb-2">Especialidades:</p>
                              <div className="flex flex-wrap gap-1">
                                {salon.specialties.map((specialty, index) => (
                                  <Badge key={index} variant="outline" className="text-xs border-gold-500 text-gold-400">
                                    {specialty}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Ações */}
                            <div className="flex gap-3">
                              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                                <Link to={`/salon/${salon.id}`}>Ver Detalhes</Link>
                              </Button>
                              <Button 
                                variant="outline" 
                                className="border-glam-600 text-gray-300 hover:bg-glam-700"
                              >
                                <Phone className="h-4 w-4 mr-2" />
                                Ligar
                              </Button>
                              <Button 
                                variant="outline"
                                className="border-green-600 text-green-400 hover:bg-green-900/20"
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
      </div>
    </div>
  );
};

export default SalonsPage;
