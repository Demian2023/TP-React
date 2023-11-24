import './formulario.css'
import AgregarTareas from './AgregarTareas'


const FormularioTareas = () => {

    return (
        <>
            <div className="formulario">
                <div className="flex">
                    <div>
                        <h1>Lista de tareas</h1>
                        <AgregarTareas />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default FormularioTareas