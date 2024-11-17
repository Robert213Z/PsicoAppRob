import React, { useState, useEffect } from 'react';
import CitaList from '../components/CitaList';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function CitasPage() {
  const [citas, setCitas] = useState([]);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    // Simulación de obtención de citas desde el backend
    const fetchCitas = async () => {
      try {
        console.log('Obteniendo citas...');
        const response = [
          { id: 1, date: '2024-11-20', time: '10:00 AM', status: 'Confirmada' },
          { id: 2, date: '2024-11-22', time: '2:00 PM', status: 'Pendiente' },
        ]; // Simulación de datos
        setCitas(response);
      } catch (error) {
        setMessage('Error al cargar las citas');
        setAlertType('error');
      }
    };
    fetchCitas();
  }, []);

  const handleCancelCita = async (citaId) => {
    try {
      // Simulación de cancelación de cita
      console.log('Cancelando cita:', citaId);
      setCitas(citas.filter((cita) => cita.id !== citaId));
      setMessage('Cita cancelada exitosamente');
      setAlertType('success');
    } catch (error) {
      setMessage('Error al cancelar la cita');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Mis Citas</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      {citas.length > 0 ? (
        <CitaList citas={citas} onCancel={handleCancelCita} />
      ) : (
        <p>No tienes citas programadas.</p>
      )}
    </div>
  );
}

export default CitasPage;
