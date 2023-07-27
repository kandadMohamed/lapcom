import { Row, Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Components/Profile/Profile-order-details.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import OrderTrack from './Order-track'

const ProfileOrderDetails = _ =>{

    return(
        <Row className={Classes['profile-order-content']}>
            <Col xs={12}>
                <div className={ClassesGlobals['profile-pages-heading']}>
                    <p>Order Details <b>#0001</b></p>
                </div>
            </Col>
            <Col xs={12}>
                <OrderTrack />
            </Col>
        </Row>  
    )
}

export default ProfileOrderDetails;