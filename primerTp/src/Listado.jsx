import Cita from './Cita';
import { useState } from 'react';

const Listado = () => {
  const [citas] = useState([1, 2, 3]); 

  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.map((cita, index) => (
        <Cita key={index} />
      ))}
    </div>
  );
};

export default Listado;