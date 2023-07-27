import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row,Col } from 'react-bootstrap';
import { useFormik } from 'formik';

import Classes from '../../Assets/Styles/Components/Account/user.module.scss';
import Input from '../UI/Input';
import ButtonUser from '../UI/Button';
import AlertMessage from '../UI/Alert-message';
import { createAccount } from '../../Store/Actions/account-actions';

const validate = values =>{

    const errors = {};

    if(!values.firstName){
        errors.firstName = 'First Name Is Required';
    }

    if(!values.lastName){
        errors.lastName = 'Last Name Is Required';
    }

    if (!values.login) {
        errors.login = 'Login Is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login)) {
        errors.login = 'Invalid email address';
    }

    if (!values.email) {
        errors.email = 'Email Is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if(!values.password){
        errors.password = 'Password Is Required';
    }

    if(!values.confirmPass){
        errors.confirmPass = 'Confirm Password Is Required';
    }else{
        if(values.confirmPass !== values.password){
            errors.confirmPass = 'Password Must Match';
        }
    }

    return errors;
}

const FormNewAccount = props =>{
    const firstNameRef = useRef();
    const authData = useSelector(state=>state.auth); 
    const dispatch = useDispatch();

    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
        confirmPass: ''
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: values=>{
            dispatch(createAccount(values));
        }
    })

    useEffect(_=>{
        firstNameRef.current.focus(); 
    },[])

    return(
        <form onSubmit={formik.handleSubmit} className={Classes['user-form']}>
            <h4>Create Account</h4>
            <Row>
                <Col xs={12}>
                    <Input 
                        type="text" 
                        placeholder='First Name *' 
                        name='firstName'
                        changeHandler={formik.handleChange}
                        value={formik.values.firstName}
                        messageError={formik.errors.firstName}
                        ref={firstNameRef}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="text" 
                        placeholder='Last Name *' 
                        name='lastName'
                        changeHandler={formik.handleChange}
                        value={formik.values.lastName}
                        messageError={formik.errors.lastName}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="email" 
                        placeholder='Username or email address *' 
                        name='login'
                        changeHandler={formik.handleChange}
                        value={formik.values.login}
                        messageError={formik.errors.login}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="email" 
                        placeholder='Email Google *' 
                        name='email'
                        changeHandler={formik.handleChange}
                        value={formik.values.email}
                        messageError={formik.errors.email}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="password" 
                        placeholder='Password *' 
                        name='password'
                        changeHandler={formik.handleChange}
                        value={formik.values.password}
                        messageError={formik.errors.password}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={12}>
                    <Input 
                        type="password" 
                        placeholder='Confirm Password *' 
                        name='confirmPass'
                        changeHandler={formik.handleChange}
                        value={formik.values.confirmPass}
                        messageError={formik.errors.confirmPass}
                        classStyle={Classes['input-content']}
                    />
                </Col>
                <Col xs={3}>
                    <ButtonUser type='submit' variante='btn-blue__outline' classStyle={Classes['btn-form']}>
                        Create
                    </ButtonUser>
                </Col>
            </Row>
        </form>
    )
}

export default FormNewAccount;