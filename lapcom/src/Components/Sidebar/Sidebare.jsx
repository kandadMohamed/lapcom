import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col } from 'react-bootstrap';

import Classes from '../../Assets/Styles/Components/Sidebar/Sidebar.module.scss';
import Categorie from './Categorie';
import Search from './Search';
import FilterPrice from './Filter-price';
import FilterColor from './Filter-color';

const Sidebar = _ =>{

    return(
        <Col xs={10} lg={3}>
            <div className={Classes['sidebar']}>
                <Categorie />
                <Search />
                <FilterPrice />
                <FilterColor />
            </div>
        </Col>
    )
}

export default memo(Sidebar);