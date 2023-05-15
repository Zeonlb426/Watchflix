import PosterCard from "../Components/PosterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel({slidesPerView, arrayElements, handler}) {
    return (
        <div className='w-full relative -mb-10'>
            <div className=' text-xl sm:text-4xl mb-6'>Now Popular:</div>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={10}
                grabCursor={true}
                navigation={true}
                modules={[Navigation]}
                pagination={false}
                className=""
                // cssMode={true}
                breakpoints={{
                    320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    },
                    640: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                    },
                    1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                    },
                    1336: {
                    slidesPerView: slidesPerView,
                    spaceBetween: 10,
                    },
                }}
            >
                {arrayElements.map((element, index) => (
                    <SwiperSlide key={element.id} virtualIndex={index}>
                        <PosterCard movie={element} index={index} handler={handler}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div> 
    )
}