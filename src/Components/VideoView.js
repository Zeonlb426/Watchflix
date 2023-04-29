import { useEffect, useState } from "react";
import { PlayIcon, VideoCameraSlashIcon } from '@heroicons/react/24/outline';



export default function VideoView() {

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="max-w-screen-2xl mx-auto mt-40 border-2 border-white">
            <div className="border-4 border-red-500 h-[800px] p-10 flex items-end relative">
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-20 h-20 rounded-full cursor-pointer absolute inset-y-1/2 inset-x-1/2 -translate-y-1/2 -translate-x-1/2'>
                    <div className="flex items-center justify-center bg-yellow-300 w-14 h-14 rounded-full">
                        <PlayIcon className="h-6 w-6 text-black" />
                    </div>
                </div>

                <div className="grid gap-4">

                    <h2>name film</h2>
                    <p>Lorem</p>
                </div>

            </div>

            {/* <div className="border-4 border-orange-500 h-[400px] p-10 flex">
                <p>video</p>
            </div> */}
        </div>


    )
}