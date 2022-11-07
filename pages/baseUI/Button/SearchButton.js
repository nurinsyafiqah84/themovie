import React from 'react';

const SearchButton = () => {
    return (
        <button className='h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-green bg-gradient-to-r from-lightGreen to-lightBlue hover:text-darkBlue'> {/* error takleh gradient*/}
            Search 
        </button>
    );
};

export default SearchButton;