import { useState } from 'react';

import Classes from '../../Assets/Styles/Components/SingleProduct/Product-info.module.scss';
import ProductComments from './product-comments';
import ProductDesc from './product-desc';
import ProductInfoDetails from './product-infoDetails';

const PRODUCTABS_VALUE = {
    INFORMATION : 'inforamtion',
    DESCRIPTION : 'description',
    REVIEW      : 'review'
}

const ProductReview = props =>{
    const [productTabs,setProductTabs] = useState(PRODUCTABS_VALUE.INFORMATION);
    const { 
        Description
    } = props.product;

    const productTabsClickHandler = e =>{
        setProductTabs(e.target.getAttribute('name'));
    }

    const classInfoAction = (productTabs === PRODUCTABS_VALUE.INFORMATION) ? Classes.active : '';
    const classDescAction = (productTabs === PRODUCTABS_VALUE.DESCRIPTION) ? Classes.active : '';
    const classReviewAction = (productTabs === PRODUCTABS_VALUE.REVIEW) ? Classes.active : '';


    return(
        <div className={Classes['desc-review']}>
            <div className={Classes['desc-review__action']}>
                <div className={classInfoAction} name={PRODUCTABS_VALUE.INFORMATION} onClick={productTabsClickHandler}>Information</div>
                <div className={classDescAction} name={PRODUCTABS_VALUE.DESCRIPTION} onClick={productTabsClickHandler}>Description</div>
                <div className={classReviewAction} name={PRODUCTABS_VALUE.REVIEW} onClick={productTabsClickHandler}>Review</div>
            </div>
            <div className={Classes['tabs-content']}>
                {(productTabs === PRODUCTABS_VALUE.INFORMATION) && <ProductInfoDetails  /> }
                {(productTabs === PRODUCTABS_VALUE.DESCRIPTION) && <ProductDesc desc={Description} /> }
                {(productTabs === PRODUCTABS_VALUE.REVIEW) && <ProductComments /> }
            </div>
        </div>
    )
}

export default ProductReview;