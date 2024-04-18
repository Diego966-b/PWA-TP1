import TextField from '@mui/material/TextField';
import style from './Busqueda.module.css';

const Busqueda = ({onChangeHandler}) => {
    return (
        <TextField className={style.busqueda}
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Buscar"
            onChange={onChangeHandler}
        />
    );
}

export default Busqueda;