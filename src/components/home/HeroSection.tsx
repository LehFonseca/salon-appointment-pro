
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/salons?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80')",
          backgroundPosition: "center 30%",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative z-10 px-4 py-24 md:py-32 lg:py-40 max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Discover and Book the Best <br />
            <span className="text-beauty-400">Beauty Services</span> Near You
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Connect with top-rated salons and barbershops. Browse, book, and enjoy professional beauty treatments all in one place.
          </p>
          
          <form 
            onSubmit={handleSearch}
            className="relative max-w-xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-0"
          >
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search for salons, services, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 rounded-lg sm:rounded-r-none text-base w-full bg-white/95"
              />
            </div>
            <Button 
              type="submit" 
              className="bg-beauty-400 hover:bg-beauty-500 py-6 px-6 text-base font-medium sm:rounded-l-none"
            >
              Search
            </Button>
          </form>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-gray-300 text-sm">Popular:</span>
            {['Haircut', 'Manicure', 'Beard Trim', 'Hair Coloring', 'Massage'].map((tag) => (
              <button 
                key={tag} 
                onClick={() => setSearchTerm(tag)}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm transition-colors"
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
