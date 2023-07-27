import { useRef } from 'react';
import {  useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Classes from '../../Assets/Styles/Components/Sidebar/Sidebar.module.scss';
import Styled from '../../Assets/Styles/Components/Sidebar/Search.module.scss';
import Input from '../UI/Input';
import { filterActions } from '../../Store/Slice/Filter-slice';

const Search = _ =>{
    const nameProductRef = useRef();
    const dispatch = useDispatch();
    
    const onFilterByNameHandler = e=>{
        e.preventDefault();
        const nameProductValue = nameProductRef.current.value;
        dispatch(
            filterActions.filterByNameProduct(nameProductValue)
        )
    } 

    return(
        <div className={Styled['sidebar__search']}>
            <h4 className={Classes['sidebar__title']}>Search</h4>
            <form action="">
                <Input type='text' placeholder='Search Products ...' ref={nameProductRef}/>
                <button type='submit' onClick={onFilterByNameHandler}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </div>
    )
}

export default Search;