import { FormularioTareas } from "./FormularioTareas";
import { ListadoTareas } from "./ListadoTareas";
import { Modal } from "./Modal";
import { ContenidoModalEditar } from "./contenidoModalEditar";
import { ManejoTareas } from "../CustomHooks/ManejoTareas";
import { ListadoListas } from "./ListadoListas";

export const TareasApp = () => {

    const { tareas, agregarTarea, nombreLista, nombreListaMostrar, toggleClass, eliminarTarea, abrirModalEditar, modalEditar, setModalEditar, editar, textoAEditar } = ManejoTareas();

    return ( 
        <>
        <div className="flexCenter">
            <FormularioTareas agregarTarea={agregarTarea}/>
            <ListadoListas listas={tareas} nombreLista={nombreLista}/>
            <ListadoTareas tareas={tareas} nombreListaMostrar={nombreListaMostrar} toggleClass={toggleClass} eliminarTarea={eliminarTarea} abrirModalEditar={abrirModalEditar}/>
            <Modal modalVisible={modalEditar} setModalVisible={setModalEditar} contenido={<ContenidoModalEditar editar={editar} textoAnterior={textoAEditar}/>}/>
        </div>
        </>
     );
}