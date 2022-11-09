import React, { useEffect, useState } from 'react';
import MovieCard from '../Movies/MovieCard';

const Movies = [
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
    {
        title: 'The Boys',
        date: 'Jul 25, 2019',
        imageUrl: 'https://www.themoviedb.org/t/p/w220_and_h330_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg'
    },
]

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        //fetching action
        const movieData = Movies;
        setMovies(()=>{
            return movieData
        });
    },[])

    return (
        <div className='flex pb-5 px-5 overflow-x-scroll'>
            {movies.map((movie,index)=>{
                return <MovieCard key={index} {...movie}/>

            })} 
        </div>
    );
};

export default MovieList;