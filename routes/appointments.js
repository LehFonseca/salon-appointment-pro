import Appointment from '../models/Appointment.js';

/**
 * @desc    Criar um novo agendamento
 * @route   POST /api/appointments
 * @access  Public
 */
export const createAppointment = async (req, res) => {
  try {
    const { clientName, service, date, duration, notes } = req.body;

    // Validação básica
    if (!clientName || !service || !date || !duration) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios' });
    }

    const newAppointment = new Appointment({
      clientName,
      service,
      date: new Date(date),
      duration: Number(duration),
      notes: notes || '',
      status: 'pending'
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);

  } catch (err) {
    console.error('Erro ao criar agendamento:', err);
    res.status(500).json({ error: 'Erro no servidor ao criar agendamento' });
  }
};

/**
 * @desc    Obter todos os agendamentos
 * @route   GET /api/appointments
 * @access  Public
 */
export const getAllAppointments = async (req, res) => {
  try {
    const { status, dateFrom, dateTo } = req.query;
    let query = {};

    // Filtros opcionais
    if (status) query.status = status;
    if (dateFrom || dateTo) {
      query.date = {};
      if (dateFrom) query.date.$gte = new Date(dateFrom);
      if (dateTo) query.date.$lte = new Date(dateTo);
    }

    const appointments = await Appointment.find(query)
      .sort({ date: 1 })
      .lean();

    res.json(appointments);

  } catch (err) {
    console.error('Erro ao buscar agendamentos:', err);
    res.status(500).json({ error: 'Erro no servidor ao buscar agendamentos' });
  }
};

/**
 * @desc    Obter um agendamento específico
 * @route   GET /api/appointments/:id
 * @access  Public
 */
export const getAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id).lean();

    if (!appointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    res.json(appointment);

  } catch (err) {
    console.error('Erro ao buscar agendamento:', err);
    res.status(500).json({ error: 'Erro no servidor ao buscar agendamento' });
  }
};

/**
 * @desc    Atualizar um agendamento
 * @route   PUT /api/appointments/:id
 * @access  Public
 */
export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Converte a data se fornecida
    if (updateData.date) {
      updateData.date = new Date(updateData.date);
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).lean();

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    res.json(updatedAppointment);

  } catch (err) {
    console.error('Erro ao atualizar agendamento:', err);
    
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    
    res.status(500).json({ error: 'Erro no servidor ao atualizar agendamento' });
  }
};

/**
 * @desc    Deletar um agendamento
 * @route   DELETE /api/appointments/:id
 * @access  Public
 */
export const deleteAppointment = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id).lean();

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Agendamento não encontrado' });
    }

    res.json({ message: 'Agendamento removido com sucesso', deletedAppointment });

  } catch (err) {
    console.error('Erro ao deletar agendamento:', err);
    res.status(500).json({ error: 'Erro no servidor ao deletar agendamento' });
  }
};