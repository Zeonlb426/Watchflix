import { useEffect, useState } from "react";
import { PlayIcon, CalendarDaysIcon, StarIcon } from '@heroicons/react/24/outline';

export default function EpisodesCard(props) {

    const { id, season, episode } = props
    const [isOpen, setOpen] = useState(false)
    const [detail, setDetail] = useState({})
    const [video, setVideo] = useState([])
    const [isLoadingDetail, setIsLoadingDetail] = useState(true)
    const [isLoadingVideo, setIsLoadingVideo] = useState(true)
    
    const urlDetail = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`
    const urlVideo = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

    useEffect(
        () => {
            fetch(urlDetail)
                .then(response => response.json())
                .then(answer => {
                    setDetail(answer)
                    setIsLoadingDetail(false)
                })

            fetch(urlVideo)
                .then(response => response.json())
                .then(answer => {
                    setVideo(answer.results)
                    setIsLoadingVideo(false)
                })
        }, [])

    if (isLoadingDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="flex border-2 border-yellow-300 mb-10 p-4">
            <div className="w-48 h-48 flex items-center justify-center">
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-16 h-16 rounded-full cursor-pointer'>

                    <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full">
                        <PlayIcon className="h-4 w-4 text-black" />
                    </div>
                </div>

            </div>

            <div className="text-left flex flex-col justify-between">
                <div className="flex-col justify-between">
                    <h2 className="flex-nowrap overflow-hidden text-xl font-bold">{detail.name}</h2>
                    <p className="flex-nowrap overflow-hidden text-sm text-gray-300">{detail.overview ? detail.overview : 'Описание отсутствует...'}</p>
                </div>
                <div className="flex gap-2">
                    <span className="flex text-xs gap-2"><CalendarDaysIcon className="h-4 w-4 text-yellow-300"/>{detail.air_date}</span>
                    <span className="flex text-xs gap-2"><StarIcon className="h-4 w-4 text-yellow-300"/>{detail.vote_average}</span>
                </div>
            </div>
        </div>
    );
}