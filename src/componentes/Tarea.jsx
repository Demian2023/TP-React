import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function Tarea ({ user, toggleClass, abrirModalEditar, eliminarTarea, lista }) {

    const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
    style={style}
    ref={setNodeRef}
    >
        <div>
            <li id={user.id} className={user.clase === false ? "noCompletada" : "completada"}>{user.texto}</li>
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <Button variant="outlined" onClick={()=>{toggleClass(lista.titulo, user.id)}} > {user.clase === false ? "Marcar" : "Desmarcar"}</Button >
                <Button variant="outlined" onClick={()=>{abrirModalEditar(lista.titulo, user.id, user.texto)}} >Editar</Button >
                <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTarea(lista.titulo, user.id)}} >Eliminar</Button >
            </div>
            <div>
                <Button variant="outlined" {...attributes} {...listeners}>
                    <p style={{margin: "0"}}>Mover</p> 
                    <svg style={{marginLeft: "5px"}} height="20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/></svg>
                </Button >
            </div>
        </div>
    </div>
  )
}

export default Tarea;

Tarea.propTypes = {
    user: PropTypes.object,
    toggleClass: PropTypes.func.isRequired,
    abrirModalEditar: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
    lista: PropTypes.object.isRequired,
}