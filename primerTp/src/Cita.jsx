const Cita = ({ id, Nombre, Apellido, fecha, sintomas, eliminarCita }) => {
  return (
    <div className="cita">
      <p><strong>Nombre:</strong> {Nombre}</p>
      <p><strong>Apellido:</strong> {Apellido}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button onClick={() => eliminarCita(id)}>Eliminar</button>
    </div>
  );
};

export default Cita;

