import { useEffect, useState } from "react";
import PosterCard from "./PosterCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Poster() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        // fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
        fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
          .then(res => res.json())
          .then(
            (answer) => {
                setMovies(answer.results);
                setIndex(Math.round(Math.random() * 19));
                setIsLoading(false);
            },
            (error) => {
                setIsLoading(true);
                setError(error);
            }
          )
      }, [])

    if (isLoading) return(<h1>Loading ...</h1>)
    if (error !== null) return(<h1>ERROR</h1>)

    return (
        <div className="h-screen bg-center bg-cover items-end" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[index].backdrop_path}")`}}>
            <div className='h-screen flex items-end bg-gradient-to-r from-transparent via-transparent to-black'>
                <div className='max-w-screen-2xl mx-auto'>
{/* 
                    <div className=''>
                        <div className=''>
                            <span className=''>
                                {movies[index].original_title}
                            </span>
                            <p className=''>
                                {movies[index].overview}
                            </p>
                            <div className=''>
                                <span className=''>Release date:</span>
                                <span className=''>{movies[index].release_date}</span>
                            </div>
                            <div className=''>
                                <span className=''>Rating:</span>
                                <span className=''>{movies[index].vote_average}</span>
                            </div>
                            <div className=''>
                                <span className=''>Vote count:</span>
                                <span className=''>{movies[index].vote_count}</span>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className='flex'> */}
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={30}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {movies.map((movie) => (
                            <SwiperSlide>
                                <PosterCard movie={movie} key={movie.id}/>
                            </SwiperSlide> 
                        ))}

                    </Swiper>
                    {/* </div> */}

                </div>
            </div>
            
        </div>
    )
}