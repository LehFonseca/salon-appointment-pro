
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useApp } from "@/contexts/AppContext";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated } = useApp();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      if (isAuthenticated) {
        navigate(`/salons?search=${encodeURIComponent(searchTerm.trim())}`);
      } else {
        navigate("/login");
      }
    }
  };

  const handleQuickSearch = (tag: string) => {
    if (isAuthenticated) {
      navigate(`/salons?search=${encodeURIComponent(tag)}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
          backgroundPosition: "center 30%",
          filter: "brightness(0.2)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-glam-950/80 to-glam-900/50 z-1"></div>
      
      <div className="relative z-10 px-4 py-24 md:py-32 lg:py-40 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Descubra e Agende os Melhores <br />
            <span className="text-gold-400">Serviços de Beleza</span> Perto de Você
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Conecte-se com salões e barbearias top avaliados. Navegue, agende e desfrute de tratamentos de beleza profissionais tudo em um só lugar.
          </p>
          
          <form 
            onSubmit={handleSearch}
            className="relative max-w-xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <Input
                type="text"
                placeholder="Busque por salões, serviços ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 rounded-lg sm:rounded-r-none text-base w-full bg-glam-800/90 text-white border-gold-500/50 focus:border-gold-400"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-gold-500 hover:bg-gold-600 text-glam-900 py-6 px-6 text-base font-medium sm:rounded-l-none"
            >
              Buscar
            </Button>
          </form>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-gray-400 text-sm">Popular:</span>
            {['Corte', 'Manicure', 'Barba', 'Coloração', 'Massagem'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => handleQuickSearch(tag)}
                className="px-3 py-1 rounded-full bg-glam-700/60 hover:bg-glam-700 text-gray-300 text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
