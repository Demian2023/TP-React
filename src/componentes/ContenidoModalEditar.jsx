import { useState } from 'react';
import '../estilos/formulario.css';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const ContenidoModalEditar = ({editar, textoAnterior}) => {
    
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
                <h1>Editar texto:</h1>
                <h2>{textoAnterior}</h2>
                <form onSubmit={enviarEdicion} className='centradoVertical'>
                    <TextField
                    required
                    id="outlined-required"
                    value={textoEditar}
                    label="Campo obligatorio"
                    onChange={inputChange}
                    />
                    <Button type='submit' variant="contained">Editar</Button>
                </form>  
            </div>
            
        </div>
    </>
);};
ContenidoModalEditar.propTypes = {
    editar: PropTypes.func,
    textoAnterior: PropTypes.string,
}