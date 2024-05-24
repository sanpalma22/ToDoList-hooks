import { useState } from "react"

function Tarea({texto,tareas,setTareas,index}){
    const [hecho,setRealizado]=useState(false)

    return(
    <div className={hecho ? 'tarea-hecha' : 'tarea-pendiente'}>
     <li onClick={tacharTarea}>{texto}</li>
     <button className="tachar" onClick={borrarTarea}><img src="https://cdn-icons-png.flaticon.com/512/3817/3817209.png" alt=""/></button>
    </div>
    )
    
    function tacharTarea(){
        setRealizado(hecho=>!hecho)
        console.log(hecho)
    }
    
    function borrarTarea(e){
        setTareas(tareas.filter(t=>t.index!==index))
    }
    
}

export default Tarea;

