import { useState, useEffect } from 'react'
import './formulario.css'
import {v4 as uuidv4} from 'uuid'
import ListadoTareas from './ListadoTareas'

const AgregarTareas = () =>{

    const [texto, setTexto]=useState("");
    const [tareas, setTareas]=useState(() => {
        const tareasAlmacenadas = localStorage.getItem('tareasLocalStorage');
        return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : [];
    });

    useEffect(() => {
        localStorage.setItem('tareasLocalStorage', JSON.stringify(tareas));
      }, [tareas]);

    const inputChange = (e) => {
        setTexto(e.target.value)
    }

    const agregarTarea = (e) => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: texto,
            clase: "noCompletada",
        }
        setTareas([...tareas, tareaNueva]); 
        setTexto("");       
      };

    return (
        <>
            <form onSubmit={agregarTarea}>
                <input type="text"
                placeholder='Ingresa una tarea'
                value={texto}
                onChange={inputChange}/>
                <button type='submit'>Agregar tarea</button>
            </form>  
            <ul>
                <ListadoTareas tareas={tareas} setTareas={setTareas}/>
            </ul>
        </>
    )
}

export default AgregarTareas