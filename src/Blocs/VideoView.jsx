import { useEffect, useState } from "react";
import { PlayIcon} from '@heroicons/react/24/outline';
import YouTube from 'react-youtube'
import DetailSeason from "../Components/DetailSeason";

export default function VideoView() {

    const [isOpen, setOpen] = useState(false)
    const [listTv, setListTv] = useState([])
    const [index, setIndex] = useState(0)
    const [videoList, setVideoList] = useState([])
    const [isLoadingVideo, setLoadingVideo] = useState(true)
    const [opts, setOpts] = useState({
        height: '600',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }})
    const [isLoadinglistTv, setIsLoadinglistTv] = useState(true)

    const listTvUrl = 'https://api.themoviedb.org/3/tv/airing_today?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=2'

    useEffect(
        () => {
            fetch(listTvUrl)
                .then(response => response.json())
                .then(answer => {
                    setListTv(answer.results)
                    setIsLoadinglistTv(false)
                    setIndex( Math.round(Math.random()*19) )
                })
               
        }, []
    )

    useEffect(
        () => {
            if(!isLoadinglistTv){
            const videoId = `https://api.themoviedb.org/3/tv/${listTv[index].id}/videos?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`
                fetch(videoId)
                .then(response => response.json())
                .then(answer => {
                    if(answer.results.length  === 0){
                        setIndex( Math.round(Math.random()*19) )
                    }else{
                        setVideoList(answer.results)
                        setLoadingVideo(false)
                    }
                })
            }   
        }, [listTv, index]
    )

    if (isLoadinglistTv) {
        return (
            <div className="max-w-screen-2xl mx-auto mt-40  ">
                <div>Загружается...</div>
            </div>
        )
    }
   
    let url = 'https://user-images.githubusercontent.com/19985451/40033362-7273cdce-583b-11e8-8534-583a01fa6cbc.png'

    if (typeof listTv[index] === 'object' &&
        listTv[index].hasOwnProperty('backdrop_path')) {
        url = 'https://image.tmdb.org/t/p/original' + listTv[index].backdrop_path 
    }else{
        setIndex( Math.round(Math.random()*19) )
    }
    
    return (
        <div className="max-w-screen-2xl mx-auto mt-40 px-4 sm:px-10">
            
            {isOpen && !isLoadingVideo ? 
                <YouTube 
                    className="h-[300px] sm:h-[600px] p-10 flex items-end relative" 
                    videoId={videoList[0].key} 
                    opts={opts}
                    onEnd={() => setOpen(false)}
                />
            :
                <div className="h-[300px] sm:h-[600px] border border-[#fde04778] p-10 flex rounded-md items-end relative bg-center bg-cover" style={{backgroundImage: `url(${url})`}}>
                    <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-20 h-20 rounded-full cursor-pointer absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2 -translate-x-1/2'>
                        <div className="flex items-center justify-center bg-yellow-300 w-14 h-14 rounded-full">
                            <PlayIcon className="h-6 w-6 text-black"/>
                        </div>
                    </div>
                    <div className=" gap-4">
                        <h2 className="inline-flex text-2xl sm:text-4xl px-4 py-1 rounded-md text-black bg-[#ffffffa6] font-bold">{listTv[index].name}</h2>
                        <p className="hidden sm:block text-black px-4 py-1 rounded-md bg-[#ffffffa6] mt-3">{listTv[index].overview}</p>
                    </div>
                </div>
            }
            <DetailSeason id={listTv[index].id}/>
        </div>


    )
}