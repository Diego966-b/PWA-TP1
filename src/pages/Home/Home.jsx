import Titulo from '../../components/Titulo/Titulo.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import { useState } from "react";

const tarea = {
    key: 0,
    nombre: "nombre1",
    descripcion: "descripcion1",
    estado: "estado1"
  };
  
  const tarea2 = {
    key: 1,
    nombre: "nombre2",
    descripcion: "descripcion2",
    estado: "estado2"
  };
  
  const tarea3 = {
    key: 2,
    nombre: "nombre3",
    descripcion: "descripcion3",
    estado: "estado3"
  };
  
  const tareas = [tarea, tarea2, tarea3];

const Home = () => {
    const [listaTareasState, setListaTareasState] = useState(tareas);
    const [valueNombreState, setValueNombreState] = useState("");
    const [valueDescripcionState, setValueDescripcionState] = useState("");

    const onChangeHandlerNombre = (event) => {
        console.log(event.target.value);
        setValueNombreState(event.target.value);
      };
      
      const onChangeHandlerDescripcion = (event) => {
        console.log(event.target.value);
        setValueDescripcionState(event.target.value);
      };

      const crearNuevaTarea = () => {
        const newTarea = {
          key: listaTareasState.length,
          nombre: valueNombreState,
          descripcion: valueDescripcionState,
          estado: "No completada",
        };
        setListaTareasState([...listaTareasState, newTarea]);
      };

      const completarTarea = (keyBuscada) => {
        const nuevasTareas = listaTareasState.map((tarea) => {
            if (tarea.key === keyBuscada) {
                tarea.estado = "Completada";
            }
            return tarea;
        });
        setListaTareasState(nuevasTareas);
    };

    /*
    const eliminarTarea = (keyBuscada) => {
        let lista;
        let nuevalista;
        lista = listaTareasState;
        console.log(lista[keyBuscada]);
        nuevalista = lista.filter((elemento, index) => index !== keyBuscada);
        console.log(nuevalista);
        setListaTareasState(nuevalista);
    };
      */

    const eliminarTarea = (keyBuscada) => {
        const nuevaLista = listaTareasState.filter(tarea => tarea.key !== keyBuscada);
        setListaTareasState(nuevaLista);
    };


    return (
        <div>
            {listaTareasState.length == 0 ? (
                <p>Terminaste tus tareas!</p>
            ) : (
                <div>
                    <p>No terminaste tus tareas</p>
                    <Titulo texto="Lista de tareas"></Titulo>
                    {listaTareasState.map((tarea) => {
                        return (
                        <div key={tarea.key}>
                            <p>
                                Nombre: {tarea.nombre}
                                Descripcion: {tarea.descripcion}
                                Estado: {tarea.estado} 
                                key: {tarea.key}
                                <Button text="Completada" onClick={() => completarTarea(tarea.key)}></Button>
                                <Button text="Eliminar" onClick={() => eliminarTarea(tarea.key)}></Button>
                            </p>
                        </div>
                        );
                    })}
                </div>  
            )}
                <Titulo texto="Crear nueva tarea"></Titulo>
                <p>Nombre:</p>
                <Input value={valueNombreState} onChangeHandler={onChangeHandlerNombre}/>
                <p>Descripcion:</p>
                <Input value={valueDescripcionState} onChangeHandler={onChangeHandlerDescripcion}/>
                <Button text="Enviar" onClick={crearNuevaTarea}></Button> 
        </div>
    );
}
export default Home;
