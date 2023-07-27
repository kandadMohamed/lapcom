import { Link } from 'react-router-dom';
import { Row, Col, Badge, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Profile/Profile-Orders.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import { ButtonLink } from '../UI/Button';

const ProfileOrders = _ =>{

    return(
        <Row className={Classes['profile-order-content']}>
            <Col xs={12}>
                <div className={ClassesGlobals['profile-pages-heading']}>
                    <p>Order List</p>
                </div>
            </Col>
            <Col xs={12}>
                <table className={Classes['orders']}>
                    <thead>
                        <tr className={Classes['heading']}>
                            <th>#ID</th>
                            <th>Name</th>				
                            <th>Email</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0901</td>
                            <td>Marvin McKinney</td>
                            <td>marvin@example.com</td>
                            <td>$9.00</td>
                            <td>
                                <Badge bg="primary" className={Classes['pending']}>
                                    Pending
                                </Badge>
                            </td>
                            <td>03.12.2020</td>
                            <td className={Classes['action']}>
                                <ButtonLink 
                                    classStyle={Classes['link-details']} 
                                    to='/profile/order-details' 
                                    variante='btn-blue'
                                >
                                    Details
                                </ButtonLink>
                                <Dropdown className={Classes['more-action']}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faEllipsisH}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-details/1'>View Details</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Edit Info</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Delete</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>0901</td>
                            <td>Marvin McKinney</td>
                            <td>marvin@example.com</td>
                            <td>$9.00</td>
                            <td>
                                <Badge bg="primary" className={Classes['pending']}>
                                    Pending
                                </Badge>
                            </td>
                            <td>03.12.2020</td>
                            <td className={Classes['action']}>
                                <ButtonLink 
                                    classStyle={Classes['link-details']} 
                                    to='/profile/order-details' 
                                    variante='btn-blue'
                                >
                                    Details
                                </ButtonLink>
                                <Dropdown className={Classes['more-action']}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faEllipsisH}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-details/1'>View Details</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Edit Info</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Delete</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                        <tr>
                            <td>0901</td>
                            <td>Marvin McKinney</td>
                            <td>marvin@example.com</td>
                            <td>$9.00</td>
                            <td>
                                <Badge bg="primary" className={Classes['pending']}>
                                    Pending
                                </Badge>
                            </td>
                            <td>03.12.2020</td>
                            <td className={Classes['action']}>
                                <ButtonLink 
                                    classStyle={Classes['link-details']} 
                                    to='/profile/order-details' 
                                    variante='btn-blue'
                                >
                                    Details
                                </ButtonLink>
                                <Dropdown className={Classes['more-action']}>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        <FontAwesomeIcon icon={faEllipsisH}/>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-details/1'>View Details</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Edit Info</Link>
                                        <Link className='dropdown-item' to='/profile/account-orders/order-info'>Delete</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
    )
}

export default ProfileOrders;