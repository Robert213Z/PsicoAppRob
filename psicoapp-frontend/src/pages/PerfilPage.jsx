import React, { useState } from 'react';
import PerfilForm from '../components/PerfilForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function PerfilPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [user, setUser] = useState({
    name: 'Usuario Prueba',
    email: 'usuario@ejemplo.com',
  }); // Datos de ejemplo, reemplazar con datos reales

  const handleUpdatePerfil = async (updatedData) => {
    try {
      // Simula o realiza la llamada al backend para actualizar el perfil
      console.log('Actualizando perfil con:', updatedData);

      // Simulación de respuesta del backend
      const response = { success: true, message: 'Perfil actualizado exitosamente' };

      if (response.success) {
        setUser(updatedData); // Actualiza el estado con los nuevos datos
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage(response.message || 'Hubo un error al actualizar el perfil');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Perfil de Usuario</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <PerfilForm user={user} onSubmit={handleUpdatePerfil} />
    </div>
  );
}

export default PerfilPage;
