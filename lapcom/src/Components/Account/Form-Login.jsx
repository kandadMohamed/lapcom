import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';

import Classes from '../../Assets/Styles/Components/Account/user.module.scss';
import Input from '../UI/Input';
import ButtonUser from '../UI/Button';
import { userLogIn } from '../../Store/Actions/auth-actions';
import { authActions } from '../../Store/Slice/auth-slice';

const validate = values =>{

    const errors = {};

    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = 'Password Required'
    }
    
    return errors;
}

const initialValues = {
    email: '',
    password: ''
}

const FormLogin = props =>{
    const emailRef = useRef();
    const authData = useSelector(state=>state.auth); 

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values=>{
            dispatch(userLogIn(values));
        }
    })

    useEffect(_=>{
        emailRef.current.focus();
        dispatch(authActions.logOut());
    },[])


    return(
        <form onSubmit={formik.handleSubmit} className={Classes['user-form']}>
            <h4>Login</h4>
            <Row>
                <Col xs={12}>
                    <Input 
                        type="email" 
                        placeholder='Username or email address *' 
                        name='email'
                        changeHandler={formik.handleChange}
                        value={formik.values.email}
                        messageError={formik.errors.email}
                        classStyle={Classes['input-content']}
                        ref={emailRef}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="password" 
                        placeholder='Password *' 
                        name='password'
                        changeHandler={formik.handleChange}
                        value={formik.values.password}
                        classStyle={Classes['input-content']}
                        messageError={formik.errors.password}
                    />
                </Col>
                <Col xs={3}>
                    <ButtonUser 
                        type='submit' 
                        variante='btn-blue__outline' 
                        classStyle={Classes['btn-form']}
                    >
                        LogIn
                    </ButtonUser>
                </Col>
                <Col xs={9} className={Classes['remember-pass']}>
                    <ul>
                        <li>
                            <input type="checkbox" id="ck_rememberMe" />
                            <label htmlFor="ck_rememberMe">
                                <span>
                                    Remember me 
                                </span>
                            </label>
                        </li>
                        <li>
                            <span></span>
                        </li>
                        <li>
                            <Link to='/Login/lost-password'>
                                Lost your password?
                            </Link>    
                        </li>
                    </ul>
                </Col>
            </Row>
        </form>
    )

    
}

export default FormLogin;