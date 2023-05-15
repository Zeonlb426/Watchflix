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
        }, [season]
    )

    if (isLoading) {
        return <div>Loading...</div>
    }


    if (arrayEpisodes?.length === 0) {
        return <div className="text-xl text-white h-[228px] mb-10 mt-8">No information...</div>
    }

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            grabCursor={true}
            navigation={true}
            modules={[Navigation]}
            pagination={false}
            className="p-4"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                },
                1336: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }}
        >
            {arrayEpisodes.map((episode, index) => {
                return (
                    <SwiperSlide key={index} className={'flex justify-center items-center'}>
                        <EpisodesCard id={id} season={season} episode={episode}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>

    );
}