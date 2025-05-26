
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            backgroundPosition: "center",
            filter: "brightness(0.2)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-glam-950/80 to-glam-900/50"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-heading">
              Faça Seu Negócio de Beleza Crescer com o GlamPro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a milhares de profissionais de beleza que estão expandindo sua clientela, otimizando suas operações e aumentando sua receita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 text-lg py-6 px-8">
                Cadastre Seu Negócio
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-gold-500 text-gold-400 text-lg py-6 px-8">
                Solicitar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Tudo Que Seu Negócio de Beleza Precisa
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              O GlamPro oferece um conjunto abrangente de ferramentas projetadas especificamente para profissionais de beleza, ajudando você a gerenciar e fazer crescer seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Gestão de Agendamentos",
                description: "Gerencie facilmente seus agendamentos, reduza faltas com lembretes automáticos e otimize sua agenda."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Gestão de Clientes",
                description: "Acompanhe preferências, histórico e informações de contato dos clientes para oferecer um atendimento personalizado."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Análise de Negócio",
                description: "Obtenha insights sobre o desempenho do seu negócio com relatórios detalhados e análises para tomar decisões baseadas em dados."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: "Gestão de Serviços",
                description: "Crie e gerencie seus serviços oferecidos, preços, durações e atribua-os a membros específicos da equipe."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Galeria de Fotos",
                description: "Exiba seus melhores trabalhos com uma galeria profissional que atrai novos clientes e constrói sua reputação."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Processamento de Pagamentos",
                description: "Aceite vários métodos de pagamento, processe transações com segurança e gerencie registros financeiros de forma eficiente."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-glam-900 p-6 rounded-xl border border-glam-700">
                <div className="text-gold-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gold-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Como o GlamPro Funciona Para Seu Negócio
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comece com o GlamPro em apenas alguns passos simples e transforme como você gerencia seu negócio de beleza.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Crie Seu Perfil",
                description: "Cadastre seu negócio, adicione seus serviços, equipe e horários de funcionamento."
              },
              {
                step: "2",
                title: "Personalize Sua Página",
                description: "Faça upload de fotos, adicione descrições e mostre o que torna seu negócio único."
              },
              {
                step: "3",
                title: "Gerencie Agendamentos",
                description: "Comece a receber e gerenciar agendamentos através do seu painel personalizado."
              },
              {
                step: "4",
                title: "Faça Seu Negócio Crescer",
                description: "Use nossas ferramentas de marketing e análises para atrair e reter mais clientes."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-400 text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block h-0.5 w-full bg-gold-500/20 absolute right-0 top-8 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Preços Simples e Transparentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Escolha o plano ideal para seu negócio, sem taxas ocultas ou compromissos de longo prazo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Básico",
                price: "R$99",
                period: "por mês",
                description: "Perfeito para profissionais individuais e pequenos negócios começando.",
                features: [
                  "Listagem de perfil no GlamPro",
                  "Gestão básica de agendamentos",
                  "Até 1 membro da equipe",
                  "Suporte por email",
                  "Gestão de clientes"
                ],
                buttonText: "Iniciar Teste Grátis",
                highlighted: false
              },
              {
                name: "Profissional",
                price: "R$199",
                period: "por mês",
                description: "Ideal para negócios em crescimento que buscam expandir sua presença online.",
                features: [
                  "Tudo do plano Básico",
                  "Gestão avançada de agendamentos",
                  "Até 5 membros da equipe",
                  "Suporte por telefone e email",
                  "Ferramentas de marketing",
                  "Painel de análises",
                  "Processamento de pagamentos"
                ],
                buttonText: "Iniciar Teste Grátis",
                highlighted: true
              },
              {
                name: "Premium",
                price: "R$299",
                period: "por mês",
                description: "Para negócios estabelecidos com múltiplas localizações ou grandes equipes.",
                features: [
                  "Tudo do plano Profissional",
                  "Membros da equipe ilimitados",
                  "Múltiplas localizações",
                  "Suporte prioritário",
                  "Análises avançadas",
                  "Integrações personalizadas",
                  "Gerente de conta dedicado"
                ],
                buttonText: "Iniciar Teste Grátis",
                highlighted: false
              }
            ].map((plan, index) => (
              <div key={index} className={`
                rounded-xl p-6 border 
                ${plan.highlighted 
                  ? "border-gold-400 bg-glam-900/80 transform scale-105 shadow-xl shadow-gold-500/20" 
                  : "border-glam-700 bg-glam-900"}
              `}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-gold-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-3">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-gold-400 mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-gold-500 hover:bg-gold-600 text-glam-900' : 'bg-glam-700 hover:bg-glam-600 text-white border border-gold-500'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-gray-400 text-sm">
            Todos os planos incluem 14 dias de teste grátis. Não é necessário cartão de crédito.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Histórias de Sucesso
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ouça de profissionais de beleza que transformaram seus negócios com o GlamPro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Desde que ingressei no GlamPro, meus agendamentos de clientes aumentaram 40%. A plataforma é tão intuitiva e meus clientes adoram como é fácil agendar.",
                name: "Carla Mendes",
                role: "Cabeleireira, Rio de Janeiro",
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              },
              {
                quote: "O GlamPro simplificou completamente nossas operações. Só a redução de faltas já valeu cada centavo. Recomendo para todo profissional de beleza que conheço.",
                name: "Miguel Torres",
                role: "Proprietário de Barbearia, São Paulo",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
              },
              {
                quote: "As ferramentas de análise me ajudaram a entender melhor meu negócio. Agora posso tomar decisões baseadas em dados sobre serviços, preços e marketing.",
                name: "Ana Silva",
                role: "Proprietária de Nail Design, Belo Horizonte",
                image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-glam-800 p-6 rounded-xl border border-glam-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gold-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Tem dúvidas sobre o GlamPro? Encontre respostas para perguntas comuns abaixo.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Quanto custa o GlamPro?",
                answer: "O GlamPro oferece vários planos de preços a partir de R$99/mês. Temos opções para negócios de todos os tamanhos, desde profissionais individuais até grandes salões com múltiplas localizações."
              },
              {
                question: "Existe contrato ou compromisso?",
                answer: "Não, o GlamPro funciona com assinatura mensal sem contratos de longo prazo. Você pode fazer upgrade, downgrade ou cancelar seu plano a qualquer momento."
              },
              {
                question: "Como começar com o GlamPro?",
                answer: "Começar é fácil! Simplesmente cadastre-se para um teste grátis de 14 dias, configure seu perfil de negócio, adicione seus serviços e equipe, e você estará pronto para começar a aceitar agendamentos."
              },
              {
                question: "Posso integrar o GlamPro com meu site existente?",
                answer: "Sim, o GlamPro oferece widgets e botões de agendamento que podem ser facilmente integrados ao seu site existente, permitindo que clientes agendem diretamente."
              },
              {
                question: "Quais métodos de pagamento são suportados?",
                answer: "O GlamPro suporta todos os principais cartões de crédito, cartões de débito e plataformas de pagamento populares incluindo Pix, Mercado Pago e PagSeguro."
              },
              {
                question: "Posso gerenciar múltiplas localizações com o GlamPro?",
                answer: "Sim, nosso plano Premium suporta gestão de múltiplas localizações em um único painel, sendo perfeito para negócios com várias filiais."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-glam-900 rounded-lg p-6 border border-glam-700">
                <h4 className="font-bold text-lg mb-2 text-gold-400">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">Ainda tem dúvidas? Estamos aqui para ajudar.</p>
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Link to="/contact">Contactar Suporte</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Pronto Para Transformar Seu Negócio de Beleza?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Junte-se a milhares de profissionais de beleza que já estão fazendo seus negócios crescerem com o GlamPro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 text-lg py-6 px-8">
                Comece Seu Teste Grátis
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-gold-500 text-gold-400 text-lg py-6 px-8">
                Agendar Demonstração
              </Button>
            </div>
            <p className="text-gray-400 mt-4 text-sm">Não é necessário cartão de crédito. Teste grátis de 14 dias.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
