

import Classes from '../../Assets/Styles/UI/Product-etat.module.scss';

const ProductEtat = props =>{
    const { promotion, quantity, dateAdd, classStyle} = props;
    const DateAddProduct = new Date(dateAdd);
    const DateNow = new Date();
    const diffBetweenDateAddAndNow = DateNow.getDate() - DateAddProduct.getDate()
    
    return(
        <div className={`${Classes['product__etat']} ${classStyle}`}>
            {
                promotion>0 && quantity > 0 &&
                <span className={Classes['product-promotion']}>
                    { promotion }%
                </span>
            }
            {
                quantity <= 0 && 
                <span className={Classes['product-out-stock']}>
                    Out of Stock
                </span>
            }
            {
                diffBetweenDateAddAndNow <= 7 && quantity > 0 &&
                <span className={Classes['product-new']}>
                    new
                </span>
            }
        </div>
    )
}

export default ProductEtat;