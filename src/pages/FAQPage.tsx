
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, MessageCircle, Phone, User, CreditCard, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todas", icon: <HelpCircle className="h-4 w-4" /> },
    { id: "account", label: "Conta", icon: <User className="h-4 w-4" /> },
    { id: "booking", label: "Agendamentos", icon: <Calendar className="h-4 w-4" /> },
    { id: "payment", label: "Pagamentos", icon: <CreditCard className="h-4 w-4" /> },
    { id: "business", label: "Para Empresas", icon: <Settings className="h-4 w-4" /> },
  ];

  const faqs = [
    {
      id: "1",
      category: "account",
      question: "Como criar uma conta no GlamPro?",
      answer: "Para criar uma conta, clique em 'Cadastrar' no topo da página, preencha seus dados pessoais (nome, e-mail, telefone) e confirme seu e-mail através do link enviado. O processo leva apenas alguns minutos!"
    },
    {
      id: "2",
      category: "account", 
      question: "Esqueci minha senha. Como posso recuperá-la?",
      answer: "Na página de login, clique em 'Esqueci minha senha', digite seu e-mail e siga as instruções enviadas para redefinir sua senha. O link de recuperação expira em 24 horas por segurança."
    },
    {
      id: "3",
      category: "account",
      question: "Como editar minhas informações pessoais?",
      answer: "Acesse 'Meu Perfil' no menu do usuário, clique em 'Editar Perfil' e atualize suas informações. Não esqueça de salvar as alterações!"
    },
    {
      id: "4",
      category: "booking",
      question: "Como fazer um agendamento?",
      answer: "Busque o salão desejado, escolha o serviço, selecione data e horário disponível, e confirme o agendamento. Você receberá uma confirmação por e-mail e SMS."
    },
    {
      id: "5",
      category: "booking",
      question: "Posso cancelar ou reagendar meu agendamento?",
      answer: "Sim! Acesse 'Meus Agendamentos', encontre o compromisso e clique em 'Cancelar' ou 'Reagendar'. Respeite a política de cancelamento de cada estabelecimento (geralmente 24h de antecedência)."
    },
    {
      id: "6",
      category: "booking",
      question: "O que acontece se eu me atrasar?",
      answer: "Entre em contato com o estabelecimento o quanto antes. Atrasos podem resultar em cancelamento ou cobrança da taxa de no-show, dependendo da política do salão."
    },
    {
      id: "7",
      category: "booking",
      question: "Como confirmo que meu agendamento foi aceito?",
      answer: "Após fazer o agendamento, você receberá um e-mail e SMS de confirmação. O status também aparece na seção 'Meus Agendamentos' como 'Confirmado'."
    },
    {
      id: "8",
      category: "payment",
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito e débito (Visa, Mastercard, Elo), Pix, boleto bancário e carteiras digitais como Mercado Pago e PagSeguro."
    },
    {
      id: "9",
      category: "payment",
      question: "Quando sou cobrado pelo serviço?",
      answer: "O pagamento pode ser feito na plataforma no momento do agendamento ou diretamente no estabelecimento, dependendo da política de cada salão."
    },
    {
      id: "10",
      category: "payment",
      question: "Como solicitar reembolso?",
      answer: "Para solicitar reembolso, entre em contato através da página de Contato com os detalhes do agendamento. Analisaremos cada caso seguindo nossa política de reembolso."
    },
    {
      id: "11",
      category: "business",
      question: "Como cadastrar meu salão no GlamPro?",
      answer: "Acesse 'Para Empresas', preencha o formulário de cadastro com informações do seu negócio, envie documentos necessários e aguarde aprovação (até 48h úteis)."
    },
    {
      id: "12",
      category: "business",
      question: "Quanto custa para anunciar no GlamPro?",
      answer: "Oferecemos planos a partir de R$99/mês. Acesse nossa página 'Para Empresas' para ver todos os planos e funcionalidades incluídas."
    },
    {
      id: "13",
      category: "business",
      question: "Como gerencio meus agendamentos?",
      answer: "Através do painel administrativo, você pode visualizar, confirmar, cancelar e gerenciar todos os agendamentos, além de definir horários de funcionamento e disponibilidade."
    },
    {
      id: "14",
      category: "account",
      question: "É seguro usar o GlamPro?",
      answer: "Sim! Usamos criptografia SSL, todos os dados são protegidos conforme a LGPD, e verificamos todos os estabelecimentos parceiros antes da aprovação."
    },
    {
      id: "15",
      category: "booking",
      question: "Posso agendar para outras pessoas?",
      answer: "Sim, você pode agendar para familiares ou amigos informando os dados da pessoa durante o agendamento. Certifique-se de ter autorização da pessoa."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-heading mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-gray-300 text-lg">
              Encontre respostas para as dúvidas mais comuns sobre o GlamPro. 
              Se não encontrar o que procura, entre em contato conosco!
            </p>
          </div>

          {/* Busca */}
          <Card className="bg-glam-800 border-glam-700 mb-8">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Buscar perguntas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-glam-900 border-glam-600 text-lg py-6"
                />
              </div>
            </CardContent>
          </Card>

          {/* Categorias */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gold-500 hover:bg-gold-600 text-glam-900"
                    : "border-glam-600 text-gray-300 hover:bg-glam-700"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.label}</span>
              </Button>
            ))}
          </div>

          {/* Resultados */}
          {filteredFaqs.length === 0 ? (
            <Card className="bg-glam-800 border-glam-700 text-center p-8">
              <CardContent>
                <HelpCircle className="h-16 w-16 text-gold-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Nenhuma pergunta encontrada
                </h3>
                <p className="text-gray-400 mb-4">
                  Não encontramos perguntas relacionadas à sua busca. 
                  Tente usar outras palavras-chave ou entre em contato conosco.
                </p>
                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                  <Link to="/contact">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Fale Conosco
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <div className="mb-6">
                <p className="text-gray-400">
                  {filteredFaqs.length} pergunta(s) encontrada(s)
                  {searchTerm && ` para "${searchTerm}"`}
                </p>
              </div>

              <Card className="bg-glam-800 border-glam-700">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="border-glam-700"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-glam-900/50 hover:no-underline">
                          <div className="flex items-start gap-3 w-full">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {categories.find(cat => cat.id === faq.category)?.label}
                              </Badge>
                            </div>
                            <span className="text-white font-medium flex-1">
                              {faq.question}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </>
          )}

          {/* Call to Action */}
          <Card className="bg-glam-800 border-glam-700 mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gold-400">
                Não encontrou sua resposta?
              </h3>
              <p className="text-gray-300 mb-6">
                Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida específica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                  <Link to="/contact">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Link>
                </Button>
                <Button variant="outline" className="border-gold-500 text-gold-400">
                  <Phone className="h-4 w-4 mr-2" />
                  (11) 4000-0000
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
