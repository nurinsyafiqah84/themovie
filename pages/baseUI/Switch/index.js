import React, { useState, useRef, useLayoutEffect } from 'react';

const Switch = ({items, onToggle}) => {

    const [isToggled, setToggle] = useState(false);
    const [item1Width, setItem1Width] = useState();
    const [item2Width, setItem2Width] = useState();
    const item1Ref = useRef();
    const item2Ref = useRef();

    useLayoutEffect(() =>{
        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth)
    },[])

    const handleToggle = (toggleState) => {
        setToggle(toggleState)
    }

    onToggle(isToggled?items[1]:items[0]);

    const activeTextColor = "bg-clip-text text-transparent text-green bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"

    return <div className='hover: cursor-pointer h-8 border-solid border-darkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative'>
        <div ref={item1Ref} onClick={handleToggle.bind(null, false)} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || activeTextColor}`}>{items[0]}</div>
        <div ref={item2Ref} onClick={() => {handleToggle(true)}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && activeTextColor}`}>{items[1]}</div>
        <div className='h-8 w-20 bg-darkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in' style={
            isToggled?{
                left:`${item1Width}px`,
                width:`${item2Width+2}px`
            }:{
                left:'0',
                width:`${item1Width}px`
            }
        }></div>
    </div>
}

export default Switch;