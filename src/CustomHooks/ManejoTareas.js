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
            id: tareas.length + 1,
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
                    const agregarTarea = {
                        id: uuidv4(),
                        texto: tarea,
                        clase: false,
                    }
                    lista.tarea.push(agregarTarea)
                    setTareas(listas)
                    console.log(listas)
                } else {
                    setTareas([...tareas, tareaNueva]);
                }
            })
        }
    };

    const [nombreListaMostrar, setNombreListaMostrar] = useState("");

    const nombreLista = (e) => {
        setNombreListaMostrar(e)
    }

    const [modalEditarTitulo, setModalEditarTitulo] = useState(false);
    const [tituloAnterior, setTituloAnterior] = useState("");

    const abrirModalEditarTitulo = (titulo) => {
        setTituloAnterior(titulo);
        setModalEditarTitulo(true);
    }

    const editarTitulo = (tituloNuevo) => {
        const tareasAlmacenadas = [...tareas]
        tareasAlmacenadas.map((tarea) => {
            if (tituloAnterior == tarea.titulo) {
                tarea.titulo = tituloNuevo
            }
        })
        setTareas(tareasAlmacenadas);
        setModalEditarTitulo(false);
    }

    const eliminarTitulo = (tituloEliminar) => {
        const confirmDelete = window.confirm("¿Seguro que desea eliminar lista?");

        if (confirmDelete) {
            const eliminarLista = tareas.filter(tarea => tarea.titulo !== tituloEliminar);
            setTareas(eliminarLista);
        }
    }

    const toggleClass = (titulo, id) => {
        const cambiarClase = tareas.map((lista) => {
            lista.titulo == titulo && (
                lista.tarea.map((tarea) => {
                    if (id === tarea.id) {
                        tarea.clase = !tarea.clase;
                    }
                    return tarea;
                })
            )
            return lista;
        })
        setTareas(cambiarClase);
    };

    const eliminarTarea = (titulo, id) => {
        console.log(titulo, id)
        const confirmDelete = window.confirm("¿Seguro que desea borrar?");

        if (confirmDelete) {
            const tareasBorradas = tareas.map((lista) => {
                if (lista.titulo === titulo) {
                    const nuevasTareas = lista.tarea.filter(tarea => tarea.id !== id);
                    return {...lista, tarea: nuevasTareas };
                }
                return lista;
            })

            console.log(tareasBorradas)
                // const tareasBorradas = tareas.filter(tarea => tarea.tarea.id !== id);
            setTareas(tareasBorradas);
        }
    }

    const [modalEditar, setModalEditar] = useState(false);
    const [idEditar, setIdEditar] = useState("");
    const [textoAEditar, setTextoAEditar] = useState("");
    const [titulo, setTitulo] = useState("");

    const abrirModalEditar = (titulo, id, txt) => {
        setTitulo(titulo);
        setIdEditar(id);
        setTextoAEditar(txt);
        setModalEditar(true);
    }

    const editar = (txt) => {
        const tareasEditadas = [...tareas];
        tareasEditadas.map((lista) => {
            titulo == lista.titulo && (
                lista.tarea.map((tarea) => {
                    if (idEditar === tarea.id) {
                        tarea.texto = txt;
                    }
                })
            )
        })
        setTareas(tareasEditadas);
        setModalEditar(false);
    }

    const [modalAgregarTareaALista, setModalAgregarTareaALista] = useState(false);
    const [tituloTareaALista, setTituloTareaALista] = useState("");

    const abrirModalEditarLista = (titulo) => {
        setTituloTareaALista(titulo)
        setModalAgregarTareaALista(true)
    }

    const agregarTareaALista = (tareaNuevaALista) => {
        const agregarTarea = [...tareas];
        agregarTarea.forEach((lista) => {
            if (tituloTareaALista === lista.titulo) {
                lista.tarea.push({
                    id: uuidv4(),
                    texto: tareaNuevaALista,
                    clase: false,
                });
            }
        });
        setTareas(agregarTarea);
        setModalAgregarTareaALista(false);
    };

    return ({
        tareas,
        agregarTarea,
        nombreLista,
        editarTitulo,
        abrirModalEditarTitulo,
        modalEditarTitulo,
        setModalEditarTitulo,
        tituloAnterior,
        eliminarTitulo,
        nombreListaMostrar,
        toggleClass,
        eliminarTarea,
        abrirModalEditar,
        modalEditar,
        setModalEditar,
        editar,
        textoAEditar,
        abrirModalEditarLista,
        agregarTareaALista,
        modalAgregarTareaALista,
        setModalAgregarTareaALista,
        tituloTareaALista,
        setTareas
    });
}