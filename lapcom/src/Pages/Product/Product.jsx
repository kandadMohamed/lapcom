import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Pages/Product/Product.module.scss';
import ClassesHeader from '../../Assets/Styles/Base/Globals.module.scss'; 
import Header from '../../Layouts/Header/Header';
import SingleProduct from '../../Components/SingleProduct/Single-product';
import { getSingelProduct } from '../../Store/Actions/product-actions';

const Product = _ =>{
    const productData = useSelector(state=>state.product);
    console.log("🚀 ~ file: Product.jsx ~ line 16 ~ productData", productData)
    const dispatch = useDispatch();
    const params = useParams();

    useEffect(_=>{
        dispatch(getSingelProduct({productId: params.id}));
    },[]);

    if(
        productData.status === 'success' && 
        !Array.isArray(productData.items) &&  
        typeof productData.items === 'object' &&
        productData.items.hasOwnProperty('IdProduit')
    ){
        return(
            <>
                <Header classStyle={ClassesHeader['header-page']}>
                    <div className={ClassesHeader['header__desc']}>
                        <Container>
                            <h2>
                                <span>
                                    {productData.status === 'success' && productData.items.Title.slice(productData.items.Title.trim().search(' '))}
                                </span> 
                                {productData.status === 'success' && productData.items.Title.slice(0,productData.items.Title.trim().search(' '))}
                            </h2>
                        </Container>
                    </div>
                    <div className={ClassesHeader['breadcrumbs']}>
                        <Container className={ClassesHeader.container}>
                            <Link to='/'>Home</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <Link to='/Devices'>Devices</Link>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <span>{productData.status === 'success' && productData.items.Title}</span>
                        </Container>
                    </div>
                </Header>   
                <main className={Classes['main-content']}>
                    <Container>
                        <SingleProduct productData={productData}/>
                    </Container>
                </main>
            </>
        )
    }
    return(
        <Header classStyle={ClassesHeader['header-page']}>
            <div className={ClassesHeader['header__desc']}>
                <Container>
                    <h2>
                        <span>
                            Single
                        </span> 
                        Product 
                    </h2>
                </Container>
            </div>
            <div className={ClassesHeader['breadcrumbs']}>
                <Container className={ClassesHeader.container}>
                    <Link to='/'>Home</Link>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                    <Link to='/Devices'>Devices</Link>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                    <span>Product</span>
                </Container>
            </div>
        </Header>  
    )   
}

export default Product;