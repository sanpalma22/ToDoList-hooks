function Formulario({tareas,setTareas}){
    return(
        <div className="ingresos">
            <form onSubmit={crearTarea}>
                <input name="texto" type="text" id="textoIngresado" placeholder="Ingrese lo que tenga que hacer"/>
                <button type="submit" className="boton">AGREGAR TAREA</button>
            </form>
        </div>
    )

    function crearTarea(e){
        e.preventDefault()
        setTareas([
            ...tareas,
            {
                texto:e.target.texto.value,
                hecho: false,
            }
        ])
        e.target.reset()
    }
}

export default Formulario;