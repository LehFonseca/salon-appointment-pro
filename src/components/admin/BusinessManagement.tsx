
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { Business, BusinessCategory } from "@/types";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BusinessManagement = () => {
  const { businesses, addBusiness, updateBusiness, deleteBusiness } = useApp();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingBusiness, setEditingBusiness] = useState<Business | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    cnpj: "",
    category: "hair_salon" as BusinessCategory,
    description: "",
    address: {
      street: "",
      number: "",
      city: "",
      state: "",
      zipCode: "",
      neighborhood: "",
    },
  });

  const filteredBusinesses = businesses.filter(business =>
    business.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    business.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categoryLabels = {
    hair_salon: "Salão de Beleza",
    barbershop: "Barbearia",
    nail_salon: "Nail Salon",
    spa: "Spa",
    esthetic_clinic: "Clínica Estética",
    makeup_studio: "Estúdio de Maquiagem",
    other: "Outros",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBusiness) {
      updateBusiness(editingBusiness.id, {
        ...formData,
        role: "business",
      });
      toast({
        title: "Empresa atualizada",
        description: "Os dados da empresa foram atualizados com sucesso.",
      });
    } else {
      const newBusiness: Business = {
        id: crypto.randomUUID(),
        ...formData,
        role: "business",
        createdAt: new Date(),
        photos: [],
        services: [],
        employees: [],
      };
      addBusiness(newBusiness);
      toast({
        title: "Empresa criada",
        description: "Nova empresa foi criada com sucesso.",
      });
    }

    setIsDialogOpen(false);
    setEditingBusiness(null);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      cnpj: "",
      category: "hair_salon",
      description: "",
      address: {
        street: "",
        number: "",
        city: "",
        state: "",
        zipCode: "",
        neighborhood: "",
      },
    });
  };

  const handleEdit = (business: Business) => {
    setEditingBusiness(business);
    setFormData({
      name: business.name,
      businessName: business.businessName,
      email: business.email,
      phone: business.phone || "",
      cnpj: business.cnpj,
      category: business.category,
      description: business.description || "",
      address: business.address,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta empresa?")) {
      deleteBusiness(id);
      toast({
        title: "Empresa excluída",
        description: "A empresa foi excluída com sucesso.",
      });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 mr-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Buscar empresas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-glam-800 border-glam-600 text-white"
            />
          </div>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Nova Empresa
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingBusiness ? "Editar Empresa" : "Nova Empresa"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 max-h-96 overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nome do Responsável</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessName">Nome da Empresa</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="cnpj">CNPJ</Label>
                  <Input
                    id="cnpj"
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    className="bg-glam-700 border-glam-600"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Categoria</Label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as BusinessCategory })}
                    className="flex h-10 w-full rounded-md border border-glam-600 bg-glam-700 px-3 py-2 text-sm text-white"
                  >
                    {Object.entries(categoryLabels).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label htmlFor="description">Descrição</Label>
                <Input
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-glam-700 border-glam-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="street">Rua</Label>
                  <Input
                    id="street"
                    value={formData.address.street}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, street: e.target.value }
                    })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
                <div>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    value={formData.address.number}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, number: e.target.value }
                    })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">Cidade</Label>
                  <Input
                    id="city"
                    value={formData.address.city}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, city: e.target.value }
                    })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
                <div>
                  <Label htmlFor="state">Estado</Label>
                  <Input
                    id="state"
                    value={formData.address.state}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, state: e.target.value }
                    })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    value={formData.address.zipCode}
                    onChange={(e) => setFormData({ 
                      ...formData, 
                      address: { ...formData.address, zipCode: e.target.value }
                    })}
                    className="bg-glam-700 border-glam-600"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600 text-glam-900">
                {editingBusiness ? "Atualizar" : "Criar"} Empresa
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {filteredBusinesses.map((business) => (
          <Card key={business.id} className="bg-glam-800 border-glam-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{business.businessName}</h3>
                  <p className="text-gray-300 mb-2">{business.email}</p>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline" className="border-gold-500 text-gold-400">
                      {categoryLabels[business.category]}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm">CNPJ: {business.cnpj}</p>
                  {business.phone && (
                    <p className="text-gray-400 text-sm">Telefone: {business.phone}</p>
                  )}
                  <p className="text-gray-400 text-sm">
                    Endereço: {business.address.street}, {business.address.number} - {business.address.city}, {business.address.state}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleEdit(business)}
                    className="border-glam-600 text-gray-300 hover:bg-glam-700"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(business.id)}
                    className="border-red-600 text-red-400 hover:bg-red-600/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredBusinesses.length === 0 && (
        <Card className="bg-glam-800 border-glam-700 text-center p-8">
          <CardContent>
            <p className="text-gray-400">Nenhuma empresa encontrada.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BusinessManagement;
