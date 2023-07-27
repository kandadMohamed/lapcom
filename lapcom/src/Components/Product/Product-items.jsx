import { useEffect, } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Products/Products-items.module.scss';
import ProductLoading from '../UI/Product-loading';
import { CartShopping } from '../UI/icon-Svg';
import ProductEtat from '../UI/Product-etat';
import { getProductsIdCategorie } from '../../Api/product-api';
import { addCartItem } from '../../Store/Actions/cart-actions';
import useHttp from '../../Hooks/use-Http';

// ? =================== Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay])

const ProductsItems = props =>{
    const dispatch = useDispatch();
    const { 
        sendRequest, 
        data,
        status,
        error
    } = useHttp(getProductsIdCategorie,true)
    const { items } = props;

    // ? ================== 
    const swiperProps = {
        spaceBetween: 0,
        slidesPerView: 2,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            992:{       
                slidesPerView: 2   
            },
            768:{
                slidesPerView: 3
            },
            576:{
                slidesPerView: 2
            }
        }

    }

    useEffect(_=>{
        sendRequest(1)
    },[sendRequest])

    const onAddCartItemHandler = item =>{
        dispatch(addCartItem(item));
    }
    
    let  contentProductItem = '';
    if(status === 'pending' || status === 'error' || !data || data.length <= 0){
        return <div className={Classes['column-product-loading']}>
                <ProductLoading />
                <ProductLoading />
            </div>
    }else{
        contentProductItem = items.map((item,index) =>{
                                const { IdCat, IdProduit, Title, desc, Photo, Prix, TauxPromotion,QteStock, Date } = item;

                                return <SwiperSlide key={index} className={Classes['slide-product']}>

                                            {/* <img src={require(`../../Assets/Img/Products/${Photo.toLowerCase()}.jpg`)} alt="" /> */}
                                            <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" />

                                            <ProductEtat 
                                                promotion={TauxPromotion}
                                                quantity={QteStock}
                                                dateAdd={Date}
                                                classStyle={Classes['slide-product__etat']}
                                            />

                                            <div className={Classes['slide-product__desc']}>
                                                <h6>{Title}</h6>
                                                <span className={Classes.price}>
                                                    ${Prix}
                                                </span>
                                            </div>

                                            <div className={Classes.overlay}>
                                                <div className={Classes['overlay__actions']}>
                                                    <span onClick={_=>onAddCartItemHandler(item)}>
                                                        <CartShopping />
                                                    </span>
                                                    <Link to={`/product/${IdProduit}`}>
                                                        <FontAwesomeIcon icon={faListUl}/>
                                                    </Link>
                                                </div>
                                            </div>

                                        </SwiperSlide>
                            })
    }
    
    return(
        <Swiper 
            className={Classes['slider-products']} 
            { ...swiperProps }
        >
            {contentProductItem}
        </Swiper>
    )
}

export default ProductsItems;