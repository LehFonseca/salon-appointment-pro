
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole } from "@/types";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const [userRole, setUserRole] = useState<UserRole>("client");
  
  const isLogin = type === "login";

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            {isLogin ? "Entre em sua conta" : "Criar uma conta"}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? "Digite seu email e senha abaixo para entrar" 
              : "Digite seus dados para criar sua conta"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isLogin && (
            <div className="mb-6">
              <Tabs defaultValue="client" onValueChange={(value) => setUserRole(value as UserRole)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="client">Sou Cliente</TabsTrigger>
                  <TabsTrigger value="business">Sou Empresa</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          )}

          <form className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor={userRole === "client" ? "name" : "businessName"}>
                  {userRole === "client" ? "Nome Completo" : "Nome da Empresa"}
                </Label>
                <Input 
                  id={userRole === "client" ? "name" : "businessName"} 
                  placeholder={userRole === "client" ? "João Silva" : "Salão Incrível"} 
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="nome@exemplo.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                {isLogin && (
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-beauty-500 hover:text-beauty-600"
                  >
                    Esqueceu a senha?
                  </Link>
                )}
              </div>
              <Input id="password" type="password" />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Número de Telefone</Label>
                  <Input id="phone" placeholder="(99) 99999-9999" />
                </div>

                {userRole === "business" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" placeholder="XX.XXX.XXX/XXXX-XX" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">CEP</Label>
                      <Input id="zipCode" placeholder="XXXXX-XXX" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço</Label>
                      <Input id="address" placeholder="Rua, número" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">Cidade</Label>
                        <Input id="city" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">Estado</Label>
                        <Input id="state" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Categoria</Label>
                      <select 
                        id="category" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    className="h-4 w-4 rounded border-gray-300 text-beauty-400 focus:ring-beauty-400"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Concordo com os{" "}
                    <Link to="/terms" className="text-beauty-500 hover:text-beauty-600">
                      Termos de Serviço
                    </Link>{" "}
                    e{" "}
                    <Link to="/privacy" className="text-beauty-500 hover:text-beauty-600">
                      Política de Privacidade
                    </Link>
                  </label>
                </div>
              </>
            )}

            <Button 
              type="submit" 
              className="w-full bg-beauty-400 hover:bg-beauty-500"
            >
              {isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          {isLogin && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    Ou continue com
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" type="button" className="w-full">
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
                <Button variant="outline" type="button" className="w-full">
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
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-600">
            {isLogin ? (
              <>
                Não tem uma conta?{" "}
                <Link to="/register" className="text-beauty-500 hover:text-beauty-600">
                  Cadastre-se
                </Link>
              </>
            ) : (
              <>
                Já tem uma conta?{" "}
                <Link to="/login" className="text-beauty-500 hover:text-beauty-600">
                  Entre
                </Link>
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
