import React, { useState } from 'react';

const Switch = ({items}) => {

    const [isToggled, setToggle] = useState(false)

    const handleToggle = (toggleState) => {
        setToggle(toggleState)
    }

    const activeTextColor = "bg-clip-text text-transparent text-green bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"

    return (
        /*flex nk bagi satu line */
        <div className='hover: cursor-pointer h-8 border-solid border-darkBlue rounded-[30px] border-[1px] font-semibold flex items-center'>
            <div onClick={handleToggle.bind(null, false)} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || activeTextColor}`}>{items[0]}</div>
            <div onClick={() => {handleToggle(true)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeTextColor}`}>{items[1]}</div>
            <div className='h-8 w-20 bg-darkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in' style={
                isToggled?{
                    left:'350px',
                    width:'90px'
                }:{
                    left:'230px',
                    width:'120px'
                }
            }></div>
        </div>
    );
};

export default Switch;