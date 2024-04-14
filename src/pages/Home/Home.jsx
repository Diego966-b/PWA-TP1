import logo from './../../logo.svg';
import style from './Home.module.css';
import TextField from "@mui/material/TextField";
import Titulo from '../../components/Titulo/Titulo.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import { useState } from "react";

const tarea = {
    key: Date.now(),
    nombre: "nombre1",
    descripcion: "descripcion1",
    estado: "estado1",
};
const tarea2 = {
    key: Date.now() + 1 ,
    nombre: "nombre2",
    descripcion: "descripcion2",
    estado: "estado2",
};
const tarea3 = {
    key: Date.now() + 2,
    nombre: "nombre3",
    descripcion: "descripcion3",
    estado: "estado3",
};

const tareas = [tarea, tarea2, tarea3];

const Home = () => {
    
    let cantTareasCompletadas;
    cantTareasCompletadas = 0;
    

    // UseStates

    //const [cantTareasCompletadas, setCantTareasCompletadas] = useState(0);
    const [listaTareas, setListaTareas] = useState(tareas);
    const [valueNombre, setValueNombre] = useState("");
    const [valueDescrip, setValueDescrip] = useState("");

    // Handler

    const onChangeHandlerNombre = (event) => {
        console.log(event.target.value);
        setValueNombre(event.target.value);
    };
      
    const onChangeHandlerDescripcion = (event) => {
        console.log(event.target.value);
        setValueDescrip(event.target.value);
    };

    // Funciones

    const crearNuevaTarea = () => {
        const newTarea = {
            key: Date.now(), // Puede haber otra solucion, esta funcionando ahora
            nombre: valueNombre,
            descripcion: valueDescrip,
            estado: "No completada",
        };
        setListaTareas([...listaTareas, newTarea]);
    };

    const completarTarea = (keyBuscada) => {
        const nuevasTareas = listaTareas.map((tarea) => {
            if (tarea.key === keyBuscada) {
                tarea.estado = "Completada";
            }
            return tarea;
        });
        setListaTareas(nuevasTareas);
    };
    
    // Cuando borro y creo otra se repite la key por eso ahora uso Date.now() como key
    const eliminarTarea = (keyBuscada) => {
        const nuevasTareas = listaTareas.filter((tarea) => tarea.key !== keyBuscada);
        setListaTareas(nuevasTareas);
    };
    
    return (
        <div>
            {listaTareas.length == 0 ? (
                /* 
                    Si no hay tareas para mostrar, dar un mensaje al usuario de que ya completó todas sus
                    tareas y que está listo para descansar
                */

                <div>
                <TextField 
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"/>
                <p>Ya completaste todas tus tareas, estas listo para descansar</p>
                </div>
                ) : (
                <div>
                    <Titulo texto="Lista de tareas"></Titulo>
                    <div>
                        {/* Buscador */}
                        
                    </div>
                    <ul>
                        {listaTareas.map((tarea) => {
                            return (
                                <div className={style.caja} key={tarea.key}>
                                    <li className={style.itemLista}><h2 className={style.nomTarea}>Nombre: {tarea.nombre}</h2></li>
                                    <li className={style.itemLista}>Descripcion: {tarea.descripcion}</li>
                                    <li className={style.itemLista}>Estado: {tarea.estado}</li>
                                    <li className={style.itemLista}>key: {tarea.key} {/* Borarr */}</li>
                                    {tarea.estado == "Completada" ? (cantTareasCompletadas ++): ""}
                                    <Button text="Completada" onClick={() => completarTarea(tarea.key)}></Button>
                                    <Button text="Eliminar" onClick={() => eliminarTarea(tarea.key)}></Button>
                                </div>
                            );
                        })}
                    </ul>
                    <div>
                        {/* Debe haber un contador que muestre el número total de tareas y el número de tareas completadas. */}   
                        <p>{cantTareasCompletadas} tareas completadas</p>
                        <p>{listaTareas.length} tareas en total</p>
                    </div>
                </div>  
            )}
                <Titulo texto="Crear nueva tarea"></Titulo>
                <p>Nombre:</p>
                <Input value={valueNombre} onChangeHandler={onChangeHandlerNombre}/>
                <p>Descripcion:</p>
                <Input value={valueDescrip} onChangeHandler={onChangeHandlerDescripcion}/>
                <Button text="Enviar" onClick={crearNuevaTarea}></Button> 
        </div>
    );
}
export default Home;