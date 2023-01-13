import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/rent'>Rent</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                        </ul>
                    </div>

                    <div className="avatar">
                        <div className="w-10 mask mask-squircle">
                            <img src="https://marketplace.canva.com/EAE6-H0xR7I/2/0/1600w/canva-black-simple-transport-design-logo-8RyNsCXb64k.jpg" alt='/' />
                        </div>
                        <Link className="normal-case text-xl ml-2">Easy Transport</Link>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/rent'>Rent</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/signup'>SignUp</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;