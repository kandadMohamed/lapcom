import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


import Classes from '../../Assets/Styles/Pages/Devices/Devices.module.scss';
import Sidebar from '../../Components/Sidebar/Sidebare';
import ProductsList from '../../Components/ProductsList/Products-List';
import HeaderDevices from '../../Layouts/Header/Header-pages';

const Devices = _ =>{

    useEffect(_=>{
        document.title = 'Devices - Lap Com';
    },[])
    
    return(
        <>
            <HeaderDevices 
                headingSpan='CREATIVE'
                heading='SHOP'
                headerLinks={[
                    {title: 'Devices'}
                ]}
            />

            <div className={Classes['main-content']}>
                <Container>
                    <div className={Classes['page-breadcrumbs']}>
                        <Link to='/'>Home</Link>
                        <FontAwesomeIcon icon={faAngleRight} />
                        <span>Devices</span>
                    </div>
                    <Row className={Classes['row']} style={{justifyContent: 'space-between'}}>
                        <Sidebar />
                        <ProductsList />
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Devices;