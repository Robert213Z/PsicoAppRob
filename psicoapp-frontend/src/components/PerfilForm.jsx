import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function PerfilForm({ user, onSubmit }) {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        type="email" 
        placeholder="Correo" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <Button type="submit" variant="primary">Guardar Cambios</Button>
    </form>
  );
}

export default PerfilForm;
