import { Routes, Route } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import NewProduct from './products/New-product';
import ListProduct from './products/List-products';

const AdminContent = _ =>{

    return(
        <Col xs={12}>
            <Routes>
                <Route path='products/manage' element={<NewProduct />} />
                <Route path='products/list' element={<ListProduct />} />
            </Routes>
        </Col>
    )
}
export default AdminContent;