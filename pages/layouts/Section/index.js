import React from 'react';
import Switch from "../../baseUI/Switch"

/*kalau nk guna props, semua yg title kena tukar props*/
const Section = ({title, ...props}) => {
    return (
        /* different []  ngan takde [], 
        [] boleh decide guna px or whatever
        w/o [] kena guna rem or apa yg di fix kan*/
        <section className='pt-[30px] px-10'>
            <div className='flex items-center gap-5'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <Switch {...props}/>
            </div>
        </section>
    );
};

export default Section;