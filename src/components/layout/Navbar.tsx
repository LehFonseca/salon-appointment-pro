
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
  const isLoggedIn = false; // Replace with actual auth check logic

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-beauty-400 to-beauty-600 bg-clip-text text-transparent">BeautyCut</span>
          </Link>
          <div className="hidden md:flex md:gap-6 md:ml-6">
            <Link to="/" className="text-sm font-medium hover:text-beauty-400 transition-colors">
              Home
            </Link>
            <Link to="/salons" className="text-sm font-medium hover:text-beauty-400 transition-colors">
              Find Salons
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-beauty-400 transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search salons..."
              className="rounded-lg border border-border px-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-beauty-400 w-[200px] lg:w-[300px]"
            />
          </div>
          
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="p-0 h-9 w-9 rounded-full">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/appointments">My Appointments</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/favorites">Favorites</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-2">
              <Button asChild variant="ghost" className="text-sm">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="bg-beauty-400 hover:bg-beauty-500 text-sm">
                <Link to="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="container md:hidden pb-3 animate-fade-in">
          <div className="flex flex-col gap-3">
            <div className="relative mb-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search salons..."
                className="rounded-lg border border-border px-8 py-2 text-sm w-full"
              />
            </div>
            <Link 
              to="/" 
              className="px-2 py-1.5 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/salons" 
              className="px-2 py-1.5 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Find Salons
            </Link>
            <Link 
              to="/about" 
              className="px-2 py-1.5 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="border-t my-2"></div>
            {isLoggedIn ? (
              <>
                <Link 
                  to="/profile" 
                  className="px-2 py-1.5 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <Link 
                  to="/appointments" 
                  className="px-2 py-1.5 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Appointments
                </Link>
                <Link 
                  to="/favorites" 
                  className="px-2 py-1.5 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Favorites
                </Link>
                <button className="text-left px-2 py-1.5 text-sm font-medium text-red-500">
                  Log out
                </button>
              </>
            ) : (
              <div className="flex gap-2 mt-2">
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="flex-1 bg-beauty-400 hover:bg-beauty-500">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
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
