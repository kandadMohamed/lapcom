import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Col } from "react-bootstrap";

import Classes from '../../../Assets/Styles/Components/Admin/products/filter-products.module.scss';
import { CardAdmin } from '../../UI/Card';
import SelectFilter from '../../UI/Select-react';
import ButtonFilter from '../../UI/Button';
import { filterActions } from '../../../Store/Slice/Filter-slice';

const dataFilterPrice = [
    { label: 'Desc', value: 'desc' },
    { label: 'Asc', value: 'asc' }
]
const dataProductPage = [
    { label: '5', value: '5' },
    { label: '10', value: '10' },
    { label: '15', value: '15' },
    { label: '20', value: '20' },
    { label: '25', value: '25' },
    { label: '30', value: '30' }
]

const FilterProducts = _ =>{
    const dispatch = useDispatch();
    
    const { filterBySortPrice, numberProductPage, numberPage } = filterActions;

    useEffect(_=>{
        dispatch(numberProductPage(5));
    })

    const onSelectShowProductOnPageChange = value =>{
        dispatch(numberProductPage(value.value));
    }
    const onSelectSortPriceChangeHandler = value=>{
        dispatch(filterBySortPrice(value.value))
    }

    return(
        <Col md={12} className={Classes['bar-filter']}>
            <CardAdmin classStyle={Classes['card']}>
                <div>
                    <p>All Products</p>
                    <SelectFilter 
                        classStyle={Classes['select-style']} 
                        data={dataFilterPrice} 
                        placeholder='Sort By'
                        changeHandler={onSelectSortPriceChangeHandler}
                    />
                    <SelectFilter 
                        classStyle={Classes['select-style']} 
                        defaultValue={{ label: '5', value: '5' }} 
                        data={dataProductPage} 
                        changeHandler={onSelectShowProductOnPageChange}
                    />
                </div>
                <ButtonFilter variante='btn-blue'>
                    Delete
                </ButtonFilter>
            </CardAdmin>
        </Col>
    )
}

export default FilterProducts;