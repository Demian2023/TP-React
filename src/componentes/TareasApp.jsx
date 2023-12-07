import FormularioTareas from "./FormularioTareas";
import ListadoTareas from "./ListadoTareas";
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid'


const TareasApp = () => {

    const [tareas, setTareas]=useState(() => {
        const tareasAlmacenadas = localStorage.getItem('tareasLocalStorage');
        return tareasAlmacenadas ? JSON.parse(tareasAlmacenadas) : [];
    });

    useEffect(() => {
        localStorage.setItem('tareasLocalStorage', JSON.stringify(tareas));
      }, [tareas]);

    const agregarTarea = (tarea) => {

    const tareaNueva = {
        id: uuidv4(),
        texto: tarea,
        clase: false,
    }
    setTareas([...tareas, tareaNueva]); 
    };

    const toggleClass = (id) => {
        const cambiarClase = tareas.map(tarea =>{
            if (id === tarea.id) {
                tarea.clase ? tarea.clase = "noCompletada" : tarea.clase = "completada"
            }
            return tarea;
            });
            setTareas(cambiarClase);
    };

    const eliminarTarea = (id) => {
        const tareasBorradas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasBorradas);
    }


    return ( 
        <>
        <div className="flexCenter">
            <FormularioTareas agregarTarea={agregarTarea}/>
            <ListadoTareas tareas={tareas} toggleClass={toggleClass} eliminarTarea={eliminarTarea}/>
        </div>
           
        </>
     );
}
 
export default TareasApp;