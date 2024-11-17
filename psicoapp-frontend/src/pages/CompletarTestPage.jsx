import React, { useState, useEffect } from 'react';
import TestForm from '../components/TestForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

function CompletarTestPage() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  useEffect(() => {
    // Simulación de obtención de preguntas del test desde el backend
    const fetchQuestions = async () => {
      try {
        console.log('Obteniendo preguntas del test...');
        const response = [
          { id: 1, text: '¿Se siente ansioso frecuentemente?' },
          { id: 2, text: '¿Tiene dificultad para dormir?' },
          { id: 3, text: '¿Se siente desmotivado con frecuencia?' },
        ]; // Simulación de datos

        setQuestions(response);
        setLoading(false);
      } catch (error) {
        setMessage('Error al cargar las preguntas del test');
        setAlertType('error');
        setLoading(false);
      }
    };
    fetchQuestions();
  }, []);

  const handleSubmitAnswers = async (answers) => {
    try {
      // Simula o realiza la llamada al backend para enviar las respuestas
      console.log('Enviando respuestas:', answers);

      // Simulación de respuesta del backend
      const response = { success: true, message: 'Test completado exitosamente' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error al completar el test');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Completar Cuestionario Diagnóstico</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      {loading ? <Loader /> : <TestForm questions={questions} onSubmit={handleSubmitAnswers} />}
    </div>
  );
}

export default CompletarTestPage;
