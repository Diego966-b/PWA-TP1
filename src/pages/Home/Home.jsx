import style from './Home.module.css';
import Titulo from '../../components/Titulo/Titulo.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import TextField from '@mui/material/TextField';
import { Card } from 'antd';
import { Empty } from 'antd';
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
  
    // UseStates

    const [cantTareasCompletadas, setCantTareasCompletadas] = useState(0);
    const [valueBusqueda, setValueBusqueda] = useState("");
    const [listaTareas, setListaTareas] = useState(tareas);
    const [valueNombre, setValueNombre] = useState("");
    const [valueDescrip, setValueDescrip] = useState("");

    // Handler

    const onChangeHandlerNombre = (event) => {
        setValueNombre(event.target.value);
    };
      
    const onChangeHandlerDescripcion = (event) => {
        setValueDescrip(event.target.value);
    };

    const onChangeHandlerBusqueda = (texto) => {
        var textoMinuscula = texto.target.value.toLowerCase();
        setValueBusqueda(textoMinuscula);
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
            if ((tarea.key === keyBuscada) && (tarea.estado != "Completada")) {
                tarea.estado = "Completada";
                setCantTareasCompletadas(prev=>prev+1);
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
        const listaTareasFiltrada = props.data.filter((el) => {
            if (props.input === '') {
                return el;
            }
            else {
                return el.nombre.toLowerCase().includes(props.input)
            }
        })
        return (
            <div>
                {listaTareasFiltrada.map((tarea) => (
                    <Card
                        title={tarea.nombre} // Usa el nombre de la tarea como título de la tarjeta
                        bordered={false}
                        style={{
                            marginBottom: 20, // Espacio entre tarjetas
                            marginTop: 20,
                            fontSize: 20
                        }}
                        key={tarea.key} 
                        >
                        <p>Descripción: {tarea.descripcion}</p>
                        <p>Estado: {tarea.estado}</p>
                        <Button text="Completada" onClick={() => completarTarea(tarea.key)}></Button>
                        <Button text="Eliminar"  onClick={() => eliminarTarea(tarea.key)}></Button>
                    </Card>
                ))}
            </div>
        )
    }
    return (
        <div className={style.Home}>
            <div className={style.box}>
                <Titulo texto="Lista de tareas"></Titulo>
                <p>
                    Bienvenido a tu lista de tareas! <br/>
                    Aqui podras crear tareas y marcarlas como completadas o eliminarlas. <br/> <br/>
                    Este es tu progreso:
                </p>
                <p>{cantTareasCompletadas} tareas completadas</p>
                <p>{listaTareas.length} tareas en total</p> 
            </div>
            {listaTareas.length === 0 ? (
                /*
                    Si no hay tareas para mostrar, dar un mensaje al usuario de que ya completó todas sus
                    tareas y que está listo para descansar
                */
                <div className={style.box}>
                    <Empty />
                    <p>Ya completaste todas tus tareas, estas listo para descansar.</p>
                </div>
            ) : (
                <div className={style.box}>
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
                    </div>
                </div>
            )}
            <div className={style.box}>
                <Titulo texto="Crear nueva tarea"></Titulo>
                <div className={style.crear}>
                    <p>Nombre:</p>
                    <Input value={valueNombre} onChangeHandler={onChangeHandlerNombre}/>
                    <p>Descripcion:</p>
                    <Input value={valueDescrip} onChangeHandler={onChangeHandlerDescripcion}/>
                    <Button text="Enviar" onClick={crearNuevaTarea}></Button>
                </div>
            </div>
        </div>
    );
}
export default Home;