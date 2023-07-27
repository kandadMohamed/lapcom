import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


import Classes from '../../Assets/Styles/Pages/Home/Home.module.scss';
import ProductsItems from '../../Components/Product/Product-items';
import ProductLoading from '../../Components/UI/Product-loading'; 
import { getAllCategorie } from '../../Store/Actions/categorie-actions';
import { getProductsByCategorie } from '../../Store/Actions/product-actions';
import Header from '../../Layouts/Header/Header';

const Home = _ =>{
    const dataCategorie = useSelector(state=>state.categorie);
    const dataAuth = useSelector(state=>state.auth);
    const dataProduct = useSelector(state=>state.product);
    const dispatch = useDispatch();
    const { categories, status, error } = dataCategorie;

    useEffect(_=>{
        dispatch(getAllCategorie());
        dispatch(getProductsByCategorie());
        document.title = 'Lap Com'
    },[])

    let contentRender = '';

    const categorieLoaded = <Row className={Classes['loading']}>
                                <Col xl={{ span: 6}} className={`${Classes['column-product']} ${Classes['products']} ${Classes['categorie']}`}>
                                    <ProductLoading style={{width: '100%'}}/>
                                </Col>
                                <Col xl={6} className={`${Classes['column-product']} ${Classes['products']}`}>
                                    <ProductLoading />
                                    <ProductLoading />
                                </Col>
                            </Row> 
    
    if(status === 'pending' || status === 'error'){
        contentRender = categorieLoaded;
    }

    if(status === 'success' && categories.length > 0 && Object.keys(dataProduct.items).length > 0){
        contentRender = categories.map((categorie, index)=>{
                            const { Img, Title, IdCat } = categorie;
                            const order = index%2 === 0 ? 0 : 1;   
                            const productCategorie = dataProduct.items[`cat-${IdCat}`];

                            if(productCategorie){
                                return <Row key={index}>
                                            <Col 
                                                xl={{ span: 6, order: order }} 
                                                className={`${Classes['column-product']} ${Classes['categorie']}`}
                                            >
                                                <img src={`http://localhost:8000/products/${Img.toLowerCase()}.jpeg`} alt="" />
                                                <Link to='/product?categorie=drone'>
                                                    <h2>{Title.toUpperCase()}</h2>
                                                    <span>COLLECTION</span>
                                                </Link>
                                            </Col>
                                            <Col xl={6} className={Classes['column-product']}>
                                                <ProductsItems 
                                                    idCat={categorie.id}
                                                    items={productCategorie}
                                                />
                                            </Col>
                                        </Row>
                            }
                        })
    }else{
        contentRender = categorieLoaded;
    }

    const categorieRender = status === 'success';

    return(
        <>  
            <Header classStyle={Classes['header-home']}>
                <div className={Classes['header-home__desc']}>
                    <h2>TECH GADGETS</h2>
                    <h3>ONLINE STORE</h3>
                </div>
            </Header>
            <div className={Classes['home-content']}>
                <Container fluid className='fluid'>
                    {contentRender}
                </Container>
            </div>
        </>
    )
}

export default Home