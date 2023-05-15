import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import Episodes from "./Episodes";

export default function DetailSeason(props) {

    const [detail, setDetail] = useState({})
    const [numberSeason, setNumberSeason] = useState(1)
    const [isLoading, setIsLoading] = useState(true)

    const { id } = props

    const url = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US'

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(answer => {
                    setDetail(answer)
                    setIsLoading(false)
                })
        }, [] 
    )

    if (isLoading) {
        <div>Loading...</div>
    }

    let buttons = [];

    for (let index = 0; index < detail.number_of_seasons; index++) {
        buttons.push(
            <SwiperSlide key={index} className="flex items-center justify-center text-center">
                <button season={index + 1} onClick={(e)=>setNumberSeason(e.target.attributes['season'].value)} className="bg-yellow-300 rounded-md px-2 py-1 text-black cursor-pointer">Season {index+1}</button>                    
            </SwiperSlide>
        )
    }
    
    return (
        <div className="mt-8">
            <div className="flex gap-2 relative">
                <Swiper
                    slidesPerView={8}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation={true}
                    modules={[Navigation]}
                    pagination={false}
                    className="flex items-center justify-center"
                    breakpoints={{
                        320: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                        },
                        640: {
                        slidesPerView: 3,
                        spaceBetween: 12,
                        },
                        1024: {
                        slidesPerView: 5,
                        spaceBetween: 16,
                        },
                        1336: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                        },
                    }}
                >
                    {buttons}
                </Swiper>
            </div>

            <div className="mt-8">
                <Episodes id={id} season={numberSeason}/>
            </div>
        </div>
    )
}