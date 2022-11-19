import {useRef, useState } from 'react'
import { Movie } from "../../typings"
import Thumbnail from "./Thumbnail"

interface Props {
    title: string
    movies: Movie[]
}
const Row = ({title, movies}:Props) => {


  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    console.log(direction, rowRef.current);
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo({ left: scrollTo,  behavior: 'smooth'})
    }

  }
  return (

    
    <div className="rokoko space-y-0.5 md:space-y-2">
        <h2 className="w-56 cursor-pointer font-semibold text-[#e5e5e5] transition duration-200
                        hover:text-white
                        md:text-2xl">{title}</h2>
        <div className="group relative md:-ml-2" >
            <svg onClick={()=> handleClick('left')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                className={`w-9 h-9 absolute top-0 bottom-0 left-2 m-auto z-40 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 
                            ${!isMoved && "hidden"}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            <div ref={rowRef} className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide
                            md:space-x-2.5 md:p-2">
                {movies.map((movie)=> (
                    <Thumbnail key={movie.id} movie={movie}/>
                ))}

            </div>

            <svg onClick={()=> handleClick('right')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                 className="w-9 h-9 absolute top-0 bottom-0 right-2 m-auto z-40 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    </div>
  )
}

export default Row