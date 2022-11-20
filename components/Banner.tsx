import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import {FaPlay} from 'react-icons/fa'
interface Props {
    netflixOriginals: Movie[]
}
const Banner = ({netflixOriginals} : Props) => {

    const [movie, setMovie] = useState<Movie | null>();


    useEffect(()=> { 
        setMovie(
            netflixOriginals && netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [netflixOriginals]);

    
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh]
                    lg:justify-end lg:pb-12'>
        <div className='absolute top-0 left-0 h-[95vh] w-screen -z-10'>
           <Image
           priority={true}
           alt="banner"
           src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} 
           fill={true}
           style={{objectFit: "cover"}}
           />
        </div>
        <h1 className='text-2xl md:text-4xl lg:text-7xl font-bold'>
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className='max-w-xs drop-shadow-2xl text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>
            {movie?.overview}
        </p>
        <div className='flex space-x-2'>
            <button className='bannerButton bg-white text-black'>
                <FaPlay className='h-4 w-4 text-black md:h-7 md:w-7' />
                Play
            </button>
            <button className='bannerButton bg-[gray]/80'>
                More info 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </button>
        </div>
    </div>
  )
}

export default Banner
