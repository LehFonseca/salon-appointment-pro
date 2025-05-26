
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false; // Substituir pela lógica de autenticação real

  return (
    <header className="sticky top-0 z-50 w-full border-b border-glam-700 bg-glam-900/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">GlamPro</span>
          </Link>
          <div className="hidden md:flex md:gap-6 md:ml-6">
            <Link to="/" className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Início
            </Link>
            <Link to="/salons" className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Encontrar Salões
            </Link>
            <Link to="/services" className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Serviços
            </Link>
            <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Sobre
            </Link>
            <Link to="/business" className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors">
              Para Empresas
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar salões..."
              className="rounded-md border-glam-700 bg-glam-800 px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 w-[200px] lg:w-[300px] text-white"
            />
          </div>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-9 w-9 rounded-full bg-glam-700 hover:bg-glam-600">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-glam-800 border-glam-700">
                <DropdownMenuItem asChild className="hover:bg-glam-700 focus:bg-glam-700">
                  <Link to="/profile">Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-glam-700 focus:bg-glam-700">
                  <Link to="/appointments">Meus Agendamentos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:bg-glam-700 focus:bg-glam-700">
                  <Link to="/favorites">Favoritos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-glam-700 focus:bg-glam-700">Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Button asChild variant="outline" className="border-gold-500 text-gold-400 hover:bg-glam-800">
                <Link to="/login">Entrar</Link>
              </Button>
              <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                <Link to="/register">Cadastrar</Link>
              </Button>
            </div>
          )}
        </div>

        <button
          className="md:hidden p-2 text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="container md:hidden pb-3 animate-fade-in bg-glam-900">
          <div className="flex flex-col gap-3">
            <div className="relative mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar salões..."
                className="rounded-md border-glam-700 bg-glam-800 px-8 py-2 text-sm w-full text-white"
              />
            </div>
            <Link 
              to="/" 
              className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/salons" 
              className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Encontrar Salões
            </Link>
            <Link 
              to="/services" 
              className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/about" 
              className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/business" 
              className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Para Empresas
            </Link>
            <div className="border-t border-glam-700 my-2"></div>
            {isLoggedIn ? (
              <>
                <Link 
                  to="/profile" 
                  className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Perfil
                </Link>
                <Link 
                  to="/appointments" 
                  className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Meus Agendamentos
                </Link>
                <Link 
                  to="/favorites" 
                  className="px-2 py-1.5 text-sm font-medium text-gray-300 hover:bg-glam-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Favoritos
                </Link>
                <button className="text-left px-2 py-1.5 text-sm font-medium text-red-400 hover:bg-glam-800">
                  Sair
                </button>
              </>
            ) : (
              <div className="flex gap-2 mt-2">
                <Button asChild variant="outline" className="flex-1 border-gold-500 text-gold-400 hover:bg-glam-800">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Entrar</Link>
                </Button>
                <Button asChild className="flex-1 bg-gold-500 hover:bg-gold-600 text-glam-900">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>Cadastrar</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
