import { useEffect, useState } from "react";

import PosterVideo from "../Components/PosterVideo";
import InfoSpan from "../Components/Infospan";
import Carousel from "../Components/Carousel";

export default function Poster() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const liveTimeMovies = localStorage.getItem("popularTimestamp");
        const fetchData = () => {
            // fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
            fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
            .then(res => res.json())
            .then(
                (answer) => {
                    setMovies(answer.results);
                    setIndex(Math.round(Math.random() * 19));
                    localStorage.setItem("popular", JSON.stringify(answer.results));
                    localStorage.setItem("popularTimestamp", new Date().getTime());
                    setIsLoading(false);
                },
                (error) => {
                    setIsLoading(true);
                    setError(error);
                }
            )
        }

        if ((new Date().getTime() - liveTimeMovies) > 3600000) {
            localStorage.removeItem("popular");
            localStorage.removeItem("popularTimestamp");
        }

        if (!localStorage.getItem("popular")) {
            fetchData();
        }else{
            setMovies(JSON.parse(localStorage.getItem("popular")));
            setIndex(Math.round(Math.random() * 19));
            setIsLoading(false);
        }

    }, [])

    if (isLoading) return(
        <div className='h-screen w-full text-center items-center justify-center'>
            <h1>Loading ...</h1>
        </div>
    )
    if (error !== null) return(
        <div className='h-screen w-full text-center items-center justify-center'>
            <h1>ERROR</h1>
        </div>
    )

    const handler = (index) => {
        setIndex(index);
    }
    return (
        <div className="h-screen bg-center bg-cover items-end " style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[index].backdrop_path}")`}}>
            <div className='h-screen bg-gradient-to-b from-[#000000b5] from-10% via-transparent via-50% to-black to-80%'>
                <div className='w-full max-w-screen-2xl mx-auto flex flex-col h-screen justify-between px-4 sm:px-10'>
                    <div className=' mt-16 md:mt-24 mt'>
                        <div className=''>
                            <span className='text-3xl md:text-7xl '>{movies[index].title}</span>
                             <p className='max-w-2xl mt-4 md:mt-8 text-slate-300 max-h-48 overflow-hidden'>{movies[index].overview}</p>
                            <div className="flex flex-wrap gap-4 mt-8 justify-center sm:justify-start">
                                <InfoSpan label={'Rating:'} value={movies[index].vote_average}/>
                                <InfoSpan label={'Vote:'} value={movies[index].vote_count}/>
                                <InfoSpan label={'Release:'} value={movies[index].release_date}/>
                            </div>
                            <PosterVideo movieId={movies[index].id}/>
                        </div>
                    </div>
                    <Carousel slidesPerView={4} arrayElements={movies} handler={handler}/>
                </div>
            </div>
        </div>
    )
}