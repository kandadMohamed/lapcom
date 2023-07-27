import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Pages/CheckOut/order-confirm.module.scss';
import ClassesGlobal from '../../Assets/Styles/Base/Globals.module.scss'; 
import Header from '../../Layouts/Header/Header';

const OrderConfirm = _ =>{
    const orderData = useSelector(state=>state.order);
    const navigate = useNavigate();
    const { 
        ordersItems, 
        orderInfo :{
            id_order,
            date_order,
            payment_methode
        }
    } = orderData;


    if(ordersItems <= 0){
        navigate('/cart')
    }
    
    return(
        <>
            <Header classStyle={ClassesGlobal['header-page']}>
                <div className={ClassesGlobal['header__desc']}>
                    <Container>
                        <h2>
                            <span>WOO</span> CHECKOUT
                        </h2>
                    </Container>
                </div>
                <div className={ClassesGlobal['breadcrumbs']}>
                    <Container className={ClassesGlobal.container}>
                        <Link to='/'>Home</Link>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <span> Checkout</span>
                    </Container>
                </div>
            </Header>
            <main className={Classes['order-received-main']}>
                <Container>
                    <p>Thank you. Your order has been received.</p>
                    <ul>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                            </span>
                            Order number: <strong> {id_order}</strong>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                            </span>
                            Date:<strong>  {date_order}</strong>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                            </span>
                            Total: <strong> $109.99</strong>
                        </li>
                        <li>
                            <span>
                                <FontAwesomeIcon icon={faCircleCheck}/>
                            </span>
                            Payment method: <strong>
                                {payment_methode === 'payment-CashOnDelivery' && 'Cash on delivery'}
                            </strong>
                        </li>
                    </ul>
                    <Row>
                        <Col md={6}>
                            <h2 className={ClassesGlobal['checkout__title']}>
                                ORDER DETAILS
                            </h2>
                            <table className={Classes['order-derails']}>
                                <thead>
                                    <tr>
                                        <td>PRODUCT</td>
                                        <td>QUANTITY</td>
                                        <td>TOTAL</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        ordersItems.map((item, index)=>{
                                            const { 
                                                IdProduit,
                                                Photo,
                                                Prix,
                                                TauxPromotion,
                                                Title,
                                                qteOrder 
                                            } = item;
                                            return(
                                                <tr key={index}>
                                                    <td>
                                                        <div className={Classes['order-product-img']}>
                                                            {/* <img src={require(`../../Assets/Img/Products/${Photo.toLowerCase()}.jpg`)} alt="" /> */}
                                                            <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" />
                                                        </div>
                                                        <Link to={`/product/${IdProduit}`}>
                                                            { Title }
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        {qteOrder}
                                                    </td>
                                                    <td>
                                                        ${Prix-Prix*(TauxPromotion/100)}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default OrderConfirm;