
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const serviceCategories = [
  {
    id: "haircuts",
    name: "Cortes e Penteados",
    description: "Cortes profissionais e penteados para todos os tipos de cabelo",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Corte Feminino", priceRange: "R$60 - R$150" },
      { name: "Corte Masculino", priceRange: "R$40 - R$100" },
      { name: "Corte Infantil", priceRange: "R$30 - R$60" },
      { name: "Escova e Penteado", priceRange: "R$50 - R$120" },
      { name: "Penteado para Ocasião Especial", priceRange: "R$80 - R$200" },
    ]
  },
  {
    id: "coloring",
    name: "Coloração Capilar",
    description: "De mechas sutis a cores vibrantes e transformações completas",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    services: [
      { name: "Coloração Completa", priceRange: "R$120 - R$250" },
      { name: "Mechas/Luzes", priceRange: "R$150 - R$300" },
      { name: "Balayage", priceRange: "R$200 - R$400" },
      { name: "Ombré", priceRange: "R$180 - R$350" },
      { name: "Correção de Cor", priceRange: "R$250+ (consulta necessária)" },
    ]
  },
  {
    id: "treatments",
    name: "Tratamentos Capilares",
    description: "Tratamentos nutritivos para restaurar e manter cabelos saudáveis",
    image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Hidratação Profunda", priceRange: "R$50 - R$100" },
      { name: "Tratamento de Queratina", priceRange: "R$200 - R$500" },
      { name: "Escova Progressiva", priceRange: "R$250 - R$450" },
      { name: "Tratamento do Couro Cabeludo", priceRange: "R$70 - R$150" },
      { name: "Máscara Capilar", priceRange: "R$40 - R$80" },
    ]
  },
  {
    id: "nails",
    name: "Serviços de Unha",
    description: "Manicure, pedicure e nail art para mãos e pés lindos",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
    services: [
      { name: "Manicure Simples", priceRange: "R$40 - R$60" },
      { name: "Manicure em Gel", priceRange: "R$60 - R$90" },
      { name: "Pedicure Simples", priceRange: "R$50 - R$80" },
      { name: "Pedicure Spa", priceRange: "R$70 - R$120" },
      { name: "Nail Art (por unha)", priceRange: "R$10 - R$30" },
    ]
  },
  {
    id: "makeup",
    name: "Serviços de Maquiagem",
    description: "Aplicação profissional de maquiagem para qualquer ocasião",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    services: [
      { name: "Maquiagem Natural do Dia a Dia", priceRange: "R$80 - R$120" },
      { name: "Maquiagem para Evento Especial", priceRange: "R$120 - R$200" },
      { name: "Maquiagem para Noiva", priceRange: "R$200 - R$400" },
      { name: "Aula de Maquiagem", priceRange: "R$150 - R$250" },
      { name: "Rosto Completo com Cílios", priceRange: "R$150 - R$250" },
    ]
  },
  {
    id: "spa",
    name: "Spa e Bem-Estar",
    description: "Tratamentos relaxantes para corpo e mente",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Massagem Sueca (60 min)", priceRange: "R$100 - R$180" },
      { name: "Massagem com Pedras Quentes (60 min)", priceRange: "R$120 - R$200" },
      { name: "Tratamento Facial", priceRange: "R$130 - R$250" },
      { name: "Esfoliação Corporal", priceRange: "R$80 - R$150" },
      { name: "Pacote Dia Completo no Spa", priceRange: "R$350 - R$700" },
    ]
  }
];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredCategories = searchTerm 
    ? serviceCategories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.services.some(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : serviceCategories;
  
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Seção Hero */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-heading">Nossos Serviços de Beleza</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Descubra uma ampla gama de serviços de beleza premium disponíveis através de nossa rede de salões profissionais e especialistas em beleza.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Buscar por serviços..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 rounded-lg text-base w-full bg-glam-800 text-white border border-glam-700 focus:border-gold-400 focus:ring-gold-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categorias de Serviços */}
      <section className="py-8 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              onClick={() => setActiveCategory(null)}
              variant={activeCategory === null ? "default" : "outline"}
              className={`
                rounded-full text-sm font-medium px-4
                ${activeCategory === null 
                  ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                  : "border-gold-500 text-gray-300 hover:bg-glam-700"}
              `}
            >
              Todos os Serviços
            </Button>
            
            {serviceCategories.map(category => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  rounded-full text-sm font-medium px-4
                  ${activeCategory === category.id 
                    ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                    : "border-gold-500 text-gray-300 hover:bg-glam-700"}
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de Serviços */}
      <section className="py-12 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {filteredCategories
              .filter(category => activeCategory ? category.id === activeCategory : true)
              .map((category) => (
                <div key={category.id} className="bg-glam-800 rounded-xl overflow-hidden border border-glam-700">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2 text-gold-400">{category.name}</h2>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      
                      <div className="space-y-4">
                        {category.services.map((service, index) => (
                          <div key={index} className="flex justify-between pb-2 border-b border-glam-700">
                            <span className="text-white">{service.name}</span>
                            <span className="text-gold-400 font-medium">{service.priceRange}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                          Encontrar Salões
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">Nenhum serviço corresponde à sua busca. Tente palavras-chave diferentes.</p>
            </div>
          )}
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-12 md:py-16 bg-glam-800">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Pronto para Agendar Seu Serviço?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Encontre salões e profissionais de beleza próximos oferecendo estes serviços. Conquiste o look perfeito dos seus sonhos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 px-6">
              Encontrar Salões
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-400">
              Navegar Ofertas Especiais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
