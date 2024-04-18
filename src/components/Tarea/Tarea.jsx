import style from './Tarea.module.css';
import Button from '../Button/Button.jsx';
import { Card } from 'antd';

const Tarea = (props) => {
    let tarea = props.tarea;
    return (
        <Card
            title={tarea.nombre}
            bordered={false}
            className={style.tareaCard}
            key={tarea.key}
        >
        <p>Descripción: {tarea.descripcion}</p>
        <p>Estado: {tarea.estado}</p>
        <Button text="Completada" onClick={() => props.completarTarea(tarea.key)} />
        <Button text="Eliminar" onClick={() => props.eliminarTarea(tarea.key)} />
    </Card>
  );
};

export default Tarea;