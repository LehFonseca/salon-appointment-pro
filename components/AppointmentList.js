import React, { useState, useEffect } from 'react';
import { getAppointments, deleteAppointment } from '../services/api';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const AppointmentList = ({ onEdit }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const { data } = await getAppointments();
      setAppointments(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este agendamento?')) {
      try {
        await deleteAppointment(id);
        fetchAppointments();
      } catch (error) {
        console.error('Erro ao excluir agendamento:', error);
      }
    }
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div className="appointment-list">
      <h2>Agendamentos</h2>
      {appointments.length === 0 ? (
        <p>Nenhum agendamento encontrado</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Serviço</th>
              <th>Data</th>
              <th>Duração</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.clientName}</td>
                <td>{appointment.service}</td>
                <td>
                  {format(new Date(appointment.date), "PPpp", { locale: ptBR })}
                </td>
                <td>{appointment.duration} min</td>
                <td>
                  <span className={`status ${appointment.status}`}>
                    {appointment.status === 'pending' && 'Pendente'}
                    {appointment.status === 'confirmed' && 'Confirmado'}
                    {appointment.status === 'cancelled' && 'Cancelado'}
                  </span>
                </td>
                <td>
                  <button onClick={() => onEdit(appointment._id)}>Editar</button>
                  <button onClick={() => handleDelete(appointment._id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AppointmentList;