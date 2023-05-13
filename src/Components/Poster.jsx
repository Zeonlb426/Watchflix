import { useEffect, useState } from "react";
import PosterCard from "./PosterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import PosterVideo from "./PosterVideo";

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

    if (isLoading) return(<h1>Loading ...</h1>)
    if (error !== null) return(<h1>ERROR</h1>)

    const handler = (index) => {
        setIndex(index);
    }
    return (
        <div className="h-screen bg-center bg-cover items-end" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[index].backdrop_path}")`}}>
            <div className='h-screen bg-gradient-to-b from-[#000000b5] from-10% via-transparent via-50% to-black to-80%'>
                <div className='max-w-screen-2xl mx-auto flex flex-col h-screen justify-between'>

                    <div className='mt-28'>
                        <div className=''>
                            <span className='text-4xl md:text-7xl '>
                                {movies[index].title}
                            </span>
                             <p className='max-w-2xl mt-8 text-slate-300'>
                                {movies[index].overview}
                            </p>
                            
                            <div className="flex gap-8 mt-8">
                                <div className='flex items-center gap-2 bg-yellow-500 px-4 py-1 rounded-xl border border-yellow-900'>
                                    <span className='text-slate-600'>Rating:</span>
                                    <span className='font-bold text-black '>{movies[index].vote_average}</span>
                                </div>
                                <div className='flex items-center gap-2 bg-yellow-500 px-4 py-1 rounded-xl border border-yellow-900'>
                                    <span className='text-slate-600'>Vote count:</span>
                                    <span className='font-bold text-black'>{movies[index].vote_count}</span>
                                </div> 
                                <div className='flex items-center gap-2 bg-yellow-500 px-4 py-1 rounded-xl border border-yellow-900'>
                                    <span className='text-slate-600'>Release date:</span>
                                    <span className='font-bold text-black'>{movies[index].release_date}</span>
                                </div>
                            </div>

                            <PosterVideo movieId={movies[index].id}/>
                            
                        </div>
                    </div>

                    <div className=''>
                        <div className='text-4xl mb-6'>Now Popular:</div>
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            grabCursor={true}
                            navigation={true}
                            modules={[Navigation]}
                            pagination={false}
                            className="mx-auto flex flex-row relative w-full p-6"
                            breakpoints={{
                                320: {
                                slidesPerView: 1,
                                spaceBetween: 12,
                                },
                                640: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                                },
                                1024: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                                },
                                1336: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                                },
                            }}
                        >
                            {movies.map((movie, index) => (
                                <SwiperSlide key={movie.id}>
                                    <PosterCard movie={movie} index={index} handler={handler}/>
                                </SwiperSlide>
                            ))}

                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    )
}