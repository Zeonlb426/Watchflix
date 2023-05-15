import { StarIcon, EyeIcon } from '@heroicons/react/24/outline';

export default function ViewListCard(prop) {

    const {title, image, genres, voteAverage, voteCount, className} = prop

    return (
        <div className={`w-full h-auto ${className}`}>
            <div className='mx-auto w-fit border p-4 border-[#fde04778] rounded-md overflow-x-hidden'>
                <div className='flex gap-1 flex-wrap mb-2 max-w-[220px] overflow-x-hidden'>
                    {genres.map((genre, index) => {
                        return (
                            <span key={index} className="rounded-md bg-yellow-300 text-black text-xs px-1">
                                {genre.name}
                            </span>
                        )
                    })}
                </div>
                <img className='w-full max-w-[220px] h-auto' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ image} alt='poster'/>
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
    )
}