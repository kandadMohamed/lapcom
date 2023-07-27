import { Row, Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Components/Profile/Profile-information.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import InputFormInfo from '../UI/Input';
import Button from '../UI/Button';

const ProfileInformation = _ =>{

    return(
        <form action="">
            <Row>
                <Col xs={12}>
                    <div className={ClassesGlobals['profile-pages-heading']}>
                        <p>Your personal information</p>
                    </div>
                </Col>
                <Col md={6}>
                    <InputFormInfo type='text' placeholder='First Nom' />
                </Col>
                <Col md={6}>
                    <InputFormInfo type='text' placeholder='Last Nom' />
                </Col>
                <Col md={6}>
                    <InputFormInfo type='email' placeholder='Email' />
                </Col>
                <Col md={6}>
                    <InputFormInfo type='date' placeholder='Date of Birth' />
                </Col>
                <Col md={6}>
                    <InputFormInfo type='password' placeholder='Password' />
                </Col>
                <Col md={6}>
                    <InputFormInfo type='password' placeholder='New Password' />
                </Col>
                <Col xs={4} sm={{
                        span: 3, 
                        offset: 9
                    }}>
                    <Button variante='btn-black__outline'>SAVE CHANGE</Button>
                </Col>
            </Row>
        </form>
    )
}

export default ProfileInformation;