import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Classes from '../../Assets/Styles/Layouts/Navbar/Navbar-items.module.scss';
import Logo from '../../Assets/Img/logo-black.png';

const NavBarItems = props =>{
    const { windowWidth, clickHandler, isNavShow } = props;
    
    const items = [
        {
            path: '/',
            title: 'HOME',
        },
        {
            path: '/about',
            title: 'ABOUT',
        },
        {
            path: '/devices',
            title: 'DEVICES',
        },
    ]

    const classesNavContent = `${Classes['navbar__content']} ${isNavShow? Classes.active : Classes.inactive}`;

    const navBarItemsHeader = (
        <div className={Classes['navbar_header']}>
            <div 
                className="brand" 
            >
                <Link to='/'>
                    <img src={Logo} 
                        alt="" />
                </Link>
            </div>
            <div 
                className="close"
                onClick={_=>clickHandler(false)}>
                <FontAwesomeIcon icon={faXmark}/>
            </div>
        </div>
    )

    return(
        <div className={classesNavContent}>
            { windowWidth >=992 && navBarItemsHeader }
            <ul className={Classes['navbar__items']}>
                {
                    items.map((item,index)=>
                        <li key={index}>
                            <NavLink 
                                to={item.path} 
                                className={navigationData =>
                                    navigationData.isActive ? Classes.active : ""
                                }
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default NavBarItems;