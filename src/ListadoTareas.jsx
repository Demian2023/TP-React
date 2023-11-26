import PropTypes from 'prop-types'
import './formulario.css'



const ListadoTareas = (props) =>{

    const toggleClass = (i) => {
        const cambiarClase = props.tareas.map(tarea =>{
            if (i === tarea.id) {
                tarea.clase == "completada" ? tarea.clase = "noCompletada" : tarea.clase = "completada"
            }
            return tarea;
            });
            props.setTareas(cambiarClase);
            console.log(props.tareas)
    };

    const eliminarTarea = (id) => {
        const tareasBorradas = props.tareas.filter(tarea => tarea.id !== id);
        props.setTareas(tareasBorradas);
    }

    return (
        <>
            {props.tareas.map((tarea) => (
                <div key={tarea.id} className='flex'>
                    <div>
                        <li id={tarea.id} className={tarea.clase}>{tarea.texto}</li>
                    </div>
                    <div>
                        <button onClick={()=>{toggleClass(tarea.id)}} >Completada</button>
                        <button onClick={()=>{eliminarTarea(tarea.id)}} >Eliminar</button>
                    </div>
                </div>
            ))}
        </>
    )
}

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    setTareas: PropTypes.func.isRequired,
};

export default ListadoTareas