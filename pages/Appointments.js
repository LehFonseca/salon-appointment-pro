import React, { useState } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

const AppointmentsPage = () => {
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (id) => {
    setEditingId(id);
    setShowForm(true);
  };

  const handleSave = () => {
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="appointments-page">
      <h1>Gerenciamento de Agendamentos</h1>
      
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancelar' : 'Novo Agendamento'}
      </button>
      
      {showForm && (
        <div className="form-container">
          <h2>{editingId ? 'Editar Agendamento' : 'Novo Agendamento'}</h2>
          <AppointmentForm 
            appointmentId={editingId} 
            onSave={handleSave}
          />
        </div>
      )}
      
      <AppointmentList onEdit={handleEdit} />
    </div>
  );
};

export default AppointmentsPage;