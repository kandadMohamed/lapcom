import { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Classes from '../../Assets/Styles/Components/Cart/Cart-items.module.scss';
import { CartShopping } from '../UI/icon-Svg';
import { getCartItem } from '../../Store/Actions/cart-actions';
import CartContent from './Cart-content';
import CardCart from '../UI/Card'; 

const CartShop = props =>{
    const dispatch = useDispatch();
    const cartItemsData = useSelector(state=>state.cartItems);
    const { items, status, error } =cartItemsData;

    const classesCartShop = `
        ${Classes['cart-shop']} 
        ${Classes['action-navigation']} 
    `
    useEffect(_=>{
        dispatch(getCartItem());
    },[])

    let totalQauntity = 0;
    if(status === 'success' && items.length > 0){
        for(let item in items){
            totalQauntity += items[item].product_qantity;
        }
    }
    return(
        <div className={Classes['navbar__navigation']}>
            <div 
                className={classesCartShop}
            >

                <Link 
                    to='/cart' >
                    <CartShopping />
                    <span className={Classes['totla-qauntity']}>
                        {totalQauntity}
                    </span>
                </Link>
                
                <CardCart classStyle={Classes['cart-shop__content']}>
                        <CartContent />
                </CardCart>
                
            </div>
        </div>
    )
}

export default CartShop;