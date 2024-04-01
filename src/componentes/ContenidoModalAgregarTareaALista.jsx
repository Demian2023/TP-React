import { useState } from 'react';
import '../estilos/formulario.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContenidoModalAgregarTareaALista = ({ editar, titulo}) => {

    const [textoEditar, setTextoEditar]=useState("");
    
    const inputChange = (e) => {
        setTextoEditar(e.target.value)
    }

    const enviarEdicion = (e) => {
        e.preventDefault();
        editar(textoEditar);
        setTextoEditar("");
    }

return (
    <>
        <div className="flexCenter">
            <div>
                <h2>Agregar tarea a {titulo}</h2>
                <form onSubmit={enviarEdicion} className='centradoVertical'>
                    <TextField
                    required
                    id="outlined-required"
                    value={textoEditar}
                    label="Campo obligatorio"
                    onChange={inputChange}
                    />
                    <Button type='submit' variant="contained">Cambiar</Button>
                </form>  
            </div>
        </div>
    </>
);
}

ContenidoModalAgregarTareaALista.propTypes = {
    editar: PropTypes.func,
    titulo: PropTypes.string,
}