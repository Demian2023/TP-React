import '../estilos/formulario.css'
import { useState } from 'react';
import PropTypes from 'prop-types'

const FormularioTareas = ({agregarTarea}) => {

    const [texto, setTexto]=useState("");
    
    const inputChange = (e) => {
        setTexto(e.target.value)
    }

    const enviarTarea = (e) => {
        e.preventDefault();
        agregarTarea(texto);
        setTexto("")
    }

    return (
        <>
            <div className="formulario">
                <div className="flex">
                    <div>
                        <h1>Lista de tareas</h1>
                        <form onSubmit={enviarTarea}>
                            <input type="text"
                            placeholder='Ingresa una tarea'
                            value={texto}
                            required={true}
                            onChange={inputChange}/>
                            <button type='submit'>Agregar tarea</button>
                        </form>  
                    </div>
                    
                </div>
            </div>
        </>
    )
}

FormularioTareas.propTypes = {
    agregarTarea: PropTypes.func.isRequired,
};

export default FormularioTareas