import { FormularioTareas } from "./FormularioTareas";
import { ListadoTareas } from "./ListadoTareas";
import { Modal } from "./Modal";
import { ContenidoModalEditar } from "./contenidoModalEditar";
import { ManejoTareas } from "../CustomHooks/ManejoTareas";

export const TareasApp = () => {

    const { tareas, agregarTarea, toggleClass, eliminarTarea, abrirModalEditar, modalEditar, setModalEditar, editar, textoAEditar } = ManejoTareas();

    return ( 
        <>
        <div className="flexCenter">
            <FormularioTareas agregarTarea={agregarTarea}/>
            <ListadoTareas tareas={tareas} toggleClass={toggleClass} eliminarTarea={eliminarTarea} abrirModalEditar={abrirModalEditar}/>
            <Modal modalVisible={modalEditar} setModalVisible={setModalEditar} contenido={<ContenidoModalEditar editar={editar} textoAnterior={textoAEditar}/>}/>
        </div>
        </>
     );
}