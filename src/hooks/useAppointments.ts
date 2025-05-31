
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';
import { toast } from '@/hooks/use-toast';

type Appointment = Tables<'appointments'> & {
  business?: Tables<'businesses'>;
  service?: Tables<'services'>;
  employee?: Tables<'employees'>;
};

export const useAppointments = (userId?: string, businessId?: string) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('appointments')
        .select(`
          *,
          business:businesses(*),
          service:services(*),
          employee:employees(*)
        `);

      if (userId) {
        query = query.eq('user_id', userId);
      }
      
      if (businessId) {
        query = query.eq('business_id', businessId);
      }

      const { data, error } = await query.order('appointment_date', { ascending: true });
      if (error) throw error;
      
      setAppointments(data || []);
    } catch (error) {
      console.error('Erro ao carregar agendamentos:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os agendamentos",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const createAppointment = async (appointmentData: Omit<Tables<'appointments'>, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .insert([appointmentData])
        .select(`
          *,
          business:businesses(*),
          service:services(*),
          employee:employees(*)
        `)
        .single();

      if (error) throw error;
      
      setAppointments(prev => [...prev, data]);
      toast({
        title: "Sucesso",
        description: "Agendamento criado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao criar agendamento:', error);
      toast({
        title: "Erro",
        description: "Não foi possível criar o agendamento",
        variant: "destructive"
      });
      throw error;
    }
  };

  const updateAppointment = async (id: string, updates: Partial<Tables<'appointments'>>) => {
    try {
      const { data, error } = await supabase
        .from('appointments')
        .update(updates)
        .eq('id', id)
        .select(`
          *,
          business:businesses(*),
          service:services(*),
          employee:employees(*)
        `)
        .single();

      if (error) throw error;
      
      setAppointments(prev => prev.map(appointment => 
        appointment.id === id ? data : appointment
      ));
      
      toast({
        title: "Sucesso",
        description: "Agendamento atualizado com sucesso"
      });
      
      return data;
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o agendamento",
        variant: "destructive"
      });
      throw error;
    }
  };

  const deleteAppointment = async (id: string) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setAppointments(prev => prev.filter(appointment => appointment.id !== id));
      toast({
        title: "Sucesso",
        description: "Agendamento cancelado com sucesso"
      });
    } catch (error) {
      console.error('Erro ao deletar agendamento:', error);
      toast({
        title: "Erro",
        description: "Não foi possível cancelar o agendamento",
        variant: "destructive"
      });
      throw error;
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, [userId, businessId]);

  return {
    appointments,
    loading,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    refetch: fetchAppointments
  };
};
