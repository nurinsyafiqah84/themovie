import React from 'react';
import { useRef } from 'react';
import SearchInput from "../../baseUI/Input/SearchInput"
import SearchButton from "../../baseUI/Button/SearchButton"

const Banner = () => {
    const searchInputRef = useRef();

    const handleSearch = () =>{
        alert(`You typed ${searchInputRef.current.value}`)
    }

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }

    return (
        <div className='h-[300px] bg-banner bg-cover py-5'>
            <div className='flex flex-col gap-10 px-10 py-10'>
                <div className='text-white'>
                    <h2 className='font-extrabold text-5xl'>Welcome.</h2>
                    <h3 className='font-semibold text-[2rem] leading-1'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className='relative '>
                    <SearchInput ref={searchInputRef} onKeyDown={handleKeyDown}/>
                    <div className='absolute top-0 right-0'>
                        <SearchButton onClick = {handleSearch}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;