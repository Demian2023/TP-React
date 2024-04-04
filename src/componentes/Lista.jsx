import PropTypes from 'prop-types'
import Button from '@mui/material/Button';
import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

function Lista({ user, nombreLista, editar, eliminarTitulo }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: user.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const mostrar = (e) =>{
    nombreLista(e.target.innerText)
}

  return (
    <div
      style={style}
      ref={setNodeRef}
    >
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <li style={{width: "100%", marginLeft: "20px"}}onClick={mostrar}>
                {user.titulo}
            </li>
            <div style={{width: "100%", display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Button variant="outlined" onClick={() => {editar(user.titulo)}}>Cambiar nombre</Button >
                    <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTitulo(user.titulo)}}>Eliminar</Button >
                </div>
                <div>
                    <Button variant="outlined" {...attributes} {...listeners} style={{touchAction: "none"}}>
                        <p style={{margin: "0"}}>Mover</p> 
                        <svg style={{marginLeft: "5px"}} height="20px"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/></svg>
                    </Button >
                </div>
            </div>
        </div>
    </div>
  );
}

export default Lista;

Lista.propTypes = {
    user: PropTypes.object,
    nombreLista: PropTypes.func.isRequired,
    editar: PropTypes.func.isRequired,
    eliminarTitulo: PropTypes.func.isRequired,
}