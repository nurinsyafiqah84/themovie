import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MovieCard from '../Movies/MovieCard';

/*const Movies = [
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
]*/

const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(() =>{
        //1st way to get the API
        const fetchMovies = async() =>{
            const response = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=7c68e1cb1635d0fc032672a17095c7fe&language=en-US&page=1')
            const data = await response.json()
            setMovies(data.results)

        }
        fetchMovies()

        //2nd way to get the API
        //fetching action
       /*axios.get('https://api.themoviedb.org/3/tv/popular?api_key=7c68e1cb1635d0fc032672a17095c7fe&language=en-US&page=1').then(response=>{
            //tengok kat console masa run, dia akan display details data--> result
            //console.log(response)

            //nak tengok data sahaja 
            //console.log(response.data.results)
            
            //nak set kan dlm movie array
            setMovies(response.data.results)
       }).catch(err=>{
            console.log(err)
       })*/

       

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