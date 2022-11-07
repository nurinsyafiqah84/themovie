import React from 'react';
import NavBarList from './NavBarList';
import { navItemsLeft, navItemsRight } from './navItems'; 

const NavBar = () => {
    return (
        <nav className="h-16 bg-darkBlue flex text-white font-semibold justify-between items-center gap max-w-[1400px] mx-auto  px-10">
            <NavBarList items={navItemsLeft}/>
            <NavBarList items={navItemsRight}/>

        </nav>
    );
};

export default NavBar;