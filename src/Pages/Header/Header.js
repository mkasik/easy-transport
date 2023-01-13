import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';


const Header = () => {
    return (
        <div>
           <Banner></Banner>

        </div>
    );
};

export default Header;