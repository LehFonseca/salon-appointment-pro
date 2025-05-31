
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Edit, Trash2, User, Star } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

const employeeSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  position: z.string().min(2, "Cargo é obrigatório"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  email: z.string().email("Email inválido"),
  specialties: z.array(z.string()).min(1, "Pelo menos uma especialidade é obrigatória"),
});

type EmployeeFormData = z.infer<typeof employeeSchema>;

interface Employee {
  id: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  imageUrl?: string;
  rating: number;
  specialties: string[];
  appointmentsToday: number;
  revenue: string;
}

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: "1",
      name: "Ana Silva",
      position: "Cabeleireira Senior",
      phone: "(11) 99999-0001",
      email: "ana@salon.com",
      rating: 4.9,
      specialties: ["Corte", "Coloração", "Escova"],
      appointmentsToday: 8,
      revenue: "R$ 640"
    },
    {
      id: "2", 
      name: "Carlos Santos",
      position: "Barbeiro",
      phone: "(11) 99999-0002",
      email: "carlos@salon.com",
      rating: 4.7,
      specialties: ["Corte Masculino", "Barba", "Bigode"],
      appointmentsToday: 6,
      revenue: "R$ 270"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<string | null>(null);

  const form = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: "",
      position: "",
      phone: "",
      email: "",
      specialties: [],
    },
  });

  const availableSpecialties = [
    "Corte Feminino", "Corte Masculino", "Coloração", "Escova", "Barba", 
    "Bigode", "Tratamento Capilar", "Manicure", "Pedicure", "Maquiagem"
  ];

  const onSubmit = (data: EmployeeFormData) => {
    const newEmployee: Employee = {
      id: editingEmployee || `emp_${Date.now()}`,
      ...data,
      rating: 5.0,
      appointmentsToday: 0,
      revenue: "R$ 0"
    };

    if (editingEmployee) {
      setEmployees(prev => 
        prev.map(emp => emp.id === editingEmployee ? newEmployee : emp)
      );
      toast({
        title: "Funcionário atualizado",
        description: "As informações do funcionário foram atualizadas com sucesso.",
      });
    } else {
      setEmployees(prev => [...prev, newEmployee]);
      toast({
        title: "Funcionário adicionado",
        description: "Novo funcionário foi adicionado à equipe com sucesso.",
      });
    }

    form.reset();
    setIsDialogOpen(false);
    setEditingEmployee(null);
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee.id);
    form.setValue("name", employee.name);
    form.setValue("position", employee.position);
    form.setValue("phone", employee.phone);
    form.setValue("email", employee.email);
    form.setValue("specialties", employee.specialties);
    setIsDialogOpen(true);
  };

  const handleDelete = (employeeId: string) => {
    setEmployees(prev => prev.filter(emp => emp.id !== employeeId));
    toast({
      title: "Funcionário removido",
      description: "O funcionário foi removido da equipe.",
    });
  };

  const handleNewEmployee = () => {
    setEditingEmployee(null);
    form.reset();
    setIsDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-white">Gestão de Funcionários</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleNewEmployee} className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Plus className="h-4 w-4 mr-2" />
              Adicionar Funcionário
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-glam-800 border-glam-700 text-white max-w-md">
            <DialogHeader>
              <DialogTitle className="text-gold-400">
                {editingEmployee ? "Editar Funcionário" : "Novo Funcionário"}
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome Completo</FormLabel>
                      <FormControl>
                        <Input {...field} className="bg-glam-900 border-glam-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cargo</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-glam-900 border-glam-600">
                            <SelectValue placeholder="Selecione o cargo" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-glam-800 border-glam-600">
                          <SelectItem value="Cabeleireira">Cabeleireira</SelectItem>
                          <SelectItem value="Cabeleireira Senior">Cabeleireira Senior</SelectItem>
                          <SelectItem value="Barbeiro">Barbeiro</SelectItem>
                          <SelectItem value="Manicure">Manicure</SelectItem>
                          <SelectItem value="Esteticista">Esteticista</SelectItem>
                          <SelectItem value="Maquiadora">Maquiadora</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="(11) 99999-9999" className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input {...field} type="email" className="bg-glam-900 border-glam-600" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="bg-gold-500 hover:bg-gold-600 text-glam-900 flex-1">
                    {editingEmployee ? "Atualizar" : "Adicionar"} Funcionário
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
        {employees.map((employee) => (
          <Card key={employee.id} className="bg-glam-800 border-glam-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={employee.imageUrl} alt={employee.name} />
                    <AvatarFallback className="bg-gold-500/20 text-gold-400">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-white">{employee.name}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm">{employee.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 mb-2">{employee.position}</p>
                    <div className="flex flex-wrap gap-1">
                      {employee.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-white font-medium">{employee.appointmentsToday} agendamentos hoje</p>
                  <p className="text-gold-400 font-bold">{employee.revenue}</p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(employee)}
                      className="border-glam-600 text-gray-300 hover:bg-glam-700"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(employee.id)}
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

export default EmployeeManagement;
