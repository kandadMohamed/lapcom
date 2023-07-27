import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faExclamation } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Pages/CheckOut/check-out.module.scss';
import ClassesHeader from '../../Assets/Styles/Base/Globals.module.scss'; 
import Header from '../../Layouts/Header/Header';
import CheckOutStep from '../../Components/CheckOut/checkout-step';
import CheckoutBillingDetails from '../../Components/CheckOut/checkout-billing-details';
import CheckOutOrder from '../../Components/CheckOut/checkout-order';

const CheckOut = _ =>{
    const [adressShip, setAdressShip] = useState({});
    const dataAuth = useSelector(state=>state.auth);

    const onAdressesChange = adresse =>{
        setAdressShip(adresse);
    }

    if(!dataAuth.isAuth){
        return <Navigate to='/cart' replace />
    }

    return (
        <>
            <Header classStyle={ClassesHeader['header-page']}>
                <div className={ClassesHeader['header__desc']}>
                    <Container>
                        <h2>
                            <span>WOO</span> CHECKOUT
                        </h2>
                    </Container>
                </div>
                <div className={ClassesHeader['breadcrumbs']}>
                    <Container className={ClassesHeader.container}>
                        <Link to='/'>Home</Link>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <span> Checkout</span>
                    </Container>
                </div>
            </Header>
            <main className={Classes['check-out-main-content']}>
                <Container>
                    <CheckOutStep />
                    <Row className={Classes['check-out-details']}>
                        <CheckoutBillingDetails onAdressesChange={onAdressesChange} adressShip={adressShip}/>
                        <CheckOutOrder adressShip={adressShip}/>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default CheckOut;