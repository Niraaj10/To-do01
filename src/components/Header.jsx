import React from 'react'
import Menu from '../assets/svg/hamburger.svg'
import logo from '../assets/svg/logo.svg'
import search from '../assets/svg/search.svg'
import appgrid from '../assets/svg/appgrid.svg'
import moods from '../assets/svg/darkmood.svg'
import Logout from './auth/Logout'
import logoutt from '../assets/svg/logout.svg'
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";


const Header = ({ toggleSidebar }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
      };
  return (
    <>
        <header className='w-full p-4 px-4 md:px-14 lg:px-14 flex justify-between items-center fixed top-0 z-10 border-b border-green-200 backdrop-blur-lg'>
            <div className='flex gap-6 items-center'>
                <div><img src={Menu} alt="" onClick={toggleSidebar}/></div>
                <div><img src={logo} alt="" /></div>
                
            </div>
            <div>
                <ul className='flex gap-2 md:gap-6 lg:gap-6 items-center'>
                    <li><img src={search} alt="" /></li>
                    <li><img src={appgrid} alt="" /></li>
                    <li><img src={moods} alt="" /></li> 
                    <li><img src={logoutt} alt="" className="w-6 cursor-pointer" onClick={handleLogout} /></li> 
                    
                    {/* <li><Logout /></li>                    */}
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header
