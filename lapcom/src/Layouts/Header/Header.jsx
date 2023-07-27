import Styled from 'styled-components';

import Classes from '../../Assets/Styles/Layouts/Header/Header.module.scss'

const Header = props =>{
    
    return(
        <header className={`${Classes.header} ${props.classStyle}`}>
            {props.children}
        </header>
    )
}

export default Header;