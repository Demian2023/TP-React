import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'
import Button from '@mui/material/Button';

export const ListadoTareas = ({tareas, nombreListaMostrar, toggleClass, eliminarTarea, abrirModalEditar, abrirModalEditarLista}) =>{

    return (
        <div className="lista">
            <div className="flexCenter">
                <h2 style={{width: "fit-content"}}>{nombreListaMostrar}</h2>
                {nombreListaMostrar && 
                <div style={{width: "fit-content"}}>
                    <Button variant="outlined" onClick={() => {abrirModalEditarLista(nombreListaMostrar)}}>Agregar tarea</Button >
                </div>}
            </div>
            
            
           {tareas.map((lista) => (
                lista.titulo === nombreListaMostrar && (
                    lista.tarea.map((tarea, index) => (
                        <div key={index}>
                            <div>
                                <li id={tarea.id} className={tarea.clase === false ? "noCompletada" : "completada"}>{tarea.texto}</li>
                            </div>
                            <div>
                                <Button variant="outlined" onClick={()=>{toggleClass(lista.titulo, tarea.id)}} > {tarea.clase === false ? "Marcar como completa" : "Desmarcar"}</Button >
                                <Button variant="outlined" onClick={()=>{abrirModalEditar(lista.titulo, tarea.id, tarea.texto)}} >Editar</Button >
                                <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTarea(lista.titulo, tarea.id)}} >Eliminar</Button >
                            </div>
                        </div>
                    ))
                )
            ))}
        </div>
    )
}

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    nombreListaMostrar: PropTypes.string,
    toggleClass: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
    abrirModalEditar: PropTypes.func.isRequired,
    abrirModalEditarLista: PropTypes.func.isRequired,
};