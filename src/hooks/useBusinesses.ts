
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type Business = Tables<'businesses'> & {
  address?: Tables<'addresses'>;
};

export const useBusinesses = () => {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBusinesses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('businesses')
        .select(`
          *,
          address:addresses(*)
        `);

      if (error) throw error;
      setBusinesses(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar estabelecimentos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

  return { businesses, loading, error, refetch: fetchBusinesses };
};

export const useBusinessById = (id: string) => {
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('businesses')
          .select(`
            *,
            address:addresses(*),
            services(*),
            employees(*)
          `)
          .eq('id', id)
          .single();

        if (error) throw error;
        setBusiness(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar estabelecimento');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBusiness();
    }
  }, [id]);

  return { business, loading, error };
};
