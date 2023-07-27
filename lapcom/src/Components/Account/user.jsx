import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Classes from '../../Assets/Styles/Components/Account/user.module.scss'
import { UserIcon } from '../UI/icon-Svg';
import CardUserAccount from '../UI/Card';
import FormLogin from './Form-Login';
import FormNewAccount from './Form-create-account';
import FormResetPass from './Form-reset-password';
import AccountAction from './Account-actions';

const User = props =>{
    const accountAuthData = useSelector(state=>state.auth);
    const { infoUser, isAuth } = accountAuthData;

    const [isFormShow,setIsFormShow] = useState(false);
    const [formShow,setFormShow] = useState({
        login: true,
        resetPassword:false
    })
    
    const { login, resetPassword } = formShow;

    const showFormNewAccountHandler = _=>{
        console.log(formShow)
        setFormShow({
            login: false,
            resetPassword:false
        })
    }

    const showFormLoginHandler = _=>{
        setFormShow({
            login: true,
            resetPassword:false
        })
    }

    const showFormResetPassHandler = _=>{
        setFormShow({
            login: true,
            resetPassword:true
        })
    }

    const toggleShowFormHandler = _ =>{
        setIsFormShow(!isFormShow);
    }

    let formContent = '';
    if(login && !resetPassword){
        formContent = <FormLogin 
                    showFromResetPass={showFormResetPassHandler} 
                    showFormNewAccount={showFormNewAccountHandler}/>
    }
    if(!login && !resetPassword){
        formContent = <FormNewAccount showFormLogin={showFormLoginHandler}/>
    }
    if(login && resetPassword){
        formContent = <FormResetPass showFormLogin={showFormLoginHandler}/>
    }

    const classesCardUserContent = `${Classes['user-account']} ${isFormShow? Classes['form-show'] : ''}`;
    // const classesIconUser = `${Classes['user-icon']} ${ props.scrollTop>100 ? Classes['user-icon-black'] : ''}`;
    const classesIconUser = `${Classes['user-icon']}`;

    return(
        <div className={Classes['user-info']}>
            <div className={classesIconUser} onClick={toggleShowFormHandler}>
                <Link 
                    to={
                        isAuth? 
                        (
                            infoUser.isAdmin? '/admin/dashboard': '/profile/personal-informations'
                        ):
                        '/Login/my-account'
                    }
                >
                    <UserIcon />
                </Link>
            </div>
        </div>
    )
}

export default User;