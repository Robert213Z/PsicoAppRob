import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function RegisterPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleRegister = async (userData) => {
    try {
      console.log('Registrando usuario con datos:', userData);
      const response = { success: true, message: 'Registro exitoso' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error en el registro');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Registro</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <RegisterForm onSubmit={handleRegister} />
      <div style={{ marginTop: '10px' }}>
        <p>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
