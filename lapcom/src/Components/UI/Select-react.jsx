import { forwardRef } from 'react';
import Select from 'react-select';

import '../../Assets/Styles/Components/Sidebar/Selectpicker.scss';

const SelectBox = forwardRef((props,ref) =>{
    const { data, placeholder, classStyle, changeHandler, defaultValue, name } = props;
    
    return(
        <Select 
            options={data} 
            placeholder={placeholder}
            className={classStyle}
            onChange={changeHandler}
            // value={defaultValue}
            ref={ref}
            name={name}
            // defaultInputValue={'10'}
            defaultValue={defaultValue}
        />
    )
});

export default SelectBox;