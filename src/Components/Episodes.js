import { useEffect, useState } from "react";
import EpisodesCard from "./EpisodesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function Episodes(props) {

    const { id, season } = props
    const [isLoading, setIsLoading] = useState(true)
    const [arrayEpisodes, setArrayEpisodes] = useState([])

    const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`



    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(answer => {
                    setArrayEpisodes(answer.episodes)
                    setIsLoading(false)
                
                })
        }, [season])

    if (isLoading) {
        return <div>Loading...</div>
    }


    if (arrayEpisodes?.length < 1) {
        return <div className="text-xl text-white">No information...</div>
    }

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
            modules={[Navigation]}
            pagination={false}
            className="flex items-center justify-center mt-8"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1336: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
        >
            {arrayEpisodes.map((episode, index) => {
                return (
                    <SwiperSlide key={index} className="flex items-center justify-center text-center">
                        <EpisodesCard id={id} season={season} episode={index+1}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
}