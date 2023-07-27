import { Routes, Route } from "react-router-dom"

import Login from "../Pages/Login/Login";
import Home from '../Pages/Home/Home';
import Devices from "../Pages/Devices/Devices";
import Product from '../Pages/Product/Product';
import Carts from "../Pages/Carts/Cart";
import CheckOut from '../Pages/CheckOut/Check-out';
import OrderConfirm from "../Pages/CheckOut/Order-confirm";
import Profile from "../Pages/Profile/Profile";
import ProfileInformation from "../Components/Profile/Profile-information";
import PageResetPass from '../Components/Account/Form-reset-password';
import Admin from '../Pages/Admin/index';

const routeIndex = props =>{

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/login/*' element={<Login />}/>
                <Route path='/devices' element={<Devices />}/>
                <Route path='/product/:id' element={<Product />}/>
                <Route path='/cart' element={<Carts />}/>
                <Route path='/checkout' element={<CheckOut />} />
                <Route path='/checkout/order-received' element={<OrderConfirm />} />
                <Route path='/profile/*' element={<Profile />} />
                <Route path='/admin/*' element={<Admin />} />
            </Routes>
        </>
    )
}

export default routeIndex;