import './App.css';
import Formulario from './Formulario';
import Listado from './Listado';

function App() {
  return (
    <div className="contenedor-app">
    <h1>ADMINISTRADOR DE CITAS</h1>
    <div className="contenedor-principal">
      <div>
        <h2 className="seccion-titulo">CREA TU CITA</h2>
        <Formulario />
      </div>
      <div>
        <h2 className="seccion-titulo">ADMINISTRA TUS CITAS</h2>
        <Listado />
      </div>
    </div>
  </div>
  )
}

export default App