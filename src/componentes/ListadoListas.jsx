import PropTypes from 'prop-types'
import Lista from './Lista';

import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable";

export const ListadoListas = ({tareas, setTareas, nombreLista, editar, eliminarTitulo}) => {
   
    const handleDragEnd = (event) => {
        const { active, over } = event;
        
        if (active.id !== over.id) {
          setTareas((titulos) => {
            const oldIndex = titulos.findIndex((titulo) => titulo.id === active.id);
            const newIndex = titulos.findIndex((titulo) => titulo.id === over.id);

            return arrayMove(titulos, oldIndex, newIndex);
          });
        }
      };

return (
    <div className="formulario">
        <div className="flex" style={{width: "100%"}}>
            <div style={{width: "100%"}}>
                <DndContext
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <h1>Listado Listas:</h1>
                    <ul>
                        <SortableContext
                            items={tareas}
                            strategy={verticalListSortingStrategy}
                        >
                            {tareas.map((user) => (
                                <Lista key={user.id} user={user} nombreLista={nombreLista} editar={editar} eliminarTitulo={eliminarTitulo} />
                            ))}
                        </SortableContext>
                    </ul>  
                </DndContext>
            </div>
        </div>
    </div>
);
}

ListadoListas.propTypes = {
    tareas: PropTypes.array.isRequired,
    nombreLista: PropTypes.func.isRequired,
    eliminarTitulo: PropTypes.func.isRequired,
    editar: PropTypes.func.isRequired,
    setTareas: PropTypes.func.isRequired,
};