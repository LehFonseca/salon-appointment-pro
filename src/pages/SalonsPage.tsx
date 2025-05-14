
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, X, MapPin, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const SalonsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const filters = [
    { id: "all", label: "All" },
    { id: "hair_salon", label: "Hair Salons" },
    { id: "barbershop", label: "Barbershops" },
    { id: "nail_salon", label: "Nail Salons" },
    { id: "spa", label: "Spas" },
    { id: "makeup", label: "Makeup Studios" },
  ];

  const serviceOptions = [
    { id: "haircut", label: "Haircuts" },
    { id: "coloring", label: "Hair Coloring" },
    { id: "treatment", label: "Treatments" },
    { id: "nails", label: "Nail Services" },
    { id: "massage", label: "Massages" },
    { id: "waxing", label: "Waxing" },
    { id: "makeup", label: "Makeup" },
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(s => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Mock data for salons
  const mockSalons = [
    {
      id: "1",
      name: "Eliza's Hair & Beauty",
      type: "hair_salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
      rating: 4.8,
      reviews: 156,
      location: "São Paulo, SP",
      distance: "1.2 km",
      price: "$$",
      services: ["haircut", "coloring", "treatment"]
    },
    {
      id: "2",
      name: "Barbershop Classic",
      type: "barbershop",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.6,
      reviews: 98,
      location: "Rio de Janeiro, RJ",
      distance: "0.8 km",
      price: "$$",
      services: ["haircut", "beard", "shave"]
    },
    {
      id: "3",
      name: "Nail Paradise",
      type: "nail_salon",
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
      rating: 4.9,
      reviews: 212,
      location: "Belo Horizonte, MG",
      distance: "2.4 km",
      price: "$$$",
      services: ["nails", "waxing"]
    },
    {
      id: "4",
      name: "Zen Spa & Wellness",
      type: "spa",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.7,
      reviews: 87,
      location: "Curitiba, PR",
      distance: "3.5 km",
      price: "$$$",
      services: ["massage", "treatment", "waxing"]
    },
    {
      id: "5",
      name: "Glam Studio",
      type: "makeup",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
      rating: 4.5,
      reviews: 65,
      location: "Brasília, DF",
      distance: "5.2 km",
      price: "$$$",
      services: ["makeup"]
    },
    {
      id: "6",
      name: "Hair Revolution",
      type: "hair_salon",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      rating: 4.4,
      reviews: 124,
      location: "Salvador, BA",
      distance: "1.9 km",
      price: "$$",
      services: ["haircut", "coloring", "treatment"]
    },
    {
      id: "7",
      name: "Beauty Hub",
      type: "hair_salon",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
      rating: 4.3,
      reviews: 78,
      location: "Recife, PE",
      distance: "0.7 km",
      price: "$$",
      services: ["haircut", "coloring", "makeup", "nails"]
    }
  ];

  // Filter salons based on selected criteria
  const filteredSalons = mockSalons.filter(salon => {
    // Filter by type
    if (activeFilter !== "all" && salon.type !== activeFilter) return false;
    
    // Filter by search term
    if (searchTerm && !salon.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !salon.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Filter by services
    if (selectedServices.length > 0 && 
        !selectedServices.some(service => salon.services.includes(service))) return false;
    
    return true;
  });

  return (
    <div className="min-h-screen bg-glam-900">
      {/* Search Bar */}
      <section className="bg-glam-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Input
                type="text"
                placeholder="Search by salon name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-base w-full bg-glam-900 border-glam-700 text-white"
              />
            </div>
            <Button 
              className="bg-gold-500 hover:bg-gold-600 text-glam-900 md:w-auto"
              onClick={() => setFiltersVisible(!filtersVisible)}
            >
              {filtersVisible ? "Hide Filters" : "Show Filters"}
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`
                rounded-full text-sm font-medium
                ${activeFilter === filter.id 
                  ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                  : "border-gold-500 text-gray-300 hover:bg-glam-700"}
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Filters Panel */}
        {filtersVisible && (
          <div className="bg-glam-800 rounded-lg p-6 mb-6 border border-glam-700 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-white">Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setFiltersVisible(false)} className="text-gray-400 hover:text-white">
                <X size={18} />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3 text-gold-400">Price Range</h4>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 500]}
                    min={0}
                    max={500}
                    step={50}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as number[])}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-300">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div>
                <h4 className="font-medium mb-3 text-gold-400">Services</h4>
                <div className="space-y-2">
                  {serviceOptions.map((service) => (
                    <div key={service.id} className="flex items-center">
                      <Checkbox 
                        id={`service-${service.id}`}
                        checked={selectedServices.includes(service.id)}
                        onCheckedChange={() => toggleService(service.id)}
                        className="border-gold-500 text-gold-500"
                      />
                      <label 
                        htmlFor={`service-${service.id}`}
                        className="ml-2 text-sm text-gray-300"
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button 
                variant="outline" 
                className="border-gold-500 text-gold-400 mr-2"
                onClick={() => {
                  setPriceRange([0, 500]);
                  setSelectedServices([]);
                }}
              >
                Clear Filters
              </Button>
              <Button 
                className="bg-gold-500 hover:bg-gold-600 text-glam-900"
              >
                Apply Filters
              </Button>
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">
            {filteredSalons.length} {filteredSalons.length === 1 ? 'salon' : 'salons'} found
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSalons.map((salon) => (
            <Link to={`/salon/${salon.id}`} key={salon.id} className="block">
              <div className="bg-glam-800 rounded-lg overflow-hidden border border-glam-700 hover:border-gold-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-gold-500/20">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={salon.image} 
                    alt={salon.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white mb-1">{salon.name}</h3>
                  <div className="flex items-center mb-2">
                    <Star className="w-4 h-4 text-gold-400 mr-1" />
                    <span className="text-white mr-1">{salon.rating}</span>
                    <span className="text-gray-400">({salon.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{salon.location} • {salon.distance}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-gold-400">{salon.price}</span>
                    <Button 
                      className="bg-gold-500 hover:bg-gold-600 text-glam-900 text-xs py-1 px-3 h-auto"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredSalons.length === 0 && (
          <div className="text-center py-12 bg-glam-800 rounded-lg border border-glam-700">
            <p className="text-xl text-gray-300 mb-4">No salons match your criteria.</p>
            <Button
              variant="outline"
              className="border-gold-500 text-gold-400"
              onClick={() => {
                setSearchTerm("");
                setActiveFilter("all");
                setPriceRange([0, 500]);
                setSelectedServices([]);
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SalonsPage;
