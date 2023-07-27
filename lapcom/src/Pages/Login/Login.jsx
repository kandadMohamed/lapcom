import { useNavigate, Routes, Route, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Pages/Login/login.module.scss';
import AlertMessage from '../../Components/UI/Alert-message';
import HeaderPageLogin from '../../Layouts/Header/Header-pages';
import FormLogin from '../../Components/Account/Form-Login';
import FormNewAccount from '../../Components/Account/Form-create-account';
import FormLostPass from '../../Components/Account/Form-reset-password';
import { authActions } from '../../Store/Slice/auth-slice';


const Login = _ =>{
    const authData = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const history = useNavigate();
    
    if(authData.isAuth){
        return <Navigate to='/' replace />
        // history(-1);
    }
    
    return(
        <>
            <HeaderPageLogin 
                headingSpan='MY'
                heading='ACCOUNT'
                headerLinks={[
                    {title: 'Your account'}
                ]}
            />
            <div className={Classes['login-page-content']}>
                <Container>
                    <Row>
                        <Col md={6}>
                            {
                                (authData.status === 'error' || authData.status === 'success') && 
                                <AlertMessage 
                                    variante={
                                        authData.status === 'error'?
                                        'error':
                                        'info'
                                    } 
                                    message={authData.message}
                                />
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Routes>
                            <Route path='lost-password' element={
                                <Col md={8}>
                                    <FormLostPass />
                                </Col>
                            } />
                            <Route path='my-account' element={
                                <>
                                    <Col md={6}>
                                        <FormLogin />
                                    </Col>
                                    <Col md={6}>
                                        <FormNewAccount />
                                    </Col>
                                </>
                            } />
                        </Routes>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Login;