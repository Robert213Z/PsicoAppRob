import React, { useState } from 'react';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Button from '../components/Button';

function EnviarTestPage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [tests, setTests] = useState([
    { id: 1, name: 'Test de Ansiedad' },
    { id: 2, name: 'Test de Depresión' },
    // Lista de tests disponibles
  ]);
  const [selectedTest, setSelectedTest] = useState(null);

  const handleSendTest = async () => {
    if (!selectedTest) {
      setMessage('Por favor, seleccione un test para enviar.');
      setAlertType('error');
      return;
    }

    try {
      // Simula o realiza la llamada al backend para enviar el test
      console.log('Enviando test:', selectedTest);

      // Simulación de respuesta del backend
      const response = { success: true, message: `Test ${selectedTest.name} enviado exitosamente` };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error al enviar el test.');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Enviar Test Diagnóstico</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}

      <div>
        <h3>Seleccione un test para enviar:</h3>
        <ul>
          {tests.map((test) => (
            <li key={test.id}>
              <label>
                <input
                  type="radio"
                  name="test"
                  value={test.id}
                  onChange={() => setSelectedTest(test)}
                />
                {test.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={handleSendTest} variant="primary">
        Enviar Test
      </Button>
    </div>
  );
}

export default EnviarTestPage;
