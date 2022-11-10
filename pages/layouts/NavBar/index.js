import React from 'react';
import NavBarList from './NavBarList';
import { navItemsLeft, navItemsRight } from './navItems'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

import {
    faSearch, 
    faPlus
  } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="h-16 bg-darkBlue flex text-white font-semibold justify-between items-center gap max-w-[1300px] mx-auto  px-10">
            {/*<NavBarList items={navItemsLeft}/>
            <NavBarList items={navItemsRight}/>*/}

            <div className='flex gap-7 items-center'>
                <a href='http://localhost:3000/'>
                    <img  className='h-5 min-w-[154px]' src={'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'} alt={'logo'}/>
                </a>
                <div className='overflow-hidden float-left'>
                    <button className='peer relative flex '>Movies</button>
                    <div className='absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black '>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Popular</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Now Playing</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Upcoming</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Top Rated</a> 
                    </div>
                </div>

                <div className='overflow-hidden float-left'>
                    <button className='peer relative flex '>TV Shows</button>
                    <div className='absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black '>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href='#'>Popular</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Airing Today</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>On TV</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Top Rated</a> 
                    </div>
                </div>
                <div className='overflow-hidden float-left'>
                    <button className='peer relative flex '>People</button>
                    <div className='absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black '>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Popular People</a>
                    </div>
                </div>
                <div className='overflow-hidden float-left'>
                    <button className='peer relative flex '>More</button>
                    <div className='absolute hidden peer-focus:block bg-white mt-2 py-2 font-light rounded-md text-black '>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Discussions</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Leaderboard</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>Support</a>
                        <a className='hover:bg-[#dee2e6] p-3 pl-2 pr-[100px] py-1 float-none flex' href=''>API</a> 
                    </div>
                </div>
            </div>
            <div className='flex gap-7 items-center'>
                <a href=''><FontAwesomeIcon icon={faPlus} size='lg' /></a>
                <p className='border-white rounded-[3px] py-[3px] px-[5px] border-[1px] hover:bg-white hover:text-darkBlue'>{'EN'}</p>
                <a href=''>Login</a>
                <a href=''>Join TMDB</a>
                <a href=''><FontAwesomeIcon icon={faSearch} /></a>
            </div>
        </nav>
    ); 
};

export default NavBar;