import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'
import Button from '@mui/material/Button';

export const ListadoTareas = ({tareas, nombreListaMostrar, toggleClass, eliminarTarea, abrirModalEditar}) =>{

    return (
        <div className="lista">
            {/* {tareas.map((lista, index) => (
                <div key={index}>
                    {lista.tarea.map((tarea, tareaIndex) => (
                        <div key={tareaIndex}>
                            {tarea.texto}
                        </div>
                    ))}
                </div>
            ))} */}
            {console.log(nombreListaMostrar)}
           {tareas.map((lista) => (
                lista.titulo === nombreListaMostrar && (
                    lista.tarea.map((tarea, index) => (
                        <div key={index}>
                            <div>
                                <li key={tarea.tareaNum} id={tarea.id} className={tarea.clase === false ? "noCompletada" : "completada"}>{tarea.texto}</li>
                            </div>
                            <div>
                                <Button variant="outlined" onClick={()=>{toggleClass(tarea.id)}} > {tarea.clase === false ? "Marcar como completa" : "Desmarcar"}</Button >
                                <Button variant="outlined" onClick={()=>{abrirModalEditar(tarea.id, tarea.texto)}} >Editar</Button >
                                <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTarea(tarea.id)}} >Eliminar</Button >
                            </div>
                        </div>
                    ))
                )
            ))}

            {/* {tareas.map((tarea, index) => (
                <div key={index}>
                    <div>
                        <li key={tarea.tarea.tareaNum} id={tarea.tarea.id} className={tarea.tarea.clase === false ? "noCompletada" : "completada"}>{tarea.tarea.texto}</li>
                    </div>
                    <div>
                        <Button variant="outlined" onClick={()=>{toggleClass(tarea.tarea.id)}} > {tarea.tarea.clase === false ? "Marcar como completa" : "Desmarcar"}</Button >
                        <Button variant="outlined" onClick={()=>{abrirModalEditar(tarea.tarea.id, tarea.tarea.texto)}} >Editar</Button >
                        <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTarea(tarea.tarea.id)}} >Eliminar</Button >
                    </div>
                </div>
            ))} */}
        </div>
    )
}

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    nombreListaMostrar: PropTypes.string,
    toggleClass: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
    abrirModalEditar: PropTypes.func.isRequired,
};