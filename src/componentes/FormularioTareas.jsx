import '../estilos/formulario.css';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export const FormularioTareas = ({agregarTarea}) => {

    const [titulo, setTitulo]=useState("");
    const [tituloLista, setTituloLista] = useState("");
    const [texto, setTexto]=useState("");
    const [switchDisplay, setSwitchDisplay] = useState(true);
    const [error, setError] = useState(false);
    const [booleanRef, setBooleanRef] = useState(true);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const cambiarDisplay = (e) => {
        e.preventDefault();
        const inputValue = titulo.trim()
        if (inputValue === '') {
            setError(true);
        } else {
            setSwitchDisplay(!switchDisplay)
            setBooleanRef(!booleanRef)
            setTituloLista(titulo)
            setError(false)
        }
    }

    useEffect(() => {
        booleanRef ? inputRef1.current.focus() :
        inputRef2.current.focus()
    }, [switchDisplay, booleanRef]);

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    }
    
    const handleTextoChange = (e) => {
        setTexto(e.target.value);
    }

    const enviarTarea = (e) => {
        e.preventDefault();
        const inputValueTarea = texto.trim();
         if (inputValueTarea === '') {
             setError(true);
         } else {
            agregarTarea(titulo, texto);
            setTexto("");
            setError(false);
         }
    }

    return (
        <>
            <div className="formulario">
                <div className="flex">
                    <div>
                        <h1>Lista de tareas</h1>
                        <div style={{height: "76px"}}>
                            <h2>{tituloLista}</h2>
                        </div>
                        <form onSubmit={cambiarDisplay}>
                            <div className={switchDisplay ? "mostrar" : "hide"}>
                                <TextField
                                required
                                inputRef={inputRef1}
                                id="outlined-required"
                                value={titulo}
                                label="Campo obligatorio"
                                onChange={handleTituloChange}
                                error={error}
                                helperText={error ? 'El título no puede estar vacío' : ''}
                                style={{margin: "10px"}}/>
                                <Button type="submit" variant="contained">Crear listado</Button>
                            </div>
                        </form>
                        <form onSubmit={enviarTarea}>
                            <div className='contenedorListas'>
                                <div className={switchDisplay ? "hide" : "mostrar"}>
                                    <TextField
                                    required
                                    inputRef={inputRef2}
                                    id="outlined-required"
                                    value={texto}
                                    label="Campo obligatorio" 
                                    onChange={handleTextoChange}
                                    error={error}
                                    helperText={error ? 'El título no puede estar vacío' : ''}
                                    style={{margin: "10px"}}/>
                                    <Button type='submit' variant="contained">Agregar tarea</Button>
                                </div>
                            </div>
                            <div className={switchDisplay ? "hide" : "mostrar"}>
                                <Button variant="contained" onClick={cambiarDisplay}>← Volver atrás</Button>
                            </div>
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