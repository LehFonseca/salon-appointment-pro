import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/appointments'
});

export const getAppointments = () => api.get('/');
export const getAppointment = (id) => api.get(`/${id}`);
export const createAppointment = (appointment) => api.post('/', appointment);
export const updateAppointment = (id, appointment) => api.put(`/${id}`, appointment);
export const deleteAppointment = (id) => api.delete(`/${id}`);

export default api;