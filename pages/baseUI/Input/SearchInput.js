import React from 'react';

const SearchInput = () => {
    return (
        <input type="text" className='w-full h-11 rounded-[8rem] outline-non px-5  py-3 placeholder:text-slate-500 text-[1.1rem] text-black/50' placeholder='Search for a movie, tv show, person......'></input>
    );
};

export default SearchInput;