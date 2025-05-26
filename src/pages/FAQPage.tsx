
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  
  const categories = [
    { id: "general", name: "Perguntas Gerais" },
    { id: "account", name: "Conta e Perfil" },
    { id: "booking", name: "Agendamentos" },
    { id: "business", name: "Para Empresas" },
    { id: "payments", name: "Pagamentos" },
    { id: "technical", name: "Suporte Técnico" },
  ];
  
  const faqs = [
    {
      category: "general",
      question: "O que é o GlamPro?",
      answer: "O GlamPro é uma plataforma que conecta clientes a profissionais de beleza e salões. Os usuários podem descobrir, agendar e avaliar serviços de beleza, enquanto as empresas podem gerenciar agendamentos e expandir sua base de clientes."
    },
    {
      category: "general",
      question: "Em quais cidades vocês operam atualmente?",
      answer: "O GlamPro atualmente opera nas principais cidades brasileiras incluindo São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba, Salvador e Recife. Estamos continuamente expandindo para novas localidades."
    },
    {
      category: "account",
      question: "Como criar uma conta?",
      answer: "Você pode criar uma conta clicando no botão 'Cadastrar' no canto superior direito da página inicial. Preencha seus dados, verifique seu endereço de email e estará pronto para usar!"
    },
    {
      category: "account",
      question: "Posso excluir minha conta?",
      answer: "Sim, você pode excluir sua conta nas configurações do seu perfil. Observe que uma vez excluída, todos os seus dados serão permanentemente removidos do nosso sistema."
    },
    {
      category: "booking",
      question: "Como agendar um horário?",
      answer: "Para agendar um horário, busque por um salão, selecione o serviço desejado, escolha uma data e horário disponível, e confirme seu agendamento. Você receberá um email de confirmação com todos os detalhes."
    },
    {
      category: "booking",
      question: "Posso cancelar ou reagendar meu horário?",
      answer: "Sim, você pode cancelar ou reagendar seu horário através do seu perfil até 24 horas antes do horário marcado. Cancelamentos tardios podem incorrer em taxa dependendo da política do salão."
    },
    {
      category: "business",
      question: "Como cadastrar meu salão no GlamPro?",
      answer: "Para cadastrar seu salão, vá para a página 'Para Empresas' e clique em 'Cadastrar Seu Negócio'. Preencha as informações necessárias sobre seu salão, serviços e equipe. Nossa equipe revisará sua solicitação e retornará em até 48 horas."
    },
    {
      category: "business",
      question: "Quais são as taxas de assinatura para empresas?",
      answer: "O GlamPro oferece diferentes planos de assinatura a partir de R$99/mês. Cada plano inclui diferentes recursos adequados para empresas de vários tamanhos. Visite nossa página 'Para Empresas' para ver os preços detalhados."
    },
    {
      category: "payments",
      question: "Quais métodos de pagamento são aceitos?",
      answer: "O GlamPro aceita cartões de crédito e débito, Pix e transferências bancárias. Alguns salões também oferecem a opção de pagar pessoalmente no momento do serviço."
    },
    {
      category: "payments",
      question: "Minhas informações de pagamento estão seguras?",
      answer: "Sim, o GlamPro usa protocolos de segurança padrão da indústria e criptografia para proteger suas informações de pagamento. Nunca armazenamos detalhes completos de cartão de crédito em nossos servidores."
    },
    {
      category: "technical",
      question: "O aplicativo não está funcionando adequadamente. O que devo fazer?",
      answer: "Primeiro, tente atualizar a página ou reiniciar o aplicativo. Se o problema persistir, limpe o cache do navegador ou reinstale o aplicativo. Se ainda estiver com problemas, entre em contato com nossa equipe de suporte com detalhes sobre o problema."
    },
    {
      category: "technical",
      question: "Como posso reportar um bug?",
      answer: "Você pode reportar bugs enviando um email para suporte@glampro.com com detalhes sobre o que aconteceu, incluindo quaisquer mensagens de erro que recebeu e passos para reproduzir o problema. Capturas de tela são muito úteis."
    }
  ];
  
  const filteredFaqs = faqs.filter(faq => 
    faq.category === activeCategory && 
    (searchTerm === "" || 
     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-glam-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Perguntas Frequentes</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Encontre respostas para perguntas comuns sobre o GlamPro. Se não conseguir encontrar o que procura, entre em contato com nossa equipe de suporte.
          </p>
          
          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-lg text-base w-full bg-glam-800 text-white border-glam-700"
            />
          </div>
        </div>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  whitespace-nowrap
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
        
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-3 text-gold-400">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-glam-800 rounded-xl border border-glam-700">
              <p className="text-xl text-gray-300 mb-4">Nenhuma pergunta corresponde à sua busca.</p>
              <Button
                variant="outline"
                className="border-gold-500 text-gold-400"
                onClick={() => setSearchTerm("")}
              >
                Limpar Busca
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-12 bg-glam-800 rounded-xl p-6 border border-glam-700 text-center">
          <h2 className="text-xl font-bold mb-3 text-gold-400">Ainda tem dúvidas?</h2>
          <p className="text-gray-300 mb-6">
            Não conseguiu encontrar a resposta que procura? Entre em contato com nossa equipe de suporte amigável.
          </p>
          <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
            <a href="/contact">Entrar em Contato</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
