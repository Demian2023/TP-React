import FormularioTareas from "./FormularioTareas";
import ListadoTareas from "./ListadoTareas";
import ManejoTareas from "../CustomHooks/ManejoTareas";


const TareasApp = () => {

    const { tareas, agregarTarea, toggleClass, eliminarTarea } = ManejoTareas();

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