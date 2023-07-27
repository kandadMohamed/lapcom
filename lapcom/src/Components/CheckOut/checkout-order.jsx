import { useState ,useRef, forwardRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/CheckOut/checkout-order.module.scss';
import ClassesGlobals from '../../Assets/Styles/Base/Globals.module.scss';
import ButtonPlaceOrder, { ButtonLink } from '../UI/Button';
import InputPayment from '../UI/Input';
import { getCartItem, upDateCartQuantity } from '../../Store/Actions/cart-actions';
import { addOrdersByUser } from '../../Store/Actions/order-actions';

const CheckOutOrder = props =>{
    const refPaymentOnline = useRef();
    const [paymentMethode, setPaymentMethode] = useState('payment-online');
    const cartShopData = useSelector(state=>state.cartItems);
    const orderData = useSelector(state=>state.order);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(_=>{
        dispatch(getCartItem());
    },[]);
    
    const onPaymentMethodeChangeHandler = e =>{
        setPaymentMethode(e.target.id)
    }
    const onPlaceOrderClickHandler = _=>{
        console.log('sdsdsd');
        dispatch(addOrdersByUser(
            {
                orderData: cartShopData.items,
                adresseData: props.adressShip.id_adresse,
                paymentMethod: paymentMethode
            }
        ));
        if(orderData.status === 'fulfilled'){
            console.log('ssdsd');
            navigate('/checkout/order-received')
        }
    }

    let subTotal = 0;

    return(
        <Col md={6} className={Classes['check-out-order']}>
            <h2 className={ClassesGlobals['checkout__title']}>
                <FontAwesomeIcon icon={faCartShopping}/>
                BILLING DETAILS
            </h2>
            <div className={Classes['check-out-order__payment']}>
                <div className={Classes['check-out-order__payment-pattern']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={Classes['check-out-order__payment-details']}>
                    <table>
                        <thead>
                            <tr>
                                <td>PRODUCT</td>
                                <td>SUBTOTAL</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartShopData.items.map((item, index)=>{
                                    const {
                                        product_color, 
                                        product_id,
                                        product_img,
                                        product_price,
                                        product_promotion,
                                        product_qantity,
                                        product_title 
                                    } = item;
                                    subTotal += product_price - product_price*(product_promotion/100);
                                    return <tr key={index}>
                                                <td>
                                                    <div className={Classes['order-product-img']}>
                                                        {/* <img src={require(`../../Assets/Img/Products/${product_img.toLowerCase()}.jpg`)} alt="" /> */}
                                                        <img src={`http://localhost:8000/products/${product_img.toLowerCase()}`} alt="" />
                                                    </div>
                                                    <p>
                                                        {product_title} <span>x {product_qantity}</span>
                                                    </p>
                                                </td>
                                                <td>
                                                    ${subTotal.toFixed(2)}
                                                </td>
                                            </tr>
                                })
                            }
                            <tr>
                                <td>
                                    <h4>SUBTOTAL</h4>
                                </td>
                                <td>
                                    ${subTotal.toFixed(2)}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>SHIPPING</h4>
                                </td>
                                <td>
                                    ${props.adressShip.prix?props.adressShip.prix: 20}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <h4>TOTAL</h4>
                                </td>
                                <td className={Classes.total}>
                                    ${props.adressShip.prix? props.adressShip.prix + +subTotal.toFixed(2): 20 + +subTotal.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <PaymentMethode 
                                label='Payment Online' 
                                id='online' 
                                checked={'true'} 
                                ref={refPaymentOnline}
                                eventOnchange={onPaymentMethodeChangeHandler}
                            >
                                {
                                    paymentMethode === 'payment-online' && 
                                    <div className={Classes['payment-online__content']}>
                                        <form action="">
                                            <Row>
                                                <Col md={6}>
                                                    <InputPayment 
                                                        type='number' 
                                                        placeholder='Card number'
                                                        min={'00000000000'}
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputPayment 
                                                        type='text' 
                                                        placeholder='Card holder name'
                                                    />
                                                </Col>
                                                <Col md={3}>
                                                    <InputPayment 
                                                        type='number' 
                                                        placeholder='MM'
                                                    />
                                                </Col>
                                                <Col md={3}>
                                                    <InputPayment 
                                                        type='number' 
                                                        placeholder='YY'
                                                    />
                                                </Col>
                                                <Col md={6}>
                                                    <InputPayment 
                                                        type='number' 
                                                        placeholder='CVV'
                                                    />
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                                }
                            </PaymentMethode>
                            <PaymentMethode 
                                label='Cash on Delivery' 
                                eventOnchange={onPaymentMethodeChangeHandler} 
                                id='CashOnDelivery' 
                            />
                            <PaymentMethode 
                                label='Payment Online PayPal' 
                                eventOnchange={onPaymentMethodeChangeHandler} 
                                id='paypal'
                            />
                            <tr>
                                <td>
                                    <ButtonPlaceOrder clickHandler={onPlaceOrderClickHandler} variante='btn-blue'>
                                        <FontAwesomeIcon icon={faMoneyCheck}/>
                                        PLACE ORDER
                                    </ButtonPlaceOrder>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </Col>
    )
}

export default CheckOutOrder;

const PaymentMethode = forwardRef( (props, ref) =>{
    const { label, id, checked, children, eventOnchange } = props;
    const idRadio = `payment-${id}`;
    return(
        <tr>
            <td colSpan={2}>
                <input 
                    ref={ref} 
                    type="radio" 
                    id={idRadio} 
                    name='payment-methode' 
                    defaultChecked={checked}
                    onChange={eventOnchange}
                />
                <span className={Classes.checkmark}></span>
                <label htmlFor={idRadio}>
                    {label}
                </label>
                {children}
            </td>
        </tr>
    )
});