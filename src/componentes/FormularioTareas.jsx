import '../estilos/formulario.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const FormularioTareas = ({agregarTarea}) => {

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
                        <form onSubmit={enviarTarea} className='centradoVertical'>
                            <TextField
                            required
                            id="outlined-required"
                            value={texto}
                            label="Campo obligatorio"
                            onChange={inputChange}
                            />
                            <Button type='submit' variant="contained">Agregar tarea</Button>
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