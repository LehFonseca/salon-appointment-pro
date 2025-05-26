
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "Erro 404: Usuário tentou acessar rota inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-glam-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-gold-400 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl text-white mb-4">Página não encontrada</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          A página que você está procurando pode ter sido removida, teve seu nome alterado ou está temporariamente indisponível.
        </p>
        <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" />
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
