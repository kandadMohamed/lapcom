import { Row, Container } from'react-bootstrap';
import Styled from 'styled-components'

import Classes from '../../Assets/Styles/Layouts/Navbar/Navbar-action.module.scss';
import CartShop from '../../Components/Cart/Cart-items';
import User from '../../Components/Account/user';

const RowBot = Styled(Row)`
    justify-content: space-between;
    align-items: center;
`

const NavBarActions = props =>{
    const { clickHandler, windowWidth, isNavShow, scrollTop, pathName } = props;


    const classesButtonToggle  = `${Classes.buttonToggle} ${isNavShow? Classes['show-nav'] : ''}`
    // const classesLineBtnToggle = `${Classes.line} ${ scrollTop>100 ? Classes['btn-black'] : ''}`;
    const classesLineBtnToggle = `${Classes.line}`;
    
    return(
        <Container fluid>
                <RowBot>
                    {/* { windowWidth <=991 && <CartShop scrollTop={scrollTop}/> } */}
                    { windowWidth <=991 && <CartShop /> }
                    {props.children}
                    <div className={Classes['navbar__navigation']}>
                        {/* { windowWidth >=992 && <CartShop scrollTop={scrollTop}/> } */}
                        { windowWidth >=992 && <CartShop /> }
                        {/* <User scrollTop={scrollTop}/> */}
                        <User />
                        <div 
                            className={classesButtonToggle}
                            onClick={_=>clickHandler(true)}>
                            <span className={classesLineBtnToggle}></span>
                            <span className={classesLineBtnToggle}></span>
                            <span className={classesLineBtnToggle}></span>
                        </div>
                    </div>
                </RowBot>
        </Container>
    )
} 

export default NavBarActions;