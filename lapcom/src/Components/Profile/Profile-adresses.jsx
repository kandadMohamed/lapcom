import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Profile/Profile-adresses.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import { ButtonLink } from '../UI/Button';

const ProfileAdresses = _ =>{

    return(
        <div className={Classes['profile-adresses-content']}>
            <Row>
                <Col xs={12}>
                    <div className={ClassesGlobals['profile-pages-heading']}>
                        <p>Your addresses</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={Classes['adresse-item']}>
                        <ul>
                            <li>Mohamed Kandad</li>
                            <li>No</li>
                            <li>Casablanca</li>
                            <li>Casablanca, AA 20000</li>
                            <li>United States</li>
                            <li>0695208671</li>
                        </ul>
                        <div className={Classes['adresse-item__actions']}>
                            <Link 
                                className={Classes['edit-action']}
                                to={`/profile/account-adresses/actions?type=edit&id=1`}
                            >
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </Link>
                            <button className={Classes['delete-action']}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={Classes['adresse-item']}>
                        <ul>
                            <li>Mohamed Kandad</li>
                            <li>No</li>
                            <li>Casablanca</li>
                            <li>Casablanca, AA 20000</li>
                            <li>United States</li>
                            <li>0695208671</li>
                        </ul>
                        <div className={Classes['adresse-item__actions']}>
                            <button className={Classes['edit-action']}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </button>
                            <button className={Classes['delete-action']}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col md={4}>
                    <div className={Classes['adresse-item']}>
                        <ul>
                            <li>Mohamed Kandad</li>
                            <li>No</li>
                            <li>Casablanca</li>
                            <li>Casablanca, AA 20000</li>
                            <li>United States</li>
                            <li>0695208671</li>
                        </ul>
                        <div className={Classes['adresse-item__actions']}>
                            <button className={Classes['edit-action']}>
                                <FontAwesomeIcon icon={faPenToSquare}/>
                            </button>
                            <button className={Classes['delete-action']}>
                                <FontAwesomeIcon icon={faTrash}/>
                            </button>
                        </div>
                    </div>
                </Col>
                <Col 
                    md={{ span: 2, offset: 10 }}
                    xs={{ span: 4, offset: 8 }}
                >
                    <ButtonLink 
                        variante='btn-black' 
                        to='/profile/account-adresses/actions?type=new'
                        classStyle={Classes['btn-new-adresse']}
                    >
                        New Address
                    </ButtonLink>
                </Col>
            </Row>
        </div>
    )
}

export default ProfileAdresses;