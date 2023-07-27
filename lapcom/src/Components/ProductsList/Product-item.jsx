import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Components/ProductsList/Product-item.module.scss';
import { ButtonLink } from '../UI/Button';
import { CartShopping } from '../UI/icon-Svg';
import ProductEtat from '../UI/Product-etat';
import { addCartItem } from '../../Store/Actions/cart-actions';

const ProductItem = props =>{
    const dispatch = useDispatch();
    
    const { 
        IdProduit,
        categorie,
        Date,
        Title,
        Description,
        Photo,
        Prix,
        QteStock,
        TauxPromotion
    } = props.item;
    
    const addCatItemHandler = _ =>{
        dispatch(addCartItem(IdProduit));
    }
    return(
        <Col xs={10} sm={6} xl={4} style={{padding: '0 22px',marginBottom: '40px'}}>
            <div className={Classes['product-item']}>
                <div className={Classes['product-item__img']}>
                    <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" />
                    <img className={Classes['last-img']} src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" />
                </div>
                <div className={Classes['product-item__info']}>
                    <ButtonLink classStyle={Classes['btn-style']} to={`/product/${IdProduit}`}>
                        quick view
                    </ButtonLink>
                    <div>
                        <h5>
                            <Link to={`/product/${IdProduit}`}>{Title}</Link>
                        </h5>
                        <div className={Classes['price']}>
                            <span>${Prix}</span> -
                            <span>${Prix}</span>
                        </div>
                        {
                            QteStock > 0 &&
                            <button onClick={addCatItemHandler}>
                                <CartShopping />
                            </button>
                        }
                    </div>
                </div>
                <ProductEtat 
                    promotion={TauxPromotion}
                    quantity={QteStock}
                    dateAdd={Date}
                    classStyle={Classes['product-etat']}
                />
            </div>
        </Col>
    )

}

export default ProductItem;