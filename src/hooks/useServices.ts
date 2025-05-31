
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { toast } from '@/hooks/use-toast';

type Service = Tables<'services'>;

export const useServices = (businessId?: string) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchServices = async () => {
    try {
      setLoading(true);
      let query = supabase.from('services').select('*');
      
      if (businessId) {
        query = query.eq('business_id', businessId);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      setServices(data || []);
    } catch (error) {
      console.error('Erro ao carregar serviços:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os serviços",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createService = async (serviceData: Omit<Service, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .insert([serviceData])
        .select()
        .single();

      if (error) throw error;
      
      setServices(prev => [...prev, data]);
      toast({
        title: "Sucesso",
        description: "Serviço criado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao criar serviço:', error);
      toast({
        title: "Erro",
        description: "Não foi possível criar o serviço",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updateService = async (id: string, updates: Partial<Service>) => {
    try {
      const { data, error } = await supabase
        .from('services')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      setServices(prev => prev.map(service => 
        service.id === id ? data : service
      ));
      
      toast({
        title: "Sucesso",
        description: "Serviço atualizado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao atualizar serviço:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o serviço",
        variant: "destructive"
      });
      throw error;
    }
  };

  const deleteService = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setServices(prev => prev.filter(service => service.id !== id));
      toast({
        title: "Sucesso",
        description: "Serviço removido com sucesso"
      });
    } catch (error) {
      console.error('Erro ao deletar serviço:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover o serviço",
        variant: "destructive"
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchServices();
  }, [businessId]);

  return {
    services,
    loading,
    createService,
    updateService,
    deleteService,
    refetch: fetchServices
  };
};
