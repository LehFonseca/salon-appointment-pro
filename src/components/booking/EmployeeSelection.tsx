
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Clock, User } from "lucide-react";

interface Employee {
  id: string;
  name: string;
  position: string;
  rating: number;
  imageUrl?: string;
  availableTimes: string[];
  specialties: string[];
}

interface EmployeeSelectionProps {
  employees: Employee[];
  selectedEmployee: Employee | null;
  onEmployeeSelect: (employee: Employee) => void;
}

const EmployeeSelection = ({ employees, selectedEmployee, onEmployeeSelect }: EmployeeSelectionProps) => {
  return (
    <Card className="bg-glam-800 border-glam-700">
      <CardHeader>
        <CardTitle className="text-gold-400">Escolha o Profissional</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {employees.map((employee) => (
          <Card 
            key={employee.id}
            className={`cursor-pointer transition-colors ${
              selectedEmployee?.id === employee.id 
                ? 'bg-gold-500/20 border-gold-500' 
                : 'bg-glam-900 border-glam-600 hover:bg-glam-700'
            }`}
            onClick={() => onEmployeeSelect(employee)}
          >
            <CardContent className="p-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={employee.imageUrl} alt={employee.name} />
                  <AvatarFallback className="bg-gold-500/20 text-gold-400">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-white">{employee.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm">{employee.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-2">{employee.position}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {employee.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="h-4 w-4" />
                    <span>Próximos horários: {employee.availableTimes.slice(0, 3).join(', ')}</span>
                  </div>
                </div>
                
                {selectedEmployee?.id === employee.id && (
                  <div className="bg-gold-500 rounded-full p-1">
                    <User className="h-4 w-4 text-glam-900" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default EmployeeSelection;
