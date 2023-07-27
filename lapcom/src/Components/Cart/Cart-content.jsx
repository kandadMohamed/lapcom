import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import Classes from '../../Assets/Styles/Components/Cart/Cart-items.module.scss';
import SpinnerLoaded from '../UI/spinner';
import MessageError from '../UI/Message-error';
import ButtonBlack, { ButtonLink }  from '../UI/Button';
import CartItem from './Cart-item';
import { getCartItem, addCartItem } from '../../Store/Actions/cart-actions';

const CartContent = _ =>{
    const dispatch = useDispatch();
    const cartItemsData = useSelector(state=>state.cartItems);
    const { items, status, error } =cartItemsData;

    useEffect(_=>{
        dispatch(getCartItem());
    },[])

    let cartContentRender = '';
    let cartItems = '';
    let totalQauntity = 0;
    let totalPrice = 0;

    if(status === 'pending'){
        cartContentRender = 
                <div className={Classes['content-spinner']}>
                    <SpinnerLoaded />
                </div>;
    }

    if(
        status === 'success' && 
        (items.length === 0 || !items)
    ){
        totalQauntity = 0;
        totalPrice = 0;
        cartContentRender = <div className={Classes['empty-cart']}>
                            <p>
                                No products in the cart.
                            </p>
                    </div>; 
    }

    if(status === 'error' && error){
        cartContentRender = <MessageError title={error}/>
    }

    if(status === 'success' && items.length > 0){
        cartItems = items.map((item,index)=>{
            const { product_qantity, product_price, product_promotion } = item;
            totalQauntity += +product_qantity;
            totalPrice += +product_qantity*(+product_price-product_price*(product_promotion/100));
            return <CartItem key={index} item={item}/>;
        })
        cartContentRender =  <>
                            <ul>{cartItems}</ul>

                            <div className={Classes['cart-bottom']}>
                                <div className={Classes['cart-bottom__total']}>
                                    <span>Subtotal:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className={Classes['cart-bottom__actions']}>
                                    <ButtonLink 
                                        to='/cart'
                                        classStyle={Classes['button-style']}
                                        variante='btn-blue'
                                    >
                                        View Cart
                                    </ButtonLink>
                                    <ButtonLink 
                                        to='/checkout'
                                        classStyle={Classes['button-style']}
                                        variante='btn-black__outline'
                                    >
                                        Check Out
                                    </ButtonLink>
                                </div>
                            </div>
                        </>
    }

    return cartContentRender

}

export default React.memo(CartContent);