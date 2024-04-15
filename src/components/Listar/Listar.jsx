import { Card } from 'antd';
import Button from '../../components/Button/Button.jsx';
import style from './Listar.module.css';

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
                    <Button text="Completada" onClick={() => props.completarTarea(tarea.key)} />
                    <Button text="Eliminar" onClick={() => props.eliminarTarea(tarea.key)} />
                </Card>
            ))}
        </div>
    );
}

export default Listar;

    /*
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
    */