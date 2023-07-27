import { Routes, Route } from 'react-router-dom';

import Classes from '../../Assets/Styles/Components/Profile/Profile-content.module.scss';
import ProfileInformation from './Profile-information';
import ProfileAdresses from './Profile-adresses';
import ProfileOrders from './Profile-Orders';
import ProfileFormAdresse from './Profile-new-adresse';
import ProfileOrderDetails from './Profile-order-details';

const ProfileContent = _ =>{

    return(
        <Routes>
            <Route path='personal-informations' element={<ProfileInformation />} />
            <Route path='account-adresses' element={<ProfileAdresses />} />
            <Route path='account-adresses/actions' element={<ProfileFormAdresse />} />
            <Route path='account-orders' element={<ProfileOrders />} />
            <Route path='account-orders/order-details/:id' element={<ProfileOrderDetails />} />
        </Routes>
    )
}

export default ProfileContent;