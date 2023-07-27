import { Row, Col, Container } from 'react-bootstrap'

import Classes from '../../Assets/Styles/Pages/Admin/admin.module.scss';
import Sidebare from "../../Layouts/Admin/Sidebare/side-bare";
import Header from '../../Layouts/Admin/Header/Header';
import AdminContent from './admin-content';

const Index = _ =>{

    return(
        <div className={Classes['admin-page-content']}>
            <Container fluid >
                <Row className={Classes['row-admin']}>
                    <Sidebare />
                    <Col md={9}>
                        <Row>
                            <Header />
                            <AdminContent />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Index;