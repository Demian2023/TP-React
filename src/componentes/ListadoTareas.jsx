import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'
import Button from '@mui/material/Button';




const ListadoTareas = ({tareas, toggleClass, eliminarTarea}) =>{

    
    return (
        <div className="lista">
            {tareas.map((tarea) => (
                <div key={tarea.id}>
                    <div>
                        <li id={tarea.id} className={tarea.clase === false ? "noCompletada" : "completada"}>{tarea.texto}</li>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={()=>{toggleClass(tarea.id)}} > {tarea.clase === false ? "Marcar como completa" : "Desmarcar"}</Button >
                        <Button variant="outlined" onClick={()=>{eliminarTarea(tarea.id)}} >Eliminar</Button >
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