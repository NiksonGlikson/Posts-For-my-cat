import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import MyButton from "../button/MyButton";
import {AuthContext} from '../../../context/context';


const NavBar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>
        EXIT
      </MyButton>
      <div className="navbar__links">
        <Link style={{margin: '50px'}} to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default NavBar;
