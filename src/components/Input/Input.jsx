/*import style from "./Input.module.css";
import { Input } from 'antd';

const Input = ({ value, onChangeHandler }) => {
    return <input type="text" value={value} onChange={onChangeHandler} />;
};
  
export default Input;
  */

import React from 'react';
import styles from './Input.module.css'; // Cambia 'style' a 'styles' para evitar conflictos de nombres
import { Input as AntInput } from 'antd'; // Renombra 'Input' a 'AntInput' para evitar conflictos de nombres

const Input = ({ value, onChangeHandler }) => {
    return (
        <AntInput
            className={styles.input} // Utiliza la clase del módulo CSS para estilar el Input de Ant Design
            type="text"
            value={value}
            onChange={onChangeHandler}
        />
    );
};

export default Input;
