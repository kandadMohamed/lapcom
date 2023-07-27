import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Classes from '../../Assets/Styles/UI/Button-main.module.scss';

const ButtonMain = props =>{
    const { 
        type, 
        classStyle, 
        clickHandler, 
        children, 
        variante,
        disabled
    } = props;
    
    const classesButton = `${classStyle} ${Classes['btn-variante']} ${Classes[variante]}`;
    
    return(
        <button 
        type={type}
        className={classesButton}
        onClick={clickHandler}
        // disabled={disabled?'disabled':''}
        >
            {children}
        </button>
    )
}

export const ButtonLink = props =>{
    const { to, classStyle, children, variante, isActive} = props;
    
    const classesButton = `${Classes['btn-variante']} ${Classes[variante]} ${classStyle}`;

    return(
        <Link 
            to={to}
            className={classesButton}
        >
            {children}
        </Link>
    )
}

export default ButtonMain;