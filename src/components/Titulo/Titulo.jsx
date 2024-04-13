import style from "./Titulo.module.css";

const Titulo = ({texto}) => {
    return <h1 className={style.titulo}>{texto}</h1>;
  };
  export default Titulo;
