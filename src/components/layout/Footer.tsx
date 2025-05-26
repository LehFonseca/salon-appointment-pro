
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-glam-900 border-t border-glam-700">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-heading">GlamPro</h3>
            <p className="text-gray-400 text-sm">
              Conectando você aos melhores profissionais de beleza e salões
              da sua região. Agende consultas, descubra novos estilos e
              experimente serviços de beleza premium.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-500 hover:text-gold-400">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gold-400">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-500 hover:text-gold-400">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold-400">Para Clientes</h3>
            <div className="grid gap-2">
              <Link to="/find-salon" className="text-gray-400 hover:text-gold-400 text-sm">Encontrar Salão</Link>
              <Link to="/booking" className="text-gray-400 hover:text-gold-400 text-sm">Como Agendar</Link>
              <Link to="/reviews" className="text-gray-400 hover:text-gold-400 text-sm">Avaliações</Link>
              <Link to="/gift-cards" className="text-gray-400 hover:text-gold-400 text-sm">Vale Presente</Link>
              <Link to="/blog" className="text-gray-400 hover:text-gold-400 text-sm">Blog de Beleza</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold-400">Para Empresas</h3>
            <div className="grid gap-2">
              <Link to="/business" className="text-gray-400 hover:text-gold-400 text-sm">Cadastrar Empresa</Link>
              <Link to="/business-resources" className="text-gray-400 hover:text-gold-400 text-sm">Recursos para Empresas</Link>
              <Link to="/success-stories" className="text-gray-400 hover:text-gold-400 text-sm">Histórias de Sucesso</Link>
              <Link to="/business-app" className="text-gray-400 hover:text-gold-400 text-sm">App para Empresas</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4 text-gold-400">Ajuda</h3>
            <div className="grid gap-2">
              <Link to="/contact" className="text-gray-400 hover:text-gold-400 text-sm">Fale Conosco</Link>
              <Link to="/faq" className="text-gray-400 hover:text-gold-400 text-sm">Perguntas Frequentes</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-gold-400 text-sm">Política de Privacidade</Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold-400 text-sm">Termos de Serviço</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-glam-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GlamPro. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-gold-400 text-sm">Privacidade</Link>
            <Link to="/terms" className="text-gray-500 hover:text-gold-400 text-sm">Termos</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-gold-400 text-sm">Mapa do Site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
