import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../contexts/UserContexts';
import './Header.css'

const Header = () => {
    const { user, LogOut } = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Orders</NavLink>
                <NavLink to="/inventory">Inventory</NavLink>
                <NavLink to="/about">About</NavLink>

                {
                    user?.uid ? < NavLink className='btn-logout' onClick={LogOut}> Log out</NavLink>
                        :
                        <>
                            <NavLink to="/Login">Login</NavLink>
                            <NavLink to="/SingUp">SingUp</NavLink>
                        </>
                }
            </div>

        </nav>
    );
};

export default Header;