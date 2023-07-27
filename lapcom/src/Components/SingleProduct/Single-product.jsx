import { useEffect, } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import ProductImg from './product-img';
import ProductInfo from './product-info';
import { getSingelProduct } from '../../Store/Actions/product-actions';
import Classes from '../../Assets/Styles/Components/SingleProduct/Single-product.module.scss';

const SingleProduct = ({ productData }) =>{
    
    if(productData.status === 'success' && !Array.isArray(productData.items)){
        return(
            <Row className={Classes['row-bot']}>
                <Col lg={5}>
                    <ProductImg product={productData.items}/>
                </Col>
                <Col lg={6}>
                    <ProductInfo product={productData.items} />
                </Col>
            </Row>
        )
    }
    return(
        <p>product Single</p>
    )
}

export default SingleProduct;