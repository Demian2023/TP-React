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

    const agregarTarea = (titulo, tarea) => {
        const listas = [...tareas]
        const tareaNueva = {
            titulo: titulo,
            tarea: [{
                id: uuidv4(),
                texto: tarea,
                clase: false,
            }]
        };
        if (listas.length < 1) {
            setTareas([...tareas, tareaNueva]);
        } else {
            listas.map((lista) => {
                if (lista.titulo == titulo) {
                    console.log("lista con mismo titulo")
                    const agregarTarea = {
                        id: uuidv4(),
                        texto: tarea,
                        clase: false,
                    }
                    lista.tarea.push(agregarTarea)
                    setTareas(listas)
                    console.log(listas)
                } else {
                    console.log("lista primera subida")
                    setTareas([...tareas, tareaNueva]);
                }
            })
        }
    };

    const [nombreListaMostrar, setNombreListaMostrar] = useState("");

    const nombreLista = (e) => {
        setNombreListaMostrar(e)
    }

    const toggleClass = (id) => {
        const cambiarClase = tareas.map(tarea => {
            if (id === tarea.tarea.id) {
                tarea.tarea.clase ? tarea.tarea.clase = false : tarea.tarea.clase = true
            }
            return tarea;
        });
        setTareas(cambiarClase);
    };

    const eliminarTarea = (id) => {
        const confirmDelete = window.confirm("¿Seguro que desea borrar?");

        if (confirmDelete) {
            const tareasBorradas = tareas.filter(tarea => tarea.tarea.id !== id);
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
            if (idEditar === tarea.tarea.id) {
                tarea.tarea.texto = txt;
            }
        })
        setTareas(tareasEditadas);
        setModalEditar(false);
    }
    return ({ tareas, agregarTarea, nombreLista, nombreListaMostrar, toggleClass, eliminarTarea, abrirModalEditar, modalEditar, setModalEditar, editar, textoAEditar });
}