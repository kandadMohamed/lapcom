import { Row, Col } from 'react-bootstrap';

import FilterProducts from '../../../Components/Admin/Products/Filter-products';
import ListTableProducts from '../../../Components/Admin/Products/List-products';

const ListProducts = _ =>{

    return(
        <Row>
            <Col md={8}>
                <Row>
                    <FilterProducts />
                    <ListTableProducts />
                </Row>
            </Col>
        </Row>
    )
}

export default ListProducts;