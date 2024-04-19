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
import Grafico from '../../components/Grafico/Grafico.jsx';
/*
const tarea = {
    id: Date.now(),
    nombre: "Lavar los",
    descripcion: "descripcion1",
    completada: false,
};
const tarea2 = {
    id: Date.now() + 1,
    nombre: "nombre2",
    descripcion: "descripcion2",
    completada: false,
};
const tarea3 = {
    id: Date.now() + 2,
    nombre: "nombre3",
    descripcion: "descripcion3",
    completada: false,
};

const tareas = [tarea, tarea2, tarea3];
*/

const Home = () => {
  
    // UseStates

    const [cantTareasCompletadas, setCantTareasCompletadas] = useState(0);
    const [listaTareas, setListaTareas] = useState([]);
    const [valueBusqueda, setValueBusqueda] = useState("");
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
                id: Date.now(),
                nombre: valueNombre,
                descripcion: valueDescrip,
                completada: false,
            };
            setListaTareas([...listaTareas, newTarea]);
            setValueNombre("");
            setValueDescrip("");
        }
    };

    const completarTarea = (idBuscado) => {
        const nuevasTareas = listaTareas.map((tarea) => {
            if (tarea.id === idBuscado)
            {
                if (!tarea.completada)
                {
                    tarea.completada = true;
                    setCantTareasCompletadas(prev=>prev+1);
                }
                else
                {
                    tarea.completada = false;
                    setCantTareasCompletadas(prev=>prev-1);
                }
            }
            return tarea;
        });
        setListaTareas(nuevasTareas);
    };
    
    const eliminarTarea = (idBuscado) => {
        const nuevasTareas = listaTareas.filter((tarea) => {
            if (tarea.id !== idBuscado) {
                return tarea;
            }
            if (tarea.completada)
            {
                setCantTareasCompletadas(prev=>prev-1);
            }
        })
        setListaTareas(nuevasTareas);
    };

    return (
        <div className={style.Home}>
            <div className={style.box}>
                <Titulo texto="Lista de tareas"></Titulo>
                <p> Bienvenido a tu lista de tareas! </p> 
                <p> Aqui podras crear tareas y marcarlas como completadas o eliminarlas. </p>
                <p> Este es tu progreso: </p>
                <Grafico cantTareasCompletadas={cantTareasCompletadas} totalTareas={listaTareas.length}/>
                {/* 
                <p>Cantidad de tareas completadas: {cantTareasCompletadas}</p>
                <p>Total de tareas: {listaTareas.length}</p>
                */} 
            </div>
            {/* Si esto es true renderizo lo que sigue de && */}
            {listaTareas.length === 0 && 
                <div className={style.box}>
                    <Empty description={<p></p>}/>
                    <p>"Ya completaste todas tus tareas, estas listo para descansar."</p>
                </div>
            }
            <div className={style.box}>
                <Titulo texto="Busqueda"></Titulo>
                <Busqueda onChangeHandler={onChangeHandlerBusqueda}></Busqueda>
                <Listar textoBusqueda={valueBusqueda} listaTareas={listaTareas} completarTarea={completarTarea} eliminarTarea={eliminarTarea}></Listar>
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