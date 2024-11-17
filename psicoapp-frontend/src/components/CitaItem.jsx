import React from 'react';
import Card from './Card';
import Button from './Button';

function CitaItem({ cita, onCancel }) {
  return (
    <Card>
      <p>Fecha: {cita.date}</p>
      <p>Hora: {cita.time}</p>
      <p>Estado: {cita.status}</p>
      <Button variant="danger" onClick={() => onCancel(cita.id)}>Cancelar</Button>
    </Card>
  );
}

export default CitaItem;
