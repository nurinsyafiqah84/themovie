//toggle part
import React from 'react';
import Switch from "../../baseUI/Switch"

/*kalau nk guna props, semua yg title kena tukar props*/
const Section = ({title, children, ...props}) => {
    return (
        /* different []  ngan takde [], 
        [] boleh decide guna px or whatever
        w/o [] kena guna rem or apa yg di fix kan*/
        <section className='pt-[30px]'>
            <div className='flex items-center gap-5 px-10'>
                    <h2 className='font-semibold text-2xl'>{title}</h2>
                    <Switch {...props}/>
            </div>
            <div className='pt-5'>
                {children}
            </div>
        </section>
    );
};

export default Section;