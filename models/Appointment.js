const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

class Appointment {
  // CREATE
  static create(appointmentData, callback) {
    const { clientName, service, date, time } = appointmentData;
    db.run(
      'INSERT INTO appointments (clientName, service, date, time) VALUES (?, ?, ?, ?)',
      [clientName, service, date, time],
      function(err) {
        callback(err, { id: this.lastID, ...appointmentData });
      }
    );
  }

  // READ (all)
  static findAll(callback) {
    db.all('SELECT * FROM appointments', callback);
  }

  // READ (single)
  static findById(id, callback) {
    db.get('SELECT * FROM appointments WHERE id = ?', [id], callback);
  }

  // UPDATE
  static update(id, appointmentData, callback) {
    const { clientName, service, date, time } = appointmentData;
    db.run(
      'UPDATE appointments SET clientName = ?, service = ?, date = ?, time = ? WHERE id = ?',
      [clientName, service, date, time, id],
      callback
    );
  }

  // DELETE
  static delete(id, callback) {
    db.run('DELETE FROM appointments WHERE id = ?', [id], callback);
  }
}

module.exports = Appointment;