import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'



const ListadoTareas = ({tareas, toggleClass, eliminarTarea}) =>{

    
    return (
        <div className="lista">
            {tareas.map((tarea) => (
                <div key={tarea.id}>
                    <div>
                        <li id={tarea.id} className={tarea.clase}>{tarea.texto}</li>
                    </div>
                    <div>
                        <button onClick={()=>{toggleClass(tarea.id)}} > {tarea.clase === "noCompletada" ? "Completar" : "Sin completar"} {
                            
                        } </button>
                        <button onClick={()=>{eliminarTarea(tarea.id)}} >Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    toggleClass: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
};

export default ListadoTareas