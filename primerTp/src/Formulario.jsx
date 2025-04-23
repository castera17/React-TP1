const Formulario = () => {
    return (
      <div className="formulario">
        
      
        <form>
        <label for="Nombre">Nombre</label>
         <input type="text" />

         <label for="Apellido">Apellido</label>
         <input type="text" id="apellido" /> 

         <label for="date">Fecha</label>
         <input type="date" />

        <label for="Sintomas">Sintomas</label>
        <textarea name="Sintomas"></textarea>  

        <button type="submit">Agregar Cita</button>
        </form>
      </div>
    );
  };
  
  export default Formulario;