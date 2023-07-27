import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../../Assets/Styles/Layouts/Sidebare/sidebare-item.module.scss'

const SideBareItem = props => {
    const [ collapseOpen, setCollpaseOpen] = useState();
    const { items, title, icon } = props;

    let contentRender;
    if(!items){
        return <li className={Classes['menu-item']}>
                    <NavLink 
                        to={`/admin/${title.toLowerCase()}`}
                        className={navigationData =>
                            navigationData.isActive ? Classes['menu-item__active'] : ""
                        }
                    >
                        <span>
                            <FontAwesomeIcon icon={icon}/>
                        </span>
                        {title}
                    </NavLink>
                </li>
    }else{
        return <li className={Classes['menu-item']}>
                    <div onClick={() => setCollpaseOpen(!collapseOpen)}>
                        <span>
                            <FontAwesomeIcon icon={icon}/>
                        </span>
                            {title}
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </div>
                    <Collapse in={collapseOpen}>
                        <ul>
                            {
                                items.map((item, index)=>(
                                    <li className={Classes['menu-item']} key={index}>
                                        <NavLink 
                                            to={`/admin/${title.toLowerCase()}/${item.path.toLowerCase()}`}
                                            className={navigationData =>
                                                navigationData.isActive ? Classes['menu-item__active'] : ""
                                            }
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </Collapse>
                </li>
    }
    // return(
    //     {contentRender}
    //     // <p>sdsdsdsd</p>
    // )
}

export default SideBareItem;