
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HelpCircle, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Assunto é obrigatório"),
  category: z.string().min(1, "Categoria é obrigatória"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      category: "",
      message: "",
    },
  });

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "E-mail",
      content: "contato@glampro.com.br",
      description: "Resposta em até 24 horas"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Telefone",
      content: "(11) 4000-0000",
      description: "Segunda a Sexta: 9h às 18h"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Endereço",
      content: "Av. Paulista, 1000 - São Paulo, SP",
      description: "CEP: 01310-100"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 9h às 18h",
      description: "Sábado: 9h às 13h"
    }
  ];

  const categories = [
    { value: "support", label: "Suporte Técnico" },
    { value: "business", label: "Parceria Comercial" },
    { value: "billing", label: "Financeiro/Cobrança" },
    { value: "feedback", label: "Sugestões/Feedback" },
    { value: "complaint", label: "Reclamação" },
    { value: "other", label: "Outros" }
  ];

  const faqItems = [
    {
      question: "Como criar uma conta no GlamPro?",
      answer: "É simples! Clique em 'Cadastrar' no topo da página, preencha seus dados e confirme seu e-mail."
    },
    {
      question: "Como cancelar um agendamento?",
      answer: "Acesse 'Meus Agendamentos' no seu perfil e clique em 'Cancelar' no agendamento desejado. Lembre-se de respeitar a política de cancelamento do estabelecimento."
    },
    {
      question: "Posso reagendar um compromisso?",
      answer: "Sim! Você pode reagendar através da página de agendamentos, sujeito à disponibilidade do profissional."
    },
    {
      question: "Como cadastrar meu negócio?",
      answer: "Acesse a página 'Para Empresas' e siga o processo de cadastro. Nossa equipe irá verificar as informações em até 48 horas."
    }
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Responderemos em breve. Obrigado pelo contato!",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold gradient-heading mb-4">
              Entre em Contato
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco para dúvidas, 
              sugestões ou suporte. Nossa equipe terá prazer em atendê-lo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações de Contato */}
            <div className="lg:col-span-1">
              <Card className="bg-glam-800 border-glam-700 mb-6">
                <CardHeader>
                  <CardTitle className="text-gold-400 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-gold-500/20 p-2 rounded-lg text-gold-400 shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gold-400 mb-1">
                          {info.content}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* FAQ Rápido */}
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400 flex items-center gap-2">
                    <HelpCircle className="h-5 w-5" />
                    Perguntas Frequentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h5 className="font-semibold text-white mb-2 text-sm">
                        {item.question}
                      </h5>
                      <p className="text-gray-400 text-sm mb-3">
                        {item.answer}
                      </p>
                      {index < faqItems.length - 1 && (
                        <div className="border-b border-glam-700"></div>
                      )}
                    </div>
                  ))}
                  <Button asChild variant="outline" className="w-full border-gold-500 text-gold-400">
                    <a href="/faq">Ver Todas as Perguntas</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Formulário de Contato */}
            <div className="lg:col-span-2">
              <Card className="bg-glam-800 border-glam-700">
                <CardHeader>
                  <CardTitle className="text-gold-400 flex items-center gap-2">
                    <Send className="h-5 w-5" />
                    Envie sua Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Nome Completo *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-glam-900 border-glam-600"
                                  placeholder="Seu nome completo"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">E-mail *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="email"
                                  className="bg-glam-900 border-glam-600"
                                  placeholder="seu@email.com"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Telefone</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="bg-glam-900 border-glam-600"
                                  placeholder="(11) 99999-9999"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Categoria *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-glam-900 border-glam-600">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-glam-800 border-glam-600">
                                  {categories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                      {category.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Assunto *</FormLabel>
                            <FormControl>
                              <Input 
                                {...field} 
                                className="bg-glam-900 border-glam-600"
                                placeholder="Resuma o motivo do seu contato"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-300">Mensagem *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                className="bg-glam-900 border-glam-600 min-h-32"
                                placeholder="Descreva sua dúvida, sugestão ou problema em detalhes..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-glam-900 mr-2"></div>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>

                      <p className="text-gray-400 text-sm text-center">
                        * Campos obrigatórios. Responderemos em até 24 horas úteis.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
