import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fatw } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Layouts/Footer/Footer.module.scss'

const Footer = _ =>{

    return(
        <footer>
            <Container fluid>
                <Row style={{alignItems: 'center'}}>
                    <Col md={4} className={Classes['copy-right']}>
                        <p>&copy; Copyright</p>
                    </Col>
                    <Col md={4} className={Classes['footer-links']}>
                        <ul>
                            <li>
                                <Link to='/'>Support</Link>
                            </li>
                            <li>
                                <Link to='/'>Contact Us</Link>
                            </li>
                            <li>
                                <Link to='/'> Disclaimer</Link>
                            </li>
                            <li>
                                <Link to='/'>Privacy Policy</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <ul>
                            <li>
                                <a href='#' target='_blank'>
                                    {/* Icon Scial Media */}
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;