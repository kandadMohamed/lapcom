import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

import Classes from '../../Assets/Styles/Components/Sidebar/Sidebar.module.scss';
import Styled from '../../Assets/Styles/Components/Sidebar/Filter-price.module.scss';
import Button from '../UI/Button';
import { filterActions } from '../../Store/Slice/Filter-slice';

const FilterPrice = _ =>{
    const dispatch = useDispatch();
    const [rangePrice, setRangePrice] = useState({
        minPrice: 0,
        maxPrice: 1000
    })
    
    const rangePriceChnageHandler = prices =>{
        setRangePrice({
            minPrice: prices[0],
            maxPrice: prices[1]
        })
    }

    const onPriceRangeFilterHandler = _=>{
        dispatch(filterActions.filterByPrice(
            {
                min: rangePrice.minPrice,
                max: rangePrice.maxPrice,
            }
        ))
    }
    return(
        <div className={Styled['sidebar-filter-price']}>
            <h4 className={Classes['sidebar__title']}>Filter By Price</h4>
            <div className={Classes['range-price']}>
                <Slider 
                range 
                defaultValue={[0, 1000]} 
                min={0} 
                max={1000}
                trackStyle={{ backgroundColor: '#99a9b5' }}
                handleStyle={{
                    borderColor: '#37bdd3',
                    backgroundColor: '#37bdd3',
                    opacity: 1
                }}
                onChange={rangePriceChnageHandler}
                />
            </div>
            <div className={Styled['price-slider-amount']}>
                <Button
                    variante='btn-blue__outline'
                    clickHandler={onPriceRangeFilterHandler}
                >FILTER</Button>
                <p>
                    Price: <span>${rangePrice.minPrice}</span> - <span>${rangePrice.maxPrice}</span>
                </p>
            </div>
        </div>
    )
}

export default FilterPrice;