import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import ProductItem from './Product-item';
import ProductLoading from '../UI/Product-loading';
import { getAllProducts } from '../../Store/Actions/product-actions';

const ProductItems = props =>{
    // const dataProducts = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const { items, status } = props.productData;
    const params = {
        _page: props.numberPage,
        _limit: props.numberProductInPage
    }

    // useEffect(_=>{
    //     dispatch(getAllProducts(params));
    // },[])
    
    let contentRender;

    if(status !== 'success' || items.length <= 0){
        contentRender = (
            <>
                <Col style={{height: '400px'}} sm={6} xl={4}>
                    <ProductLoading style={{width: '100%'}}/>
                </Col>
                <Col sm={6} xl={4} style={{height: '400px'}}>
                    <ProductLoading style={{width: '100%'}} />
                </Col>
                <Col sm={6} xl={4} style={{height: '400px'}}>
                    <ProductLoading style={{width: '100%'}} />
                </Col>
                <Col style={{height: '400px'}} sm={6} xl={4}>
                    <ProductLoading style={{width: '100%'}}/>
                </Col>
                <Col sm={6} xl={4} style={{height: '400px'}}>
                    <ProductLoading style={{width: '100%'}} />
                </Col>
                <Col sm={6} xl={4} style={{height: '400px'}}>
                    <ProductLoading style={{width: '100%'}} />
                </Col>
            </>
        )
    }
    if(status === 'success' && items.length > 0){
        contentRender = (
            items.map((item,index)=> <ProductItem key={index} item={item}/>) 
        )
    }
    return <>
        {contentRender}
    </>
}

export default ProductItems;