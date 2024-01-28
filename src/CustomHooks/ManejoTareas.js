import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'

export const ManejoTareas = () => {

    const [tareas, setTareas] = useState(() => {
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
        const cambiarClase = tareas.map(tarea => {
            if (id === tarea.id) {
                tarea.clase ? tarea.clase = false : tarea.clase = true
            }
            return tarea;
        });
        setTareas(cambiarClase);
    };

    const eliminarTarea = (id) => {
        const tareasBorradas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasBorradas);
    }

    const editarTarea = (id) => {
        const tareasEditadas = [...tareas];

        // agregar modal para cambiar el texto

        tareasEditadas.map((tarea) => {
            if (id === tarea.id) {
                console.log("tarea encontrada id: " + id)
            }
        })
    }

    return ({ tareas, agregarTarea, toggleClass, eliminarTarea, editarTarea });
}