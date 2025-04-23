import Cita from './Cita';
import { useState } from 'react';

const Listado = () => {
  
  const [citas] = useState([
    {
      Nombre: "Tiago",
      Apellido: "Ghelman",
      fecha: "2023-07-05",
      sintomas: "Le duele la pierna"
    },
    {
      Nombre: "Matias",
      Apellido: "Castera",
      fecha: "2023-08-05",
      sintomas: "Come mucho"
    },
    {
      Nombre: "Salva",
      Apellido: "Soncini",
      fecha: "2023-12-05",
      sintomas: "No está durmiendo"
    }
  ]);

  return (
    <div className="listado">
      
      {citas.map((cita) => (
        <Cita
          
          Nombre={cita.Nombre}
          Apellido={cita.Apellido}
          fecha={cita.fecha}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;