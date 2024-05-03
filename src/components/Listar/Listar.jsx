import Tarea from "../Tarea/Tarea.jsx";

//Lo mejor es romper el props aca y utilizar las partes donde sea necesario
// Listar = ({eliminarTarea, completarTarea})

const Listar = ({eliminarTarea, completarTarea, listaTareas, textoBusqueda}) => {
  const resultado = filtrar({listaTareas, textoBusqueda});
  return (
    <div>
      {resultado.map((tareaFiltrada) => (
        <Tarea
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
          tarea={tareaFiltrada}
          key={tareaFiltrada.id}
        />
      ))}
    </div>
  );
};

/**
 * Esta funcion filtra las tareas segun el input de la busqueda.
 */
function filtrar({listaTareas, textoBusqueda}) {
  const listaTareasFiltrada = listaTareas.filter((el) => {
    if (textoBusqueda === "") {
      return el;
    } else {
      return el.nombre.toLowerCase().includes(textoBusqueda);
    }
  });
  return listaTareasFiltrada;
}

export default Listar;