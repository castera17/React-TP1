import { useState, useEffect } from 'react';
import './App.css';
import Formulario from './Formulario';
import Listado from './Listado';

function App() {
  const [citas,setCitas] = useState([]);
  useEffect(() => {
    const CitasGuardadas = localStorage.getItem('citas');
    if (CitasGuardadas) {
      setCitas(JSON.parse(CitasGuardadas));
    }
  },[]);

  useEffect(() => {
    if(citas?.length){
    localStorage.setItem('citas', JSON.stringify(citas));
    }
    else{
      localStorage.removeItem('citas');
    }
  }, [citas]);

  return (
    <div className="contenedor-app">
    <h1>ADMINISTRADOR DE CITAS</h1>
    <div className="contenedor-principal">
      <div>
        <h2 className="seccion-titulo">CREA TU CITA</h2>
        <Formulario citas={citas} setCitas={setCitas} />
      </div>
      <div>
        <h2 className="seccion-titulo">ADMINISTRA TUS CITAS</h2>
        <Listado citas={citas} setCitas={setCitas}/>
      </div>
    </div>
  </div>
  )
}

export default App