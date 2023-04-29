import { useEffect, useState } from "react";
import { PlayIcon, VideoCameraSlashIcon } from '@heroicons/react/24/outline';
import { YouTubePlayer } from "react-youtube";



export default function VideoView() {

    const [isOpen, setOpen] = useState(false)
    const [listTv, setListTv] = useState([])
    const [isLoadinglistTv, setIsLoadinglistTv] = useState(true)

    const listTvUrl = 'https://api.themoviedb.org/3/tv/airing_today?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=2'
    
    useEffect(
        () => {
            fetch(listTvUrl)
                .then(response => response.json())
                .then(answer => {
                    setListTv(answer.results)
                    setIsLoadinglistTv(false)
                })
               
        }, [])

        // useEffect(
        //     () => {
        //         if(!isLoadinglistTv){
        //         const videoId = `https://api.themoviedb.org/3/tv/${listTv[randomlistTv].id}/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`
        //          fetch(videoId)
        //             .then(response => response.json())
        //             .then(answer => {
        //                 setListTv(answer.results)
        //                 setIsLoadinglistTv(false)
        //             })
        //         }   
        //     }, [listTv])


    if (isLoadinglistTv) {
        return (<div>Загружается...</div>)
    }
    const videoId = `https://api.themoviedb.org/3/tv/${listTv[randomlistTv].id}/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`


    const randomlistTv = Math.round(Math.random()*10)


   const url = listTv[randomlistTv].backdrop_path ? 'https://image.tmdb.org/t/p/original' + listTv[randomlistTv].backdrop_path : 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/1545128.jpg'

    return (
        <div className="max-w-screen-2xl mx-auto mt-40 border-2 border-white">
            <div className="border-4 border-red-500 h-[600px] p-10 flex items-end relative bg-center bg-cover" style={{backgroundImage: `url(${url})`}}>
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-20 h-20 rounded-full cursor-pointer absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <YouTube videoId="listTv[randomlistTv].key" opts={opts} onReady={this._onReady} />
                    <div className="flex items-center justify-center bg-yellow-300 w-14 h-14 rounded-full">
                        <PlayIcon className="h-6 w-6 text-black" />
                    </div>
                </div>

                <div className="grid gap-4">

                    <h2 className=" text-6xl text-black font-bold">{listTv[randomlistTv].name}</h2>
                    <p>{listTv[randomlistTv].overview}</p>
                </div>

            </div>

            {/* <div className="border-4 border-orange-500 h-[400px] p-10 flex">
                <p>video</p>
            </div> */}
        </div>


    )
}