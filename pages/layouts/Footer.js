import React from 'react';
{/*Nota 
    md - responsive modifier min width 768px
    p-? tu means padding *
    m-? tu margin *

    * akan tambah sebelum -
    b-bottom
    r-right
    t-top
    l-left
*/}

const Footer = () => {
    return (
       <footer className="text-left p-8 text-white bg-darkBlue ">
            <div className="md:flex md:justify-center flex items-end mb-6 md:mb-10 ">
                {/*untuk 3 column*/}
                <div className='mr-10'>
                    <a href='#' className='flex items-end mb-10'>
                        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Databse (TMDB)" width="130" height="130" ></img>
                    </a>
                    <button className='rounded p-2.5 px-5 font-sans font-bold text-lightBlue bg-white '>JOIN THE COMMUNITY</button>
                </div>  
                <div className='flex items-start '>
                    <div className='mr-10'>
                        <h3 className='font-bold '>THE BASICS </h3>
                        <ul>
                            <li><a href=""></a>About TMDB</li>
                            <li>Contact Us</li>
                            <li>Support Forum</li>
                            <li>API</li>
                            <li>System Status</li>

                        </ul>
                    </div>
                    <div className='mr-10'>
                        <h3 className='font-bold'>GET INVOLVED </h3>
                        <ul>
                            <li>Contribution Bible</li>
                            <li>Add New Movie</li>
                            <li>Add New TV Show</li>
                        </ul>
                    </div>
                    <div className='mr-10'>
                        <h3 className='font-bold'>COMMUNITY </h3>
                        <ul>
                            <li>Guidelines</li>
                            <li>Discussions</li>
                            <li>Leaderboad</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div className='mr-10'>
                        <h3 className='font-bold'>LEGAL </h3>
                        <ul>
                            <li>Term of Use</li>
                            <li>API Terms of Use</li>
                            <li>Provacy Policy</li>
                        </ul>
                    </div>
                </div>                        
                
            </div>
        </footer>
    );
};

export default Footer;