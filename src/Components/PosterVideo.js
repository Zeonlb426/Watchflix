import { useEffect, useState } from "react";
import { PlayIcon, VideoCameraSlashIcon } from '@heroicons/react/24/outline'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

import "swiper/css";
import "swiper/css/navigation";

export default function PosterVideo(props) {

    const { movieId } = props;

    const [video, setVideos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const fetchData = () => {
            fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US")
            .then(res => res.json())
            .then((answer) => {
                if (Array.isArray(answer.results) && answer.results.length > 0) {
                    let hasTrailer = answer.results.some((video) => {
                        if (video.official === true || video.type === 'Trailer' || video.type === 'Teaser') {
                            localStorage.setItem(movieId.toString(), JSON.stringify(video));
                            setVideos(video);
                            setVideos(null);
                            setLoading(false);
                            return true;
                        }
                        return false;
                    });
                    if (!hasTrailer) {
                        setVideos(null);
                        setLoading(false);
                    }
                }else{
                    setVideos(null);
                    setLoading(false);
                }
            })
        }
        if (!localStorage.getItem(movieId.toString())) {
            fetchData();
        }else{
            setVideos(JSON.parse(localStorage.getItem(movieId.toString())));
            setLoading(false);
        }
    }, [movieId])

    if (loading) return(
        <div className="mt-8">
            <div onClick={()=> setOpen(true)} className='rounded-xl bg-yellow-300 flex items-center justify-center max-w-[150px] py-2 gap-3'>
                <span className="text-black">Loading...</span> 
            </div>
        </div>
    )

    if (video === null) return(
        <div className="mt-8">
            <div onClick={()=> setOpen(true)} className='rounded-xl bg-yellow-300 flex items-center justify-center max-w-[150px] py-2 gap-3'>
                <VideoCameraSlashIcon className="h-6 w-6 ml-1 text-black"/>
                <span className="text-black">No trailer</span> 
            </div>
        </div>
    )

    return (
        <div className="mt-8">
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={video.key} onClose={() => setOpen(false)} />
            <div onClick={()=> setOpen(true)} className='rounded-full border-2 border-yellow-300 bg-transparent w-20 h-20 flex items-center justify-center cursor-pointer'>
                <div className="rounded-full bg-yellow-300 w-12 h-12 flex items-center justify-center">
                    <PlayIcon className="h-6 w-6 ml-1 text-black" />
                </div>
            </div>
        </div>
    )
}