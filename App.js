import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppointmentsPage from './pages/Appointments';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AppointmentsPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;