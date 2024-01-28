import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'
import Button from '@mui/material/Button';

export const ListadoTareas = ({tareas, toggleClass, eliminarTarea, abrirModalEditar}) =>{
    
    return (
        <div className="lista">
            {tareas.map((tarea) => (
                <div key={tarea.id}>
                    <div>
                        <li id={tarea.id} className={tarea.clase === false ? "noCompletada" : "completada"}>{tarea.texto}</li>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={()=>{toggleClass(tarea.id)}} > {tarea.clase === false ? "Marcar como completa" : "Desmarcar"}</Button >
                        <Button variant="outlined" onClick={()=>{abrirModalEditar(tarea.id, tarea.texto)}} >Editar</Button >
                        <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTarea(tarea.id)}} >Eliminar</Button >
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
    abrirModalEditar: PropTypes.func.isRequired,
};