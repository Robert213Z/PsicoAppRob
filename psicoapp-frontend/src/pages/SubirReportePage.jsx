import React, { useState } from 'react';
import SubirReporteForm from '../components/SubirReporteForm';
import Heading from '../components/Heading';
import Alert from '../components/Alert';

function SubirReportePage() {
  const [message, setMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleUploadReport = async (file) => {
    if (!file) {
      setMessage('Por favor, seleccione un archivo para subir.');
      setAlertType('error');
      return;
    }

    try {
      // Simula o realiza la llamada al backend para subir el reporte
      console.log('Subiendo reporte:', file.name);

      // Simulación de respuesta del backend
      const response = { success: true, message: 'Reporte subido exitosamente' };

      if (response.success) {
        setMessage(response.message);
        setAlertType('success');
      } else {
        setMessage('Hubo un error al subir el reporte');
        setAlertType('error');
      }
    } catch (error) {
      setMessage('Error de red o servidor');
      setAlertType('error');
    }
  };

  return (
    <div>
      <Heading level={1}>Subir Reporte</Heading>
      {message && <Alert type={alertType}>{message}</Alert>}
      <SubirReporteForm onFileSelect={handleUploadReport} />
    </div>
  );
}

export default SubirReportePage;
