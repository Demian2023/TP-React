import PropTypes from 'prop-types'
import Button from '@mui/material/Button';


export const ListadoListas = ({listas, nombreLista, editar, eliminarTitulo}) => {
   
    const mostrar = (e) =>{
        nombreLista(e.target.innerText)
    }

return (
    <div className="formulario">
        <div className="flex" style={{width: "100%"}}>
            <div style={{width: "100%"}}>
                <h1>Listado Listas:</h1>
                <ul>
                    {listas.map((lista, index)=>(
                        <div  key={index} style={{display: "flex", flexWrap: "wrap"}}>
                            <li style={{width: "100%", marginLeft: "20px"}}onClick={mostrar}>
                                {lista.titulo}
                            </li>
                            <Button variant="outlined" onClick={() => {editar(lista.titulo)}}>Cambiar nombre</Button >
                            <Button variant="outlined" className="eliminar" onClick={()=>{eliminarTitulo(lista.titulo)}}>Eliminar</Button >

                        </div>
                    ))}
                </ul>  
            </div>
           
        </div>
    </div>
);
}

ListadoListas.propTypes = {
    listas: PropTypes.array.isRequired,
    nombreLista: PropTypes.func.isRequired,
    eliminarTitulo: PropTypes.func.isRequired,
    editar: PropTypes.func.isRequired,
};