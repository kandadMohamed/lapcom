import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';

import Classes from '../../Assets/Styles/Components/ProductsList/Products-list.module.scss';
import ProductItems from './Product-items';
import SelectBox from '../UI/Select-react';
import { getAllProducts } from '../../Store/Actions/product-actions';
import { productAction } from '../../Store/Slice/products-slice';
import { filterActions } from '../../Store/Slice/Filter-slice';

const dataSort = [
    { label: "Sort by average rating", value: 'rating' },
    { label: "Sort by price: low to high", value: 'desc' },
    { label: "Sort by price: high to low ", value: 'asc' },
]

const dataShowOnPage = [
    { label: "Show 12 on page", value: 12 },
    { label: "Show 24 on page", value: 24 },
    { label: "Show 48 on page", value: 48 }
]

const ProductsList = _ =>{
    const productData = useSelector(state=>state.product);
    const filterData = useSelector(state=>state.filter);
    const dispatch = useDispatch();

    const { 
        error,
        items,
        productCount,
        status
    } = productData;

    const { filterBySortPrice, numberProductPage, numberPage } = filterActions;
    
    useEffect(_=>{
        dispatch(getAllProducts(filterData));
    },[filterData])

    const onSelectShowProductOnPageChange = value =>{
        dispatch(numberProductPage(value.value));
    }
    const onSelectSortPriceChangeHandler = value=>{
        dispatch(filterBySortPrice(value.value))
    }
    const onPaginationChangeHandler = e=>{
        console.log('first');
        dispatch(numberPage(e.selected));
    }

    return(
        <Col xs={12}  lg={9}>
            <Row>
                <Col style={{padding: '0 22px'}}>
                    <div className={Classes['product-sort']}>
                        <SelectBox 
                            data={dataSort} 
                            classStyle={Classes.select}
                            placeholder='Sort by popularity'
                            changeHandler={onSelectSortPriceChangeHandler}
                        />
                        <div className={Classes['showing-on-page']}>
                            <p>Showing all 8 results</p>
                            <SelectBox 
                                data={dataShowOnPage} 
                                classStyle={Classes.select}
                                placeholder='Show 12 On Page'
                                changeHandler={onSelectShowProductOnPageChange}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{justifyContent: 'space-between'}}>
                <ProductItems 
                    // numberPage={paginate.numberPage} 
                    // numberProductInPage={paginate.numberProductInPage}
                    productData={productData}
                />
            </Row>
            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faArrowLeft}/>}
                nextLabel={<FontAwesomeIcon icon={faArrowRight}/>}
                containerClassName={Classes['container-paginate']}
                onPageChange={onPaginationChangeHandler}
                pageCount={Math.ceil(productCount / filterData.numberProductInPage)}
            />
        </Col>
    )
}

export default ProductsList;