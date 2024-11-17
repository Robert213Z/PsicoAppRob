import React from 'react';
import CitaItem from './CitaItem';

function CitaList({ citas, onCancel }) {
  return (
    <div>
      {citas.map((cita) => (
        <CitaItem key={cita.id} cita={cita} onCancel={onCancel} />
      ))}
    </div>
  );
}

export default CitaList;
