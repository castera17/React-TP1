import Cita from './Cita';


const Listado = ({ citas, setCitas }) => {
  const eliminarCita = (id) => {
    const confirmar = window.confirm("¿Estás seguro de que querés eliminar esta cita?");
    if (!confirmar) return;
   
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <div className="listado">
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          id={cita.id}
          Nombre={cita.nombre}
          Apellido={cita.apellido}
          fecha={cita.fecha}
          sintomas={cita.sintomas}
          eliminarCita={eliminarCita} 
        />
      ))}
    </div>
  );
};

export default Listado;