import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Profile/Profile-menu.module.scss';
import { authActions } from '../../Store/Slice/auth-slice';

const ProfileMenu = _ =>{
    const dispatch = useDispatch();
    const { logOut } = authActions;
    console.log(authActions);
    const userLogOut = _ =>{
        dispatch(logOut());
    } 

    return(
        <ul className={Classes['profile-menu']}>
            <li>Mohammed Kandad</li>
            <li>
                <NavLink 
                    className={navigationData =>
                                    navigationData.isActive ? Classes.active : ""
                                }  
                    to='/profile/dashboard'
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={navigationData =>
                                    navigationData.isActive ? Classes.active : ""
                                }  
                    to='/profile/account-orders'
                >
                    Orders
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={navigationData =>
                                    navigationData.isActive ? Classes.active : ""
                                }  
                    to='/profile/account-adresses'
                >
                    Adresses
                </NavLink>
            </li>
            <li>
                <NavLink 
                    className={navigationData =>
                                    navigationData.isActive ? Classes.active : ""
                                }  
                    to='/profile/personal-informations'
                >
                    ACCOUNT DETAILS
                </NavLink>
            </li>
            <li>
                <button onClick={userLogOut}>
                    LOGOUT
                </button>
            </li>
        </ul>
    )
}

export default ProfileMenu;