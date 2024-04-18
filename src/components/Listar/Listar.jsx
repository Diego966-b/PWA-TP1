import Tarea from '../Tarea/Tarea.jsx';
import style from './Listar.module.css';

const Listar = (props) => {
    const listaTareasFiltrada = props.listaTareas.filter((el) => {
        if (props.textoBusqueda === '') {
            return el;
        }
        else {
            return el.nombre.toLowerCase().includes(props.textoBusqueda)
        }
    })
    return (
        <div>
            {listaTareasFiltrada.map((tareaFiltrada) => (
                <Tarea eliminarTarea={props.eliminarTarea} completarTarea={props.completarTarea} tarea={tareaFiltrada} key={tareaFiltrada.key}></Tarea>
            ))}
        </div>
    );
}

export default Listar;