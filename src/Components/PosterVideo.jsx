import { useEffect, useState } from "react";
import { PlayIcon, VideoCameraSlashIcon } from '@heroicons/react/24/outline';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default function PosterVideo(props) {

    const { movieId } = props;
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const fetchData = () => {
            fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US")
            .then(res => res.json())
            .then((answer) => {
                let hasTrailer = false;
                if(Array.isArray(answer.results) && answer.results.length > 0) {
                    hasTrailer = answer.results.some((video) => {
                        if (video.type === "Trailer" || video.official === true || video.type === "Teaser" || video.type === "Featurette") {
                            setVideo(video);
                            setLoading(false)
                            return true;
                        }
                        return false;
                    })
                }

                if (!hasTrailer) {
                    setVideo(null);
                    setLoading(false)
                }
            })
        }

        fetchData();
    }, [movieId])

    if (loading) return(<div>Loading...</div>)

    if (video === null) return(
        <div className="mt-8">
            <div className="flex items-center justify-center bg-yellow-300 w-40 py-1 px-2 rounded-md text-black gap-2">
                <VideoCameraSlashIcon className="h-6 w-6"/>
                <span>No Trailer</span>
            </div>
        </div>
    )

    return (
        <div className="mt-8">
            <ModalVideo channel={video.site.toLowerCase()} autoplay isOpen={isOpen} videoId={video.key} onClose={() => setOpen(false)} />
            <div onClick={()=> setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-20 h-20 rounded-full cursor-pointer'>
                <div className="flex items-center justify-center bg-yellow-300 w-14 h-14 rounded-full">
                    <PlayIcon className="h-6 w-6 text-black" />
                </div>
            </div>
        </div>
    )
}