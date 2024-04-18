//Pagina de bienvenida.
import Titulo from '../../components/Titulo/Titulo.jsx';
import style from './Index.module.css';
import logo from '../../assets/logo.png';
import { Button } from 'antd';

const Index = () => {


    return(
        <div className={style.Index}>
            <header className={style.cabeza}>
                <img src={logo} alt="imagen de portada" className={style.Portada}/>
                <Titulo texto="Programación web avanzada"></Titulo>
            </header>
            <Titulo texto="Bienvenidos..."></Titulo>
            <p>
                Integrantes: <br/>
                Diego Benjamin y Fausto Biló.
            </p>
            <Button type="primary">TP1</Button>
        </div>
    );
}

export default Index;