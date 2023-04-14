import { useEffect, useState } from "react";
import PosterCard from "./PosterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
// import { Pagination } from "swiper";

export default function Poster() {

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const storedMovies = localStorage.getItem("popular");
        const liveTimeMovies = localStorage.getItem("popularTimestamp");

        const fetchData = () => {
            console.log('Запрос отправлен');
            fetch("https://api.themoviedb.org/3/movie/popular?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
            // fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1")
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

        if (!storedMovies) {
            fetchData();
        }else{
            setMovies(JSON.parse(localStorage.getItem("popular")));
            setIndex(Math.round(Math.random() * 19));
            setIsLoading(false);
        }

      }, [])

    if (isLoading) return(<h1>Loading ...</h1>)
    if (error !== null) return(<h1>ERROR</h1>)

    return (
        <div className="h-screen bg-center bg-cover items-end" style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${movies[index].backdrop_path}")`}}>
            <div className='h-screen flex items-end bg-gradient-to-b from-transparent from-70% to-black to-90%'>
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
                        slidesPerView={4}
                        spaceBetween={30}
                        grabCursor={true}
                        navigation={true}
                        modules={[Navigation]}
                        pagination={false}
                        className="mx-auto flex flex-row relative w-full"
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                              slidesPerView: 1,
                              spaceBetween: 12,
                            },
                            // when window width is >= 480px
                            // 480: {
                            //   slidesPerView: 2,
                            //   spaceBetween: 24,
                            // },
                            // when window width is >= 640px
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 12,
                            },
                            1024: {
                              slidesPerView: 4,
                              spaceBetween: 16,
                            },
                            1336: {
                              slidesPerView: 5,
                              spaceBetween: 30,
                            },
                          }}
                    >
                        {movies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <PosterCard movie={movie}/>
                            </SwiperSlide> 
                        ))}

                    </Swiper>
                    {/* </div> */}

                </div>
            </div>
            
        </div>
    )
}