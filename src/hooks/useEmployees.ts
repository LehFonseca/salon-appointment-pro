
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { toast } from '@/hooks/use-toast';

type Employee = Tables<'employees'>;

export const useEmployees = (businessId?: string) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      let query = supabase.from('employees').select('*');
      
      if (businessId) {
        query = query.eq('business_id', businessId);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      setEmployees(data || []);
    } catch (error) {
      console.error('Erro ao carregar funcionários:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os funcionários",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createEmployee = async (employeeData: Omit<Employee, 'id' | 'created_at'>) => {
    try {
      const { data, error } = await supabase
        .from('employees')
        .insert([employeeData])
        .select()
        .single();

      if (error) throw error;
      
      setEmployees(prev => [...prev, data]);
      toast({
        title: "Sucesso",
        description: "Funcionário adicionado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao criar funcionário:', error);
      toast({
        title: "Erro",
        description: "Não foi possível adicionar o funcionário",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updateEmployee = async (id: string, updates: Partial<Employee>) => {
    try {
      const { data, error } = await supabase
        .from('employees')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setEmployees(prev => prev.map(employee => 
        employee.id === id ? data : employee
      ));
      
      toast({
        title: "Sucesso",
        description: "Funcionário atualizado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao atualizar funcionário:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o funcionário",
        variant: "destructive"
      });
      throw error;
    }
  };

  const deleteEmployee = async (id: string) => {
    try {
      const { error } = await supabase
        .from('employees')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setEmployees(prev => prev.filter(employee => employee.id !== id));
      toast({
        title: "Sucesso",
        description: "Funcionário removido com sucesso"
      });
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover o funcionário",
        variant: "destructive"
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [businessId]);

  return {
    employees,
    loading,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    refetch: fetchEmployees
  };
};
