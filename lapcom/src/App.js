import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'

import RouteIndex from './Routes/Index';
import Header from './Layouts/Header/Header';
import Navbar from './Layouts/Navbar/NavBar';
import Footer from './Layouts/Footer/Footer';
import { authActions } from './Store/Slice/auth-slice';

function App() {
  const dispatch = useDispatch();
  const pathName = window.location.pathname;
  const dataAuth = useSelector(state=>state.auth);

  // console.log(pathName.includes('/admin') )

  useEffect(_=>{
    const accountUser = localStorage.getItem('accountLapCom');
    if(accountUser){
      dispatch(authActions.logIn(
        JSON.parse(accountUser)
      ));
    }
  },[])

  return (
    <>
      {
        !pathName.includes('/admin') && <Navbar />
      }
      {/* <Navbar /> */}
      <RouteIndex />
      {/* <Footer /> */}
      {
        !pathName.includes('/admin') && <Footer />
      }
    </>
  );
}

export default App;
