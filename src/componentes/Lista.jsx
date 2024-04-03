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
      {...attributes}
      {...listeners}
    >
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <li style={{width: "100%", marginLeft: "20px"}}onClick={mostrar}>
                {user.titulo}
            </li>
            <Button variant="outlined" onClick={() => {editar(user.titulo)}}>Cambiar nombre</Button >
            <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTitulo(user.titulo)}}>Eliminar</Button >
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