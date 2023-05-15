
export default function PosterCard(props) {

    const { movie, index, handler } = props;

    return (
        <div className='w-full flex justify-center' onClick={()=>{ handler(index) }}>
            <img className='w-full max-w-[220px] h-auto' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt='poster'/>
        </div>
    )
}