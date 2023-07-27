import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faExclamation } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Classes from '../../Assets/Styles/Pages/Carts/Carts.module.scss';
import ClassesHeader from '../../Assets/Styles/Base/Globals.module.scss'; 
import Header from '../../Layouts/Header/Header';
import { Close } from '../../Components/UI/icon-Svg';
import SelectCity from '../../Components/UI/Select-react';
import InputAdresse from '../../Components/UI/Input';
import Button, { ButtonLink } from '../../Components/UI/Button';
import AlertMessage from '../../Components/UI/Alert-message';
import data from '../../Api/ma.json';
import { getCartItem, upDateCartQuantity, deleteCartItem } from '../../Store/Actions/cart-actions';
import { getAllVille } from '../../Store/Actions/ville-actions';

let dataCity = [];

const Carts = _ =>{
    const dataAuth = useSelector(state=>state.auth);
    const cartShopData = useSelector(state=>state.cartItems);
    const villeData = useSelector(state=>state.ville);
    const [villePrix, setVillePrix] = useState(20);
    const dispatch = useDispatch();
    const { status, message, items } = cartShopData;
    const ClassesLinkCheckOut = `${dataAuth.isAuth? Classes['user-auth-pointer']: Classes['user-not-auth-allowed'] }`
    
    useEffect(_=>{
        dispatch(getAllVille());
    },[dispatch])

    if(villeData.status === 'success'){
        dataCity = [];
        for(let ville in villeData.villeItems){
            dataCity.push({
                label: villeData.villeItems[ville].title,
                value: villeData.villeItems[ville].id_ville,
                prix: villeData.villeItems[ville].prix
            })
        }
    }

    const upDateIncrimenetQuantity = (id, quantity) => {
        dispatch(upDateCartQuantity(
            {
                itemId: id,
                quantity: quantity + 1
            }
        ))
    }
    const upDateDeCrimenetQuantity = (id, quantity) => {
        if(quantity > 1){
            dispatch(upDateCartQuantity(
                {
                    itemId: id,
                    quantity: quantity - 1
                }
            ))
        }
    }
    const deleteProductHandler = (id) =>{
        dispatch(deleteCartItem(id))
    }
    const onCityChangeHandler = value=>{
        setVillePrix(value.prix);
    }
    
    let contentRenderTablet;
    let contentRenderMobile;
    let totalQuantity = 0;
    let totalPrice = 0;

    
    if(cartShopData.status === 'success' && items.length > 0){
        for(let i=0;i<items.length;i++){
            totalQuantity += items[i].product_qantity;
        }

        contentRenderTablet = items.map((item, index)=>{
            const {
                product_color, 
                product_id,
                product_img,
                product_price,
                product_promotion,
                product_qantity,
                product_title 
            } = item;
            const calculatePrice = product_price - product_price*(product_promotion/100); 
            totalPrice += calculatePrice*product_qantity;
            
            return(
                <tr key={index}>
                    <td className={Classes['text-center']}>
                        <div 
                            className={Classes['delete-product']} 
                            onClick={_=>deleteProductHandler(product_id)}
                        >
                            <Close />
                        </div>
                    </td>
                    <td>
                        <div className={Classes['product']}>
                            <img src={`http://localhost:8000/products/${product_img.toLowerCase()}`} alt="" />
                            <div className={Classes['product-title']}>
                                <Link to={`/product/${product_id}`}>
                                    {product_title} - {product_color}
                                </Link>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className={Classes.price}>
                            ${calculatePrice}
                        </p>
                    </td>
                    <td>
                        <div className={Classes.quantity}>
                            <button onClick={_=>upDateDeCrimenetQuantity(product_id, product_qantity)}>-</button>
                            <input type="number" min={1} defaultValue={product_qantity}/>
                            <button onClick={_=>upDateIncrimenetQuantity(product_id, product_qantity)}>+</button>
                        </div>
                    </td>
                    <td>
                        <p className={Classes.price}>
                            ${(calculatePrice*product_qantity).toFixed(2)}
                        </p>
                    </td>
                </tr>
            )
        });

        contentRenderMobile = items.map((item, index)=>{
            const {
                product_color, 
                product_id,
                product_img,
                product_price,
                product_promotion,
                product_qantity,
                product_title 
            } = item;
            const calculatePrice = product_price - product_price*(product_promotion/100);

            return(
                <tbody key={index}>
                    <tr>
                        <td>
                            <div 
                                className={Classes['delete-product']} 
                                onClick={_=>deleteProductHandler(product_id)}
                            >
                                <Close />
                            </div>
                        </td>
                        <td style={{ width: '100%' }} >
                            <div className={Classes['product']}>
                                {/* <img src={require(`../../Assets/Img/Products/${product_img.toLowerCase()}.jpg`)} alt="" /> */}
                                <img src={`http://localhost:8000/products/${product_img.toLowerCase()}`} alt="" />
                                <div className={Classes['product-title']}>
                                    <Link to={`/product/${product_id}`}>
                                        {product_title} - {product_color}
                                    </Link>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr className={Classes['heading']}>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.price}>
                                ${calculatePrice}
                            </p>
                        </td>
                        <td>
                            <div className={Classes.quantity}>
                                <button onClick={_=>upDateDeCrimenetQuantity(product_id, product_qantity)}>-</button>
                                <input type="number" defaultValue={product_qantity}/>
                                <button onClick={_=>upDateIncrimenetQuantity(product_id, product_qantity)}>+</button>
                            </div>
                        </td>
                        <td>
                            <p className={Classes.price}>
                                ${(calculatePrice*product_qantity).toFixed(2)}
                            </p>
                        </td>
                    </tr>
                </tbody>            
            )
        });
    }
    
    return(
        <>
            <Header classStyle={ClassesHeader['header-page']}>
                <div className={ClassesHeader['header__desc']}>
                    <Container>
                        <h2>
                            <span>WOO</span> CART
                        </h2>
                    </Container>
                </div>
                <div className={ClassesHeader['breadcrumbs']}>
                    <Container className={ClassesHeader.container}>
                        <Link to='/'>Home</Link>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                        <span>Cart</span>
                    </Container>
                </div>
            </Header>
            <main className={Classes['cart-main-content']}>
                <Container>

                    <div className={Classes['cart-counter']}>
                        <p>Your Have <span>{totalQuantity} Items</span> In Your Cart</p>
                    </div>

                    {/* Show In Tablets And Desktop */}
                    <table className={Classes['for-table-min']} style={{borderSpacing: '0'}}>
                        <thead>
                            <tr className={Classes['heading']}>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contentRenderTablet}
                        </tbody>
                    </table>

                    {/* Show In Mobile */}
                    <table className={Classes['for-table-max']}>
                        {contentRenderMobile}
                    </table>
                    
                    <Row>
                        <Col md={6}>
                            <div className={Classes['shipping']}>
                                <h2>CALCULATE SHIPPING</h2>
                                <SelectCity changeHandler={onCityChangeHandler} data={dataCity} placeholder='Select City' />
                                <InputAdresse placeholder='Adresse'/>
                                <Button variante='btn-blue__outline'>UPDATE TOTALS</Button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={Classes['cart-total']}>
                                <h2>CART TOTALS</h2>
                                <table className={Classes['cart-total__table']}>
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>${totalPrice.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping</td>
                                            <td>${villePrix.toFixed(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>Total</td>
                                            <td>${(villePrix+totalPrice).toFixed(2)}</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className={Classes['update-cart']}>
                                                    <ButtonLink 
                                                        to='/checkout' 
                                                        variante='btn-black'
                                                        style={{cursor: 'wait'}}
                                                        classStyle={ClassesLinkCheckOut}
                                                    >
                                                        PROCEED TO CHECKOUT
                                                    </ButtonLink>
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}

export default React.memo(Carts);