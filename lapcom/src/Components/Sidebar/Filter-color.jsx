

import Classes from '../../Assets/Styles/Components/Sidebar/Sidebar.module.scss';
import Styled from '../../Assets/Styles/Components/Sidebar/Filter-price.module.scss';
import SelectFilterColor from '../UI/Select-react';

const FilterColor = _ =>{
    const Countries = [
        { label: "Blue", value: 355 },
        { label: "Green", value: 54 },
        { label: "Red", value: 43 }
    ];
    
    return(
        <div className={Styled['sidebar-filter-price']}>
            <h4 className={Classes['sidebar__title']}>Filter By Color</h4>
            <SelectFilterColor 
            data={Countries}
            placeholder='Any Color'/>
        </div>
    )
}

export default FilterColor;