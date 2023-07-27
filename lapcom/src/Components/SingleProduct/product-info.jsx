import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/SingleProduct/Product-info.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import ButtonMain, { ButtonLink } from '../UI/Button';
import SelectFilter from '../UI/Select-react';
import ProductReview from './product-info-review';
import { addCartItem } from '../../Store/Actions/cart-actions';

const dataColor = [
    {label: 'Red', value:'red'},
    {label: 'Green', value:'green'},
    {label: 'Yellow', value:'yellow'},
]

const ProductInfo = props =>{
    const dispatch = useDispatch();
    const authData = useSelector(state=>state.auth);
    const { 
        Description,
        IdCat,
        IdProduit,
        Prix,
        TauxPromotion,
        Title,
        catTitle,
        catId ,
        QteStock
    } = props.product;

    const ClassesButtonAdd = `${ QteStock>0? ClassesGlobals['user-auth-pointer']: ClassesGlobals['user-not-auth-allowed'] }`
    const addProductToCartHandler = _=>{
        if(authData.isAuth){
            dispatch(addCartItem(IdProduit));
        }
    } 
    
    return(
        <div className={Classes['product-info']}>
            <div className={Classes['product-title']}>
                <h3>{Title}</h3>
                <ButtonLink 
                    to='/Devices' 
                    variante='btn-gray__outline'
                    classStyle={Classes['btn-style']}
                >
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </ButtonLink>
            </div>
            <div className={Classes['line']}></div>
            <p className={Classes.price}>
                {
                    TauxPromotion > 0 && <span>${Prix-Prix*(TauxPromotion/100)} &ensp;-&ensp;</span>
                }
                <span className={
                    TauxPromotion > 0? Classes['prix-promotion']: ''
                }>${Prix}</span>
            </p>
            <div className={Classes['filter__color']}>
                <p>Color:</p>
                <SelectFilter 
                    placeholder='Choose an option'
                    data={dataColor}
                />
            </div>
            <div className={Classes['categorie']}>
                <p>
                    <span>Categorie:</span>
                    <Link to='/Devices'>{catTitle}</Link>
                </p>
            </div>
            <div className={Classes['btn-action']}>
                <input type="number" min='1' defaultValue={1}/>
                <ButtonMain 
                    variante='btn-blue'
                    classStyle={ClassesButtonAdd}
                    clickHandler={addProductToCartHandler}
                >
                    ADD TO CART
                </ButtonMain>
            </div>
            <ProductReview product={props.product}/>
        </div>
    )
}

export default ProductInfo;