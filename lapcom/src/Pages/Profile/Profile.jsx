import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Classes from '../../Assets/Styles/Pages/Profile/Profile.module.scss';
import HeaderProfile from '../../Layouts/Header/Header-pages';
import ProfileMenu from '../../Components/Profile/Profile-menu';
import ProfileContent from '../../Components/Profile/Profile-content';

const Profile = _ =>{
    const dataAuth = useSelector(state=>state.auth);
    console.log(dataAuth)

    if(!dataAuth.isAuth){
        return <Navigate to='/' replace />
    }

    return(
        <>
            <HeaderProfile 
                headingSpan='WOO'
                heading='YOUR ACCOUNT'
                headerLinks={[
                    {title: 'Your account'}
                ]}
            />
            <main className={Classes['profile-main']}>
                <Container>
                    <Row>
                        <Col md={3}>
                            <ProfileMenu />
                        </Col>
                        <Col md={9}>
                            <ProfileContent />
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default Profile;