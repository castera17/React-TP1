import { useState,useEffect } from "react";

const Formulario = ({ citas, setCitas }) => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    fecha: "",
    sintomas: "",
  });


  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const AgregarCita = (e) => {
    e.preventDefault();

    const confirmar = window.confirm("¿Querés agregar esta cita?");
    if (!confirmar) return;

    const nuevaCita = {
      ...formulario,
      id: Date.now(),
    };

    setCitas([...citas, nuevaCita]);

    setFormulario({
      nombre: "",
      apellido: "",
      fecha: "",
      sintomas: "",
    });
  };

  
  return (
    <div className="formulario">
      <form onSubmit={AgregarCita}>
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
        />

        <label>Apellido</label>
        <input
          type="text"
          name="apellido"
          value={formulario.apellido}
          onChange={handleChange}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          value={formulario.fecha}
          onChange={handleChange}
        />

        <label>Sintomas</label>
        <textarea
          name="sintomas"
          value={formulario.sintomas}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
};
  export default Formulario;