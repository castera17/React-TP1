import './App.css';
import Formulario from './Formulario';
import Listado from './Listado';

function App() {
  return (
    <div className="app">
      <h1>ADMINISTRADOR DE CITAS</h1>
      <h2>CREA TU CITA</h2>
      <Formulario/>
      <Listado />
    </div>
  )
}

export default App