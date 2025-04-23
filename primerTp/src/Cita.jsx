const Cita = ({ Nombre, Apellido, fecha, sintomas }) => {
  return (
    <div className="cita">
     <p><strong>Nombre:</strong> {Nombre}</p>
      <p><strong>Apellido:</strong> {Apellido}</p>
      <p><strong>Fecha:</strong> {fecha}</p>
      <p><strong>Síntomas:</strong> {sintomas}</p>
      <button>ELIMINAR ×</button>
    </div>
  );
};


export default Cita;