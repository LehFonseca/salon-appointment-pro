
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Edit, Trash2, Scissors, Clock, DollarSign } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const serviceSchema = z.object({
  name: z.string().min(2, "Nome do serviço é obrigatório"),
  description: z.string().optional(),
  category: z.string().min(1, "Categoria é obrigatória"),
  price: z.number().min(0.01, "Preço deve ser maior que zero"),
  duration: z.number().min(1, "Duração deve ser pelo menos 1 minuto"),
});

type ServiceFormData = z.infer<typeof serviceSchema>;

interface Service {
  id: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  duration: number;
  bookingsToday: number;
  revenueToday: number;
}

const ServiceManagement = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "Corte Feminino",
      description: "Corte personalizado para cabelos femininos",
      category: "haircut",
      price: 80,
      duration: 60,
      bookingsToday: 15,
      revenueToday: 1200
    },
    {
      id: "2",
      name: "Coloração Completa",
      description: "Coloração completa com produtos de alta qualidade",
      category: "hair_coloring",
      price: 150,
      duration: 120,
      bookingsToday: 8,
      revenueToday: 1200
    },
    {
      id: "3",
      name: "Corte Masculino",
      description: "Corte moderno para cabelos masculinos",
      category: "haircut",
      price: 45,
      duration: 45,
      bookingsToday: 12,
      revenueToday: 540
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<string | null>(null);

  const form = useForm<ServiceFormData>({
    resolver: zodResolver(serviceSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      duration: 30,
    },
  });

  const categories = [
    { value: "haircut", label: "Corte de Cabelo" },
    { value: "hair_coloring", label: "Coloração" },
    { value: "hair_treatment", label: "Tratamento Capilar" },
    { value: "beard", label: "Barba" },
    { value: "facial", label: "Facial" },
    { value: "nails", label: "Unhas" },
    { value: "makeup", label: "Maquiagem" },
    { value: "massage", label: "Massagem" },
    { value: "other", label: "Outros" }
  ];

  const onSubmit = (data: ServiceFormData) => {
    const newService: Service = {
      id: editingService || `service_${Date.now()}`,
      ...data,
      bookingsToday: 0,
      revenueToday: 0
    };

    if (editingService) {
      setServices(prev => 
        prev.map(service => service.id === editingService ? newService : service)
      );
      toast({
        title: "Serviço atualizado",
        description: "O serviço foi atualizado com sucesso.",
      });
    } else {
      setServices(prev => [...prev, newService]);
      toast({
        title: "Serviço adicionado",
        description: "Novo serviço foi adicionado ao catálogo.",
      });
    }

    form.reset();
    setIsDialogOpen(false);
    setEditingService(null);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service.id);
    form.setValue("name", service.name);
    form.setValue("description", service.description || "");
    form.setValue("category", service.category);
    form.setValue("price", service.price);
    form.setValue("duration", service.duration);
    setIsDialogOpen(true);
  };

  const handleDelete = (serviceId: string) => {
    setServices(prev => prev.filter(service => service.id !== serviceId));
    toast({
      title: "Serviço removido",
      description: "O serviço foi removido do catálogo.",
    });
  };

  const handleNewService = () => {
    setEditingService(null);
    form.reset();
    setIsDialogOpen(true);
  };

  const getCategoryLabel = (category: string) => {
    return categories.find(cat => cat.value === category)?.label || category;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Gestão de Serviços</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleNewService} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Serviço
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-gold-400">
                {editingService ? "Editar Serviço" : "Novo Serviço"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome do Serviço</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-glam-900 border-glam-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição (Opcional)</FormLabel>
                      <FormControl>
                        <Textarea {...field} className="bg-glam-900 border-glam-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Categoria</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-glam-900 border-glam-600">
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-glam-800 border-glam-600">
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preço (R$)</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number"
                            step="0.01"
                            onChange={(e) => field.onChange(parseFloat(e.target.value))}
                            className="bg-glam-900 border-glam-600" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Duração (min)</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            type="number"
                            onChange={(e) => field.onChange(parseInt(e.target.value))}
                            className="bg-glam-900 border-glam-600" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="bg-gold-500 hover:bg-gold-600 text-glam-900 flex-1">
                    {editingService ? "Atualizar" : "Adicionar"} Serviço
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setIsDialogOpen(false)}
                    className="border-glam-600 text-gray-300"
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id} className="bg-glam-800 border-glam-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-lg">
                    <Scissors className="h-6 w-6 text-gold-400" />
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white text-lg">{service.name}</h4>
                    <p className="text-gray-400 mb-2">{getCategoryLabel(service.category)}</p>
                    {service.description && (
                      <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    )}
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-gold-400" />
                        <span className="text-gray-300">{service.duration} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4 text-gold-400" />
                        <span className="text-gold-400 font-semibold">R$ {service.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-white font-medium">{service.bookingsToday} agendamentos hoje</p>
                  <p className="text-gold-400 font-bold">R$ {service.revenueToday.toFixed(2)}</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(service)}
                      className="border-glam-600 text-gray-300 hover:bg-glam-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(service.id)}
                      className="border-red-600 text-red-400 hover:bg-red-900/20"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceManagement;
