import React from 'react';

const SearchButton = (props) => {
    return (
        <button {...props} className='h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-green bg-gradient-to-r from-lightGreen to-lightBlue hover:text-darkBlue inline-flex justify-center items-center'> {/* error takleh gradient*/}
            Search 
        </button>
    );
};

export default SearchButton;