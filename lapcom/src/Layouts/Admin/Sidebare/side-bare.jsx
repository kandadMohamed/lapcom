import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Col } from "react-bootstrap";
import { 
    faChartSimple, 
    faReceipt, 
    faTruck
} from '@fortawesome/free-solid-svg-icons';

import Classes from '../../../Assets/Styles/Layouts/Sidebare/sidebare.module.scss'; 
import SideBareItem from './Side-bare-item';

const Sidebare = _ =>{
    
    return(
        <Col md={2}>
            <div className={Classes['sidebare-header']}>
                <Link to='/admin/dashboard'>
                    <img src={require('../../../Assets/Img/logo-black.png')} alt="" />
                    {/* <img src={`http://localhost:8000/products/${Photo.toLowerCase()}`} alt="" /> */}
                    LapCom
                </Link>
            </div>
            <div className={Classes['sidebare-body']}>
                <div className={Classes['sidebare-user']}>
                    <div className={Classes['user-name']}>Kandad Mohamed</div>
                    <small className={Classes['user-role']}>Sales Manager</small>
                </div>
                <ul>
                    <li className={Classes['menu-divider']}>E-Commerce</li>
                    <SideBareItem title='Dashboard' icon={faChartSimple}/>
                    <SideBareItem 
                        title='Orders' 
                        icon={faReceipt}
                        items={[
                            {
                                title: 'List',
                                path: 'list'
                            },
                            {
                                title: 'Detail',
                                path: 'detail'
                            }
                        ]}
                    />
                    <SideBareItem 
                        title='Products' 
                        icon={faTruck}
                        items={[
                            {
                                title: 'List Products',
                                path: 'list'
                            },
                            {
                                title: 'Manage product',
                                path: 'manage?type=add'
                            }
                        ]}
                    />
                </ul>
            </div>
        </Col>
    )
}

export default Sidebare;