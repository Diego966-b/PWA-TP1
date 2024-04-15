import logo from './../../logo.svg';
import style from './Home.module.css';
import Titulo from '../../components/Titulo/Titulo.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

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
    const [valueBusqueda, setValueBusqueda] = useState("");
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

    const onChangeHandlerBusqueda = (texto) => {
        var textoMinuscula = texto.target.value.toLowerCase();
        setValueBusqueda(textoMinuscula);
        console.log(texto.target.value)
    }

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
    
    const eliminarTarea = (keyBuscada) => {
        const nuevasTareas = listaTareas.filter((tarea) => tarea.key !== keyBuscada);
        setListaTareas(nuevasTareas);
    };


    function Listar (props)  {
        console.log("HOME");
        //create a new array by filtering the original array
        //console.log(props.input);
        const listaTareasFiltrada = props.data.filter((el) => {
            //if no input the return the original
            //console.log(el);
            if (props.input === '') {
                console.log(el);
                return el;
            }
            //return the item which contains the user input
            else {
                return el.nombre.toLowerCase().includes(props.input)
            }
        })
        return (
            <ul>
                {listaTareasFiltrada.map((tarea) => (
                    <div className={style.caja} key={tarea.key}>
                        <li className={style.itemLista}><h2 className={style.nomTarea}>Nombre: {tarea.nombre}</h2></li>
                        <li className={style.itemLista}>Descripcion: {tarea.descripcion}</li>
                        <li className={style.itemLista}>Estado: {tarea.estado}</li>
                        <li className={style.itemLista}>key: {tarea.key}</li> 
                        {tarea.estado == "Completada" ? (cantTareasCompletadas ++): ""}
                        <Button text="Completada" onClick={() => completarTarea(tarea.key)}></Button>
                        <Button text="Eliminar" onClick={() => eliminarTarea(tarea.key)}></Button>
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <div>
            {listaTareas.length == 0 ? (
                /* 
                    Si no hay tareas para mostrar, dar un mensaje al usuario de que ya completó todas sus
                    tareas y que está listo para descansar
                */
                <div>
                    <p>Ya completaste todas tus tareas, estas listo para descansar</p>
                </div>
                ) : (
                <div>
                    <Titulo texto="Lista de tareas"></Titulo>
                    <Titulo texto="Busqueda"></Titulo>
                    <div>
                        <TextField className={style.busqueda}
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            label="Buscar"
                            onChange={onChangeHandlerBusqueda} 
                        />
                        <Listar input={valueBusqueda} data={listaTareas}></Listar>
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