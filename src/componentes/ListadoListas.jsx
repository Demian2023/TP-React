import PropTypes from 'prop-types'

export const ListadoListas = ({listas, nombreLista}) => {
   
    const mostrar = (e) =>{
        nombreLista(e.target.innerText)
    }

return (
    <div className="formulario">
        <div className="flex">
            <div>
                <h1>Listado Listas:</h1>
                <ul>
                    {listas.map((lista, index)=>(
                        <li key={index} onClick={mostrar}>
                            {lista.titulo}
                        </li>
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
};