import React from 'react';
import Card from './Card';
import Button from './Button';

function ReporteItem({ reporte }) {
  return (
    <Card>
      <h3>{reporte.title}</h3>
      <p>Fecha: {reporte.date}</p>
      <Button variant="primary" onClick={() => console.log('Descargar', reporte.id)}>Descargar</Button>
    </Card>
  );
}

export default ReporteItem;
