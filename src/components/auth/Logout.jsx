import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import logoutt from '../../assets/svg/logout.svg'

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return <button onClick={handleLogout}>
    {/* Logout */}
    <img src={logoutt} alt="" className="w-6"/>
  </button>;
};

export default Logout;
