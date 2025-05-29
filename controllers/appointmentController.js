const Appointment = require('../models/Appointment');

exports.createAppointment = (req, res) => {
  Appointment.create(req.body, (err, newAppointment) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(newAppointment);
  });
};

exports.getAllAppointments = (req, res) => {
  Appointment.findAll((err, appointments) => {
    if (err) return res.status(500).send(err);
    res.json(appointments);
  });
};

exports.getAppointment = (req, res) => {
  Appointment.findById(req.params.id, (err, appointment) => {
    if (err) return res.status(500).send(err);
    if (!appointment) return res.status(404).send('Appointment not found');
    res.json(appointment);
  });
};

exports.updateAppointment = (req, res) => {
  Appointment.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Appointment updated successfully');
  });
};

exports.deleteAppointment = (req, res) => {
  Appointment.delete(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Appointment deleted successfully');
  });
};