import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Classes from '../../Assets/Styles/Components/Account/user.module.scss';
import { authActions } from '../../Store/Slice/auth-slice';

const AccountActions = _ =>{
    const dispatch = useDispatch();

    const userLogOutHandler = _ =>{
        dispatch(authActions.logOut())
    }
    return(
        <div className={Classes['user-account__actions']}>
            <ul>
                <li>
                    <Link to='/profile'>Mohamed Kandad</Link>
                </li>
                <li>
                    <span onClick={userLogOutHandler}>LogOut</span>
                </li>
            </ul>
        </div>
    )
}

export default AccountActions;