import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Classes from '../../Assets/Styles/Components/Cart/Cart-item.module.scss';
import { Close } from '../UI/icon-Svg';
import { deleteCartItem } from '../../Store/Actions/cart-actions';

const CartItem = props =>{
    const dispatch = useDispatch();
    const { 
        product_color,
        product_id,
        product_img,
        product_price,
        product_promotion,
        product_qantity,
        product_title
    } = props.item;

    const deleteItemHandler = _=>{
        dispatch(deleteCartItem(product_id))
    }
    const productPrice = _=>{
        if(product_promotion>0){
            return(
                <>
                    {product_price-product_price*(product_promotion/100)}
                    $-
                    <b>{product_price}$</b>
                </>
            )
        }else{
            return(
                <>
                {product_price}$
                </>
            )
        }
    }
    return(
        <li className={Classes['cart-item']}>
            <div 
                className={Classes['delete-item']}
                onClick={deleteItemHandler}>
                <Close propsColor='#37bdd3'/>
            </div>
            <Link to={`/product/${product_id}`} className={Classes['product']}>
                <div className={Classes['product__img']}>
                    {/* <img src={require(`../../Assets/Img/Products/${product_img}.jpg`)} alt="" /> */}
                    <img src={`http://localhost:8000/products/${product_img.toLowerCase()}`} alt="" />
                </div>
                <div className={Classes['product__title']}>
                    {product_title.charAt(0).toUpperCase() + product_title.slice(1)} - 
                    {product_color.charAt(0).toUpperCase() + product_color.slice(1)}
                </div>
            </Link>
            <div className={Classes['full-price']}>
                <span className={Classes.quantity}>
                    {product_qantity} x 
                </span>
                <span className={Classes.price}>
                    {productPrice()}
                </span>
            </div>
        </li>
    )
}
export default CartItem;