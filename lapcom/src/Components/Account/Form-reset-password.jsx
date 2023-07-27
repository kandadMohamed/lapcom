import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';

import Classes from '../../Assets/Styles/Components/Account/user.module.scss';
import Input from '../UI/Input';
import ButtonUser from '../UI/Button';
import { resetAccountPassword } from '../../Store/Actions/auth-actions';
import { authActions } from '../../Store/Slice/auth-slice';

const validate = values =>{

    const errors = {};

    if (!values.login) {
        errors.login = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
        errors.login = 'Invalid email address';
    }
    
    return errors;
}

const FormResetPass = props =>{
    const emailRef = useRef();
    const dispatch =  useDispatch();
    
    const initialValues = {
        login: ''
    }
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values=>{
            dispatch(resetAccountPassword(values));
        }
    })


    useEffect(_=>{
        emailRef.current.focus();
        dispatch(authActions.logOut());
    },[])

    return(
        <form onSubmit={formik.handleSubmit} className={Classes['user-form']}>
            <p className={Classes['paragraph-reset']}>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <Row>
                <Col md={10}>
                    <Input 
                        type="email" 
                        placeholder='Username or email *' 
                        name='login'
                        changeHandler={formik.handleChange}
                        value={formik.values.login}
                        messageError={formik.errors.login}
                        ref={emailRef}
                    />
                </Col>
                <Col xs={5} md={3}>
                    <ButtonUser type='submit' variante='btn-blue__outline' classStyle={Classes['btn-form']}>
                        Reset password
                    </ButtonUser>
                </Col>
            </Row>
        </form>
    )
}

export default FormResetPass;