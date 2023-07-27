
import { Row, Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Components/CheckOut/checkout-step.module.scss';

const CheckOutStep = _ =>{

    return(
        <Row className={Classes['check-out__step']}>
            <Col md={4} className={Classes['check-out__step-item']}>SHOPPING CART</Col>
            <Col md={4} className={Classes['check-out__step-item']}>CHECKOUT DETAILS</Col>
            <Col md={4} className={Classes['check-out__step-item']}>ORDER COMPLETE</Col>
        </Row>
    )
}

export default CheckOutStep;