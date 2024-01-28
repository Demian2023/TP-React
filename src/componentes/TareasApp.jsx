import { FormularioTareas } from "./FormularioTareas";
import { ListadoTareas } from "./ListadoTareas";
import { ManejoTareas } from "../CustomHooks/ManejoTareas";

export const TareasApp = () => {

    const { tareas, agregarTarea, toggleClass, eliminarTarea, editarTarea } = ManejoTareas();

    return ( 
        <>
        <div className="flexCenter">
            <FormularioTareas agregarTarea={agregarTarea}/>
            <ListadoTareas tareas={tareas} toggleClass={toggleClass} eliminarTarea={eliminarTarea} editarTarea={editarTarea}/>
        </div>
        </>
     );
}