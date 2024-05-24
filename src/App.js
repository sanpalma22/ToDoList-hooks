import Formulario from './componentes/Formulario'
import Tarea from './componentes/Tarea'
import { useState } from 'react';
import './App.css';

function App() {
  const [tareas,setTareas]=useState([])
  return (
    <>
      
      <Formulario tareas={tareas} setTareas={setTareas}></Formulario>
      <ul>
        {
          tareas.map((t,i)=><Tarea tareas={tareas} setTareas={setTareas} texto={t.texto} hecho={t.hecho} fecha={t.fecha} index={i}></Tarea>)
        }
      </ul>
    </>
  );
}

export default App;
