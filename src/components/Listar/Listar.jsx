import Tarea from '../Tarea/Tarea.jsx';
// import style from './Listar.module.css';

const Listar = (props) => {
    const resultado = filtrar(props);
    return (
        <div>
            {resultado.map((tareaFiltrada) => (
                <Tarea eliminarTarea={props.eliminarTarea} completarTarea={props.completarTarea} tarea={tareaFiltrada} key={tareaFiltrada.id}></Tarea>
            ))}
        </div>
    );
}

/**
 * Esta funcion filtra las tareas segun el input de la busqueda.
 */
function filtrar (props) {
    const listaTareasFiltrada = props.listaTareas.filter((el) => {
        if (props.textoBusqueda === '') {
            return el;
        }
        else {
            return el.nombre.toLowerCase().includes(props.textoBusqueda)
        }
    })
    return listaTareasFiltrada;
}

export default Listar;