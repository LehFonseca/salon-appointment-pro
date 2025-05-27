import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";
import { useApp } from "@/contexts/AppContext";
import { useToast } from "@/hooks/use-toast";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [userRole, setUserRole] = useState<UserRole>("client");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    businessName: "",
    phone: "",
    cnpj: "",
    zipCode: "",
    address: "",
    city: "",
    state: "",
    category: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, register } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isLogin = type === "login";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const success = await login(formData.email, formData.password);
        if (success) {
          toast({
            title: "Login realizado com sucesso!",
            description: "Bem-vindo de volta ao GlamPro."
          });
          navigate("/");
        } else {
          toast({
            title: "Erro no login",
            description: "Email ou senha incorretos.",
            variant: "destructive"
          });
        }
      } else {
        // Validações para cadastro
        if (formData.password !== formData.confirmPassword) {
          toast({
            title: "Erro no cadastro",
            description: "As senhas não coincidem.",
            variant: "destructive"
          });
          return;
        }

        if (!formData.name && !formData.businessName) {
          toast({
            title: "Erro no cadastro",
            description: "Nome é obrigatório.",
            variant: "destructive"
          });
          return;
        }

        const userData = {
          email: formData.email,
          password: formData.password,
          name: userRole === "client" ? formData.name : formData.businessName,
          phone: formData.phone,
          role: userRole,
          ...(userRole === "business" && {
            cnpj: formData.cnpj,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            category: formData.category
          })
        };

        const success = await register(userData);
        if (success) {
          toast({
            title: "Cadastro realizado com sucesso!",
            description: "Bem-vindo ao GlamPro."
          });
          navigate("/");
        } else {
          toast({
            title: "Erro no cadastro",
            description: "Email já cadastrado ou dados inválidos.",
            variant: "destructive"
          });
        }
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      {!isLogin && (
        <div className="mb-6">
          <Tabs defaultValue="client" onValueChange={(value) => setUserRole(value as UserRole)}>
            <TabsList className="grid w-full grid-cols-2 bg-glam-700">
              <TabsTrigger value="client" className="text-sm text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">Sou Cliente</TabsTrigger>
              <TabsTrigger value="business" className="text-sm text-white data-[state=active]:bg-gold-500 data-[state=active]:text-glam-900">Sou Empresa</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor={userRole === "client" ? "name" : "businessName"} className="text-white font-medium">
              {userRole === "client" ? "Nome Completo" : "Nome da Empresa"}
            </Label>
            <Input 
              id={userRole === "client" ? "name" : "businessName"} 
              placeholder={userRole === "client" ? "João Silva" : "Salão Incrível"}
              value={userRole === "client" ? formData.name : formData.businessName}
              onChange={handleInputChange}
              required
              className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="nome@exemplo.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-white font-medium">Senha</Label>
            {isLogin && (
              <Link 
                to="/forgot-password" 
                className="text-xs text-gold-400 hover:text-gold-300 font-medium"
              >
                Esqueceu a senha?
              </Link>
            )}
          </div>
          <Input 
            id="password" 
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
          />
        </div>

        {!isLogin && (
          <>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-white font-medium">Confirmar Senha</Label>
              <Input 
                id="confirmPassword" 
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white font-medium">Número de Telefone</Label>
              <Input 
                id="phone" 
                placeholder="(99) 99999-9999"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
              />
            </div>

            {userRole === "business" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="cnpj" className="text-white font-medium">CNPJ</Label>
                  <Input 
                    id="cnpj" 
                    placeholder="XX.XXX.XXX/XXXX-XX"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="zipCode" className="text-white font-medium">CEP</Label>
                  <Input 
                    id="zipCode" 
                    placeholder="XXXXX-XXX"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="address" className="text-white font-medium">Endereço</Label>
                  <Input 
                    id="address" 
                    placeholder="Rua, número"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-white font-medium">Cidade</Label>
                    <Input 
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-white font-medium">Estado</Label>
                    <Input 
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="bg-glam-700 border-glam-600 text-white focus:border-gold-400 focus:ring-gold-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-white font-medium">Categoria</Label>
                  <select 
                    id="category" 
                    value={formData.category}
                    onChange={handleInputChange}
                    className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecione uma categoria</option>
                    <option value="hair_salon">Salão de Beleza</option>
                    <option value="barbershop">Barbearia</option>
                    <option value="nail_salon">Nail Salon</option>
                    <option value="spa">Spa</option>
                    <option value="esthetic_clinic">Clínica Estética</option>
                    <option value="makeup_studio">Estúdio de Maquiagem</option>
                    <option value="other">Outros</option>
                  </select>
                </div>
              </>
            )}

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="h-4 w-4 rounded border-glam-600 text-gold-500 focus:ring-gold-400 bg-glam-700"
              />
              <label htmlFor="terms" className="text-sm text-gray-300">
                Concordo com os{" "}
                <Link to="/terms" className="text-gold-400 hover:text-gold-300 font-medium">
                  Termos de Serviço
                </Link>{" "}
                e{" "}
                <Link to="/privacy" className="text-gold-400 hover:text-gold-300 font-medium">
                  Política de Privacidade
                </Link>
              </label>
            </div>
          </>
        )}

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-500 hover:to-gold-700 text-glam-900 font-semibold py-3 text-base shadow-lg hover:shadow-xl transition-all duration-200"
        >
          {isLoading ? "Carregando..." : (isLogin ? "Entrar" : "Criar Conta")}
        </Button>
      </form>

      {isLogin && (
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-glam-600" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-glam-800 px-2 text-gray-400">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" className="w-full border-red-600 bg-red-600 hover:bg-red-700 text-white">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H12.7031V12.0492H17.1046C16.9509 13.2911 16.3293 14.3898 15.3914 15.0879V17.5866H18.1929C19.8426 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                />
                <path
                  fill="currentColor"
                  d="M12.7031 20.0006C15.0252 20.0006 17.0236 19.1151 18.1934 17.5866L15.3919 15.0879C14.6088 15.6501 13.7466 16.0001 12.7041 16.0001C10.5086 16.0001 8.66874 14.5841 7.96327 12.6261H5.01562V15.2391C6.53267 18.1068 9.40448 20.0006 12.7031 20.0006Z"
                />
                <path
                  fill="currentColor"
                  d="M7.96322 12.6261C7.72135 11.9231 7.72135 11.1673 7.96322 10.4643V7.85132H5.01557C3.57166 10.2183 3.57166 12.8722 5.01557 15.2391L7.96322 12.6261Z"
                />
                <path
                  fill="currentColor"
                  d="M12.7031 7.00056C13.8889 6.98776 15.0271 7.47859 15.8729 8.35058L18.3417 5.94578C16.7923 4.48013 14.8089 3.71503 12.7031 3.71503C9.40448 3.71503 6.53267 5.60878 5.01562 8.47651L7.96327 11.0895C8.66874 9.13151 10.5086 7.71549 12.7031 7.00056V7.00056Z"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" className="w-full border-blue-600 bg-blue-600 hover:bg-blue-700 text-white">
              <svg
                className="mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  fill="currentColor"
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                />
              </svg>
              Facebook
            </Button>
          </div>
        </div>
      )}

      <div className="text-center mt-6">
        <p className="text-sm text-gray-400">
          {isLogin ? (
            <>
              Não tem uma conta?{" "}
              <Link to="/register" className="text-gold-400 hover:text-gold-300 font-semibold">
                Cadastre-se
              </Link>
            </>
          ) : (
            <>
              Já tem uma conta?{" "}
              <Link to="/login" className="text-gold-400 hover:text-gold-300 font-semibold">
                Entre
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
