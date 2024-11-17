import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function SolicitarCitaForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ date, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <Input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
      />
      <Button type="submit" variant="primary">Solicitar Cita</Button>
    </form>
  );
}

export default SolicitarCitaForm;
