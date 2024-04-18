// React
import { useState } from 'react';
// Antd
import { Empty, message  } from 'antd';
// Css Home
import style from './Home.module.css';
// Componentes
import Titulo from '../../components/Titulo/Titulo.jsx';
import Input from '../../components/Input/Input.jsx';
import Button from '../../components/Button/Button.jsx';
import Listar from '../../components/Listar/Listar.jsx';
import Busqueda from '../../components/Busqueda/Busqueda.jsx';

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

const tareas = [tarea, tarea2, tarea3]; // Borrar despues tareas pre creadas!!!
      
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
        if (valueNombre.trim() === '' || valueDescrip.trim() === '') {
            message.error('Por favor completa todos los campos.');
        }
        else
        {
            const newTarea = {
                key: Date.now(),
                nombre: valueNombre,
                descripcion: valueDescrip,
                estado: "No completada",
            };
            setListaTareas([...listaTareas, newTarea]);
            setValueNombre("");
            setValueDescrip("");
        }
    };

    const completarTarea = (keyBuscada) => {
        const nuevasTareas = listaTareas.map((tarea) => {
            if ((tarea.key === keyBuscada) && (tarea.estado !== "Completada")) {
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

    return (
        <div className={style.Home}>
            <div className={style.box}>
                <Titulo texto="Lista de tareas"></Titulo>
                <p> Bienvenido a tu lista de tareas! </p> 
                <p> Aqui podras crear tareas y marcarlas como completadas o eliminarlas. </p>
                <p> Este es tu progreso: </p>
                <p>{cantTareasCompletadas} tareas completadas</p>
                <p>{listaTareas.length} tareas en total</p> 
            </div>
            {/* Si esto es true renderizo lo que sigue de && */}
            {listaTareas.length === 0 && 
            <div className={style.box}>
                <Empty description={<p></p>}/>
                <p>"Ya completaste todas tus tareas, estas listo para descansar."</p>
            </div>}
            {/* 
            ANTES:            
            {listaTareas.length === 0 ? (
                <div className={style.box}>
                    <Empty description={<p></p>}/>
                    <p>Ya completaste todas tus tareas, estas listo para descansar.</p>
                </div> 
            */}
            
            <div className={style.box}>
                <Titulo texto="Busqueda"></Titulo>
                <div>
                    <Busqueda onChangeHandler={onChangeHandlerBusqueda}></Busqueda>
                    <Listar textoBusqueda={valueBusqueda} listaTareas={listaTareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea}></Listar>
                </div>
            </div>
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