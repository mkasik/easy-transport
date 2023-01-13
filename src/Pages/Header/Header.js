import React from 'react';
import { Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <div>
           <Outlet></Outlet>

        </div>
    );
};

export default Header;