import React, { useState, useEffect } from 'react';
import { createAppointment, updateAppointment, getAppointment } from '../services/api';

const AppointmentForm = ({ appointmentId, onSave }) => {
  const [formData, setFormData] = useState({
    clientName: '',
    service: '',
    date: '',
    duration: 60,
    status: 'pending',
    notes: ''
  });

  useEffect(() => {
    if (appointmentId) {
      const fetchAppointment = async () => {
        const { data } = await getAppointment(appointmentId);
        setFormData(data);
      };
      fetchAppointment();
    }
  }, [appointmentId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (appointmentId) {
        await updateAppointment(appointmentId, formData);
      } else {
        await createAppointment(formData);
      }
      onSave();
    } catch (error) {
      console.error('Erro ao salvar agendamento:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Cliente:</label>
        <input
          type="text"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Serviço:</label>
        <input
          type="text"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Data e Hora:</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date ? new Date(formData.date).toISOString().slice(0, 16) : ''}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Duração (minutos):</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Status:</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="pending">Pendente</option>
          <option value="confirmed">Confirmado</option>
          <option value="cancelled">Cancelado</option>
        </select>
      </div>
      
      <div>
        <label>Observações:</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AppointmentForm;