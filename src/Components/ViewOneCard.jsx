import { StarIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function ViewOneCard(prop) {

    const {title, image, genres, voteAverage, voteCount, className} = prop

    return (
        <div className={`w-full h-auto min-h-[370px] border border-[#fde04778] rounded-md overflow-x-hidden bg-center bg-cover ${className}`} style={{backgroundImage: `url("https://image.tmdb.org/t/p/original${image}")`}}>
            <div className='w-full flex flex-col justify-between h-full bg-gradient-to-b from-transparent from-50% to-[#00000085] to-80% p-4'>
                <div className='flex gap-1 flex-wrap mb-2'>
                    {genres.map((genre, index) => {
                        return (
                            <span key={index} className="rounded-md bg-yellow-300 text-black text-xs px-1">
                                {genre.name}
                            </span>
                        )
                    })}
                </div>
                <div>
                    <div className=' text-3xl'>{title}</div>
                    <div className='flex justify-between mt-2'>
                        <span className='flex gap-1 text-yellow-300'>
                            <StarIcon className="h-6 w-6 text-yellow-300" />
                            {voteAverage}
                        </span>
                        <span className='flex gap-1 text-yellow-300'>
                            <EyeIcon className="h-6 w-6 text-yellow-300" />
                            {voteCount}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}