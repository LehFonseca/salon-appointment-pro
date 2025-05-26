
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Fale Conosco</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tem dúvidas ou comentários sobre o GlamPro? Nossa equipe está aqui para ajudar.
            Entre em contato conosco através de qualquer um dos canais abaixo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
            <h2 className="text-xl font-bold mb-6 text-gold-400">Envie uma Mensagem</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold-400 mb-1">Nome</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome" 
                    className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-400 mb-1">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Seu email" 
                    className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gold-400 mb-1">Assunto</label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Assunto da sua mensagem" 
                  className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold-400 mb-1">Mensagem</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Sua mensagem" 
                  rows={6}
                  className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 w-full">
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-6 text-gold-400">Informações de Contato</h2>
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Endereço</p>
                    <p className="text-gray-300">Av. Paulista, 1234, São Paulo, SP, Brasil</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Telefone</p>
                    <p className="text-gray-300">+55 (11) 3456-7890</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">contato@glampro.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Horário de Atendimento</p>
                    <p className="text-gray-300">Segunda - Sexta: 9:00 - 18:00</p>
                    <p className="text-gray-300">Sábado: 10:00 - 16:00</p>
                    <p className="text-gray-300">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-6 text-gold-400">Nos Siga</h2>
              <div className="flex space-x-4">
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-glam-800 rounded-xl p-6 border border-glam-700 mb-12">
          <h2 className="text-xl font-bold mb-6 text-gold-400">Nossa Localização</h2>
          <div className="h-80 w-full rounded-lg overflow-hidden">
            {/* Este seria um Google Map em uma aplicação real */}
            <div className="w-full h-full bg-glam-700 flex items-center justify-center">
              <p className="text-gray-300">Mapa interativo seria incorporado aqui</p>
            </div>
          </div>
        </div>
        
        <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
          <h2 className="text-xl font-bold mb-6 text-gold-400">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              {
                question: "Qual a rapidez para resposta das consultas?",
                answer: "Nos esforçamos para responder a todas as consultas dentro de 24 horas úteis. Para assuntos urgentes, entre em contato por telefone."
              },
              {
                question: "Vocês oferecem suporte aos fins de semana?",
                answer: "Nossa equipe de atendimento ao cliente está disponível de segunda a sábado. Aos domingos e feriados, você pode deixar uma mensagem e retornaremos no próximo dia útil."
              },
              {
                question: "Como posso reportar um problema técnico com a plataforma?",
                answer: "Para problemas técnicos, envie um email para suporte@glampro.com com detalhes do problema que está enfrentando, incluindo capturas de tela se possível."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-bold text-white">{faq.question}</h3>
                <p className="text-gray-300 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="text-gold-400 hover:text-gold-300 underline">
              Ver todas as perguntas frequentes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
