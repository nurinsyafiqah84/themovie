import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component

// import the icons you need
import {
  faSearch, 
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const NavBarList = ({items}) => {
    
    const getItem = (item) =>{
        let itemList = null;
        switch(item.type){
            case 'logo':
                itemList = <img  className='h-5 min-w-[154px]' src={item.src} alt={item.name}/>
                break;
            case 'language':
                itemList = <p className='border-white rounded-[3px] py-[3px] px-[5px] border-[1px] hover:bg-white hover:text-darkBlue'>{item.name}</p>
                break;
            case 'icon':
                if (item.name == 'faSearch'){
                    itemList = <FontAwesomeIcon icon={faSearch} />
                }
                if (item.name == 'plus'){
                    itemList = <FontAwesomeIcon icon={faPlus} size='lg' />
                }
                break;
            default:
                itemList = <p>{item.name}</p>
                break;
        }
        return itemList
    }
    return (
        <ul className='flex gap-7 items-center'>
            {items.map(item=>{
                return <li key={item.name}>{getItem(item)}</li>
                
            })}
        </ul>
    );
};

export default NavBarList;