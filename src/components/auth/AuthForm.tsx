
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
            {isLogin ? "Log in to your account" : "Create an account"}
          </CardTitle>
          <CardDescription className="text-center">
            {isLogin 
              ? "Enter your email and password below to log in" 
              : "Enter your details to create your account"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isLogin && (
            <div className="mb-6">
              <Tabs defaultValue="client" onValueChange={(value) => setUserRole(value as UserRole)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="client">I'm a Client</TabsTrigger>
                  <TabsTrigger value="business">I'm a Business</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          )}

          <form className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor={userRole === "client" ? "name" : "businessName"}>
                  {userRole === "client" ? "Full Name" : "Business Name"}
                </Label>
                <Input 
                  id={userRole === "client" ? "name" : "businessName"} 
                  placeholder={userRole === "client" ? "John Doe" : "Awesome Hair Salon"} 
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@example.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {isLogin && (
                  <Link 
                    to="/forgot-password" 
                    className="text-xs text-beauty-500 hover:text-beauty-600"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <Input id="password" type="password" />
            </div>

            {!isLogin && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(99) 99999-9999" />
                </div>

                {userRole === "business" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cnpj">CNPJ</Label>
                      <Input id="cnpj" placeholder="XX.XXX.XXX/XXXX-XX" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input id="zipCode" placeholder="XXXXX-XXX" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" placeholder="Street, number" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input id="state" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <select 
                        id="category" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a category</option>
                        <option value="hair_salon">Hair Salon</option>
                        <option value="barbershop">Barbershop</option>
                        <option value="nail_salon">Nail Salon</option>
                        <option value="spa">Spa</option>
                        <option value="esthetic_clinic">Esthetic Clinic</option>
                        <option value="makeup_studio">Makeup Studio</option>
                        <option value="other">Other</option>
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
                    I agree to the{" "}
                    <Link to="/terms" className="text-beauty-500 hover:text-beauty-600">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-beauty-500 hover:text-beauty-600">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </>
            )}

            <Button 
              type="submit" 
              className="w-full bg-beauty-400 hover:bg-beauty-500"
            >
              {isLogin ? "Sign In" : "Create Account"}
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
                    Or continue with
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
                      d="M9.94474914,22 L9.94474914,13.1657526 L7,13.1657526 L7,9.48481614 L9.94474914,9.48481614 L9.94474914,6.54006699 C9.94474914,3.49740494 11.8713513,2 14.5856738,2 C15.8857805,2 17.0033128,2.09717672 17.3287076,2.13987558 L17.3287076,5.32020466 L15.4462767,5.32094085 C13.9702212,5.32094085 13.6256856,6.02252733 13.6256856,7.05171716 L13.6256856,9.48481614 L17.2236791,9.48481614 L16.7751033,13.1657526 L13.6256856,13.1657526 L13.6256856,22 L9.94474914,22 Z"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link
              to={isLogin ? "/register" : "/login"}
              className="font-medium text-beauty-500 hover:text-beauty-600"
            >
              {isLogin ? "Register" : "Log in"}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
