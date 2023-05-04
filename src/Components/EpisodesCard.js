import { useEffect, useState } from "react";
import { PlayIcon } from '@heroicons/react/24/outline';

export default function EpisodesCard(props) {

    const { id, season, episode } = props
    const [isOpen, setOpen] = useState(false)
    let episodes = 1
    const url = `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episodes}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(answer => {
                    console.log(answer);
                })
        }, [season])

    return (
        <div className="flex">
            <div className="w-48 h-48 flex items-center justify-center">
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-16 h-16 rounded-full cursor-pointer'>

                    <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full">
                        <PlayIcon className="h-4 w-4 text-black" />
                    </div>
                </div>

            </div>

            <div>
                <p>Episode 1</p>
                <h2>First Meet</h2>
                <p>lorem ipsum</p>
                <div className="flex gap-2">
                    <span>6464</span>
                    <span>23.45.2003</span>
                </div>
            </div>
        </div>
    );
}