
import { useApp } from "@/contexts/AppContext";
import BusinessDashboard from "@/components/business/BusinessDashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessDashboardPage = () => {
  const { currentUser, isAuthenticated } = useApp();

  if (!isAuthenticated || currentUser?.role !== 'business') {
    return (
      <div className="min-h-screen bg-glam-900 text-white flex items-center justify-center">
        <Card className="bg-glam-800 border-glam-700 max-w-md">
          <CardContent className="p-8 text-center">
            <Lock className="h-16 w-16 text-gold-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4 text-white">
              Acesso Restrito
            </h2>
            <p className="text-gray-300 mb-6">
              Esta área é exclusiva para empresas parceiras. Faça login com sua conta empresarial.
            </p>
            <div className="space-y-3">
              <Link to="/login">
                <Button className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900">
                  Fazer Login
                </Button>
              </Link>
              <Link to="/business">
                <Button variant="outline" className="w-full border-glam-600 text-gray-300 hover:bg-glam-700">
                  Cadastrar Empresa
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Building className="h-8 w-8 text-gold-400" />
            <h1 className="text-3xl font-bold gradient-heading">
              Dashboard Empresarial
            </h1>
          </div>
          <p className="text-gray-300">
            Bem-vindo, {currentUser.name}! Gerencie seu negócio de forma eficiente.
          </p>
        </div>

        <BusinessDashboard />
      </div>
    </div>
  );
};

export default BusinessDashboardPage;
