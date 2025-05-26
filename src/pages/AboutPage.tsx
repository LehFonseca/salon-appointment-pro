
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Seção Hero */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-heading">Sobre o GlamPro</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conectando profissionais de beleza com clientes desde 2023. 
              Nossa missão é transformar o setor de beleza através da tecnologia.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-12 md:py-16 bg-glam-800">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1607006946965-3943dab6c3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="Reunião de equipe" 
                className="rounded-xl shadow-lg border border-glam-700"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Nossa História</h2>
              <p className="text-gray-300 mb-4">
                O GlamPro foi fundado em 2023 com uma missão simples: tornar os serviços de beleza mais acessíveis enquanto capacitamos profissionais de beleza a expandir seus negócios.
              </p>
              <p className="text-gray-300 mb-4">
                Após testemunhar os desafios enfrentados tanto por clientes buscando serviços de qualidade quanto por profissionais tentando construir sua clientela, nossos fundadores decidiram criar uma plataforma abrangente que conectaria ambos os lados perfeitamente.
              </p>
              <p className="text-gray-300">
                Hoje, o GlamPro cresceu para apoiar milhares de profissionais de beleza e atende clientes em várias cidades, evoluindo continuamente para atender às necessidades de nossa crescente comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-12 md:py-16 bg-glam-900">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Nossos Valores</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              No coração do GlamPro estão valores fundamentais que orientam tudo o que fazemos.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700 gold-glow">
              <div className="h-16 w-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold-400">Qualidade e Confiança</h3>
              <p className="text-gray-300">
                Acreditamos em promover serviços de qualidade e construir confiança através de avaliações verificadas e práticas comerciais transparentes.
              </p>
            </div>
            
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700 gold-glow">
              <div className="h-16 w-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold-400">Inovação</h3>
              <p className="text-gray-300">
                Inovamos continuamente para fornecer as melhores soluções tecnológicas para o setor de beleza, tornando os serviços mais acessíveis.
              </p>
            </div>
            
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700 gold-glow">
              <div className="h-16 w-16 rounded-full bg-gold-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gold-400">Comunidade</h3>
              <p className="text-gray-300">
                Fomentamos uma comunidade solidária para profissionais de beleza crescerem, aprenderem e se conectarem uns com os outros e com seus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da Equipe */}
      <section className="py-12 md:py-16 bg-glam-800">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Conheça Nossa Equipe</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Os indivíduos apaixonados por trás do GlamPro dedicados a transformar o setor de beleza.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Sofia Silva",
                role: "Fundadora & CEO",
                image: "https://images.unsplash.com/photo-1536811145107-cdc66051a5f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              },
              {
                name: "Ricardo Almeida",
                role: "Diretor de Tecnologia",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              },
              {
                name: "Luisa Costa",
                role: "Diretora de Marketing",
                image: "https://images.unsplash.com/photo-1524541341496-418d509a5adb?ixlib=rb-4.0.3&auto=format&fit=crop&w=869&q=80"
              },
              {
                name: "André Santos",
                role: "Gerente de Operações",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4 mx-auto w-40 h-40 overflow-hidden rounded-full border-2 border-gold-400">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="text-gold-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção CTA */}
      <section className="py-12 md:py-16 bg-glam-900">
        <div className="container max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Junte-se à Comunidade GlamPro</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Seja você um profissional de beleza procurando expandir seu negócio ou um cliente buscando serviços de qualidade, o GlamPro tem algo para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Link to="/register">Cadastre-se Agora</Link>
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-400">
              <Link to="/contact">Entre em Contato</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
