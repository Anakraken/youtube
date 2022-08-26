import React from 'react';
import MainNav from './components/MainNav';
import SideNav from './components/SideNav';

const Navbar = ({dark, setDark}) => (
    <>
    <MainNav 
    dark={dark} 
    setDark={setDark}
    />

    <input type="checkbox" id="btn-menu"/>
    
    <SideNav />
    </>
);

export default Navbar;