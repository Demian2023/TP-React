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
        const confirmDelete = window.confirm("¿Seguro que desea borrar?");

        if (confirmDelete) {
            const tareasBorradas = tareas.filter(tarea => tarea.id !== id);
            setTareas(tareasBorradas);
        }
    }

    const [modalEditar, setModalEditar] = useState(false);
    const [idEditar, setIdEditar] = useState("");
    const [textoAEditar, setTextoAEditar] = useState("");

    const abrirModalEditar = (id, txt) => {
        setIdEditar(id);
        setTextoAEditar(txt);
        setModalEditar(true);
    }

    const editar = (txt) => {
        const tareasEditadas = [...tareas];
        tareasEditadas.map((tarea) => {
            if (idEditar === tarea.id) {
                tarea.texto = txt;
            }
        })
        setTareas(tareasEditadas);
        setModalEditar(false);

    }



    return ({ tareas, agregarTarea, toggleClass, eliminarTarea, abrirModalEditar, modalEditar, setModalEditar, editar, textoAEditar });
}