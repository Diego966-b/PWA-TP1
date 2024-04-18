import { Input as AntInput } from 'antd'; // Renombra 'Input' a 'AntInput' para evitar conflictos de nombres
import style from './Input.module.css';

const Input = ({ value, onChangeHandler }) => {
    return (
        <AntInput
            className={style.input} 
            type="text"
            value={value}
            onChange={onChangeHandler}
        />
    );
};

export default Input;