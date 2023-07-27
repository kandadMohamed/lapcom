import { Row, Col } from 'react-bootstrap';
import { useSearchParams, useLocation } from 'react-router-dom';

import Classes from '../../Assets/Styles/Components/Profile/Profile-form-adresse.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import Button from '../UI/Button';
import InputFormAdresse from '../UI/Input';

const ProfileFormAdresse = _ =>{
    const queryString = new URLSearchParams(useLocation().search);
    const paramsType = queryString.get('type');
    
    return(
        
        <div className={Classes['profile-form-adresses']}>
            <form action="">
                <Row>
                    <Col xs={12}>
                        <div className={ClassesGlobals['profile-pages-heading']}>
                            <p>
                                { paramsType } addresses
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='text' placeholder='First Nom *' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='text' placeholder='Last Nom *' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='text' placeholder='Adresse *' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='text' placeholder='Additional address' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='text' placeholder='Ville *' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='number' placeholder='Code postal *' />
                    </Col>
                    <Col md={6}>
                        <InputFormAdresse type='number' placeholder='Phone *' />
                    </Col>
                    <Col 
                        md={{ span: 2, offset: 10 }}
                        xs={{ span: 4, offset: 8 }}
                    >
                        <Button 
                            variante='btn-black' 
                            classStyle={Classes['btn-submit-adresse']}
                        >
                            { paramsType } Addresse
                        </Button>
                    </Col>
                </Row>
            </form>
        </div>
    )
}

export default ProfileFormAdresse;