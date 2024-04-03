import PropTypes from 'prop-types'
import '../estilos/formulario.css'
import '../estilos/index.css'
import Button from '@mui/material/Button';
import Tarea from './Tarea';

import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";


export const ListadoTareas = ({tareas, setTareas, nombreListaMostrar, toggleClass, eliminarTarea, abrirModalEditar, abrirModalEditarLista}) =>{

   
    
    const handleDragEnd = (event) => {
        const { active, over } = event;

        const parteTareas = tareas.find(lista => lista.titulo === nombreListaMostrar)?.tarea || [];

        const oldIndex = parteTareas.findIndex((tarea) => tarea.id === active.id);
        const newIndex = parteTareas.findIndex((tarea) => tarea.id === over.id);

        const nuevasTareas= arrayMove(parteTareas, oldIndex, newIndex);

        setTareas(tareas.map((lista)=>{
            if (lista.titulo == nombreListaMostrar) {
                return { ...lista, tarea: nuevasTareas };
            }
            return lista;
        }))
      };


    return (
        <div className="lista">
            <div className="flexCenter">
                <h2 style={{width: "fit-content"}}>{nombreListaMostrar}</h2>
                {nombreListaMostrar && 
                <div style={{width: "fit-content"}}>
                    <Button variant="outlined" onClick={() => {abrirModalEditarLista(nombreListaMostrar)}}>Agregar tarea</Button >
                </div>}
            </div>
           
            {tareas.map((lista, index) => (
                lista.titulo === nombreListaMostrar && (
                    <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    key={index}>
                        <SortableContext
                            items={lista.tarea}
                            strategy={verticalListSortingStrategy}
                        >
                            {lista.tarea.map((tarea) => (
                                <Tarea key={tarea.id} user={tarea} toggleClass={toggleClass} eliminarTarea={eliminarTarea} abrirModalEditar={abrirModalEditar} lista={lista}/>
                            ))}
                        </SortableContext>
                    </DndContext>
                )
            ))}
        </div>
    )
}

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    nombreListaMostrar: PropTypes.string,
    toggleClass: PropTypes.func.isRequired,
    eliminarTarea: PropTypes.func.isRequired,
    abrirModalEditar: PropTypes.func.isRequired,
    abrirModalEditarLista: PropTypes.func.isRequired,
    setTareas: PropTypes.func.isRequired,
};