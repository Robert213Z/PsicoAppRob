import React, { useState } from 'react';
import SolicitarCitaForm from '../components/SolicitarCitaForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function SolicitarCitaPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSolicitarCita = async (citaData) => {
    try {
      // Simula o realiza la llamada al backend para solicitar una nueva cita
      console.log('Solicitando cita con:', citaData);

      // Simulación de respuesta del backend
      const response = { success: true, message: 'Cita solicitada exitosamente' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage(response.message || 'Hubo un error al solicitar la cita');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Solicitar Cita</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <SolicitarCitaForm onSubmit={handleSolicitarCita} />
    </div>
  );
}

export default SolicitarCitaPage;
