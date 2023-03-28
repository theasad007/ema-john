import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-inner'>
                <img src={logo} alt="" />
                <ul>
                    <li> <a href="#order"> Order</a></li>
                    <li> <a href="#order-review"> Order Review</a></li>
                    <li> <a href="#manage-inventory"> Manage Inventory</a></li>
                    <li> <a href="#login"> Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;