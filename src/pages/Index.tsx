
import HeroSection from "@/components/home/HeroSection";
import FeaturedSalons from "@/components/home/FeaturedSalons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <HeroSection />
      <FeaturedSalons />

      {/* Seção como funciona */}
      <section className="py-12 md:py-16 bg-glam-800 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-heading">
              Como o GlamPro Funciona
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Agendar seu próximo compromisso de beleza é fácil e rápido com nosso processo simples de três etapas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Buscar</h3>
              <p className="text-gray-300">
                Encontre o salão ou serviço perfeito buscando com filtros como localização, preço e avaliações.
              </p>
            </div>
            
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Agendar</h3>
              <p className="text-gray-300">
                Selecione seu serviço preferido, data e horário que melhor se adequa à sua agenda.
              </p>
            </div>
            
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Aproveitar</h3>
              <p className="text-gray-300">
                Visite o salão, desfrute do seu serviço e deixe uma avaliação para ajudar outros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção para empresas */}
      <section className="py-12 md:py-16 px-4 bg-glam-900">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Faça Crescer Seu Negócio de Beleza
            </h2>
            <p className="text-gray-300 mb-4">
              Junte-se a milhares de profissionais de beleza que estão fazendo crescer seus negócios com o GlamPro. Nossa plataforma ajuda você a alcançar novos clientes, gerenciar agendamentos e fortalecer sua presença online.
            </p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Seja descoberto por milhares de clientes potenciais</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Gerencie agendamentos e reduza faltas</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Construa sua reputação online com avaliações verificadas</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Acesse relatórios e insights para fazer crescer seu negócio</span>
              </li>
            </ul>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              Cadastrar Meu Negócio
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Proprietária de negócio de beleza" 
              className="rounded-lg shadow-xl border border-glam-700"
            />
          </div>
        </div>
      </section>

      {/* Chamada para ação */}
      <section className="py-12 md:py-16 bg-glam-800 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
            Pronto para Experimentar Serviços de Beleza Premium?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Junte-se a milhares de clientes satisfeitos que encontraram seu serviço de beleza perfeito com o GlamPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 px-6">
              Encontrar um Salão
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-400">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
