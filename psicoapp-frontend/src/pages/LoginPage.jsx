import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function LoginPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleLogin = async (credentials) => {
    try {
      // Simula la autenticación
      console.log('Autenticando con:', credentials);
      const response = { success: true, message: 'Inicio de sesión exitoso' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
        localStorage.setItem('token', 'token-simulado');
        window.location.href = '/dashboard'; // Redirige al Dashboard
      } else {
        setMessage('Credenciales inválidas');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Iniciar Sesión</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <LoginForm onSubmit={handleLogin} />
      <div style={{ marginTop: '10px' }}>
        <p>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
        <p>
          ¿Olvidaste tu contraseña? <Link to="/recover-password">Recupérala aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
