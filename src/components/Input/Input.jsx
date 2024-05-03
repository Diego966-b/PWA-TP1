import { Input as AntInput } from 'antd'; 
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