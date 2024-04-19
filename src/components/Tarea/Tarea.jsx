import style from './Tarea.module.css';
import Button from '../Button/Button.jsx';
import { Card } from 'antd';

const Tarea = (props) => {
    let tarea = props.tarea;
    let completada = tarea.completada ? "Completada" : "No completada";
    return (
        <Card
            title={tarea.nombre}
            bordered={false}
            className={style.tareaCard}
            id={tarea.id}
        >
        <p>Descripción: {tarea.descripcion}</p>
        <p>Estado: {completada}</p>
        <Button text="Completada" onClick={() => props.completarTarea(tarea.id)} />
        <Button text="Eliminar" onClick={() => props.eliminarTarea(tarea.id)} />
    </Card>
  );
};

export default Tarea;