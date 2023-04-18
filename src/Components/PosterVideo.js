import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function PosterVideo(props) {

    const { movie } = props;

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = () => {
            fetch("https://api.themoviedb.org/3/movie/"+movie.id+"/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US")
            .then(res => res.json())
            .then(
                (answer) => {
                    setVideos(answer.results);
                    setLoading(false)
                }
            )
        }
        fetchData();
    }, [movie])

    const opts = {
        height: '160',
        width: '250',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
        //   autoplay: 1,
        },
    }

    if (loading) return(<div>Loading...</div>)

    return (
        <div className="mt-8">
            <div className='flex'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation={true}
                    modules={[Navigation]}
                    pagination={false}
                    className="flex flex-row relative w-full p-6"
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
                    {videos.map((video, index) => (
                        <SwiperSlide key={index}>
                            <YouTube videoId={video.key} opts={opts} />          
                        </SwiperSlide>
                      
                    ))}
                </Swiper>

            </div>
        </div>
    )
}