import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Styled from 'styled-components'

import Classes from '../../Assets/Styles/Layouts/Navbar/Navbar.module.scss';
import LogoWhite from '../../Assets/Img/logo-white.png';
import LogoBlack from '../../Assets/Img/logo-black.png';
import NavBarActions from './NavBar-actions';
import NavBarItems from './NavBar-items';

const Navbar = _ =>{
    const [isNavShow,setIsNavShow] = useState(false);
    // const [getScrollTop,setScrollTop] = useState(0);
    const [windowWidth,setWindowWidth] = useState();
    const pathName = window.location.pathname;

    const toggleShowNavItemsHandler = showNav =>{
        setIsNavShow(!isNavShow);
    }

    useEffect(_=>{
        setWindowWidth(window.innerWidth);
        // setScrollTop(window.pageYOffset)
    },[])

    window.addEventListener('resize',_=>{
        setWindowWidth(window.innerWidth);
        // console.log(window.innerWidth)
    })
    // window.addEventListener('scroll',_=>{
    //     if(window.pageYOffset>100)
    //     setScrollTop(110)
    //     else
    //     setScrollTop(90)
    // })

    
    // const classesNavBar = `${Classes.navbar} ${ getScrollTop>100 ? Classes['nav-fixed'] : '' }`;

    const StyledNavBar = Styled.nav`
        padding: '33px 0';
    `

    return(
        <StyledNavBar className={Classes.navbar}>

            <NavBarActions 
                clickHandler={toggleShowNavItemsHandler}
                windowWidth={windowWidth} 
                isNavShow={isNavShow}
                // scrollTop={getScrollTop}

            >
                <div className={Classes['navbar__brand']}>
                    <Link to='/'>
                        <img src={LogoWhite} alt="" />
                    </Link>
                </div>
            </NavBarActions>

            <NavBarItems 
                clickHandler={toggleShowNavItemsHandler} 
                isNavShow={isNavShow}
                windowWidth={windowWidth}
            />

        </StyledNavBar>
    )
}

export default Navbar;