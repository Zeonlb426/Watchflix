import { useEffect, useState } from "react";
import { PlayIcon, CalendarDaysIcon, StarIcon } from '@heroicons/react/24/outline';

export default function EpisodesCard(props) {

    const { id, season, episode } = props
    const [isOpen, setOpen] = useState(false)
    const [detail, setDetail] = useState({})
    const [video, setVideo] = useState([])
    const [isLoadingDetail, setIsLoadingDetail] = useState(true)
    const [isLoadingVideo, setIsLoadingVideo] = useState(true)
    
    const urlDetail = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode.episode_number}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

    useEffect(
        () => {
            fetch(urlDetail)
                .then(response => response.json())
                .then(answer => {
                    setDetail(answer)
                    setIsLoadingDetail(false)
                })
        }, []
    )

    if (isLoadingDetail) {
        return <div>Loading...</div>
    }

    return (
        <div className="max-w-[400px] mx-auto border border-[#fde04778] rounded-md p-4">
            <h2 className=" h-6 overflow-hidden text-xl font-bold">{detail.name ? detail.name : 'Title out'}</h2>
            <p className="h-12 overflow-hidden text-xs text-gray-300">{detail.overview ? detail.overview : 'Description out...'}</p>
            <div className="flex gap-2 mt-4">
                <span className="flex text-xs gap-2"><CalendarDaysIcon className="h-4 w-4 text-yellow-300"/>{detail.air_date??0}</span>
                <span className="flex text-xs gap-2"><StarIcon className="h-4 w-4 text-yellow-300"/>{detail.vote_average??0}</span>
            </div>
        </div>
    );
}