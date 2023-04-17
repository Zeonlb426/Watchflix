
export default function PosterCard(props) {

    const { movie } = props;

    return (
        <div className="">
            {/* <p>{movie.original_title}</p> */}
            {/* <a href='#'> */}
            <div className=''>
                <img className='mx-auto' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                <div className='text-center'>{movie.vote_average}</div>
            </div>
            {/* </a> */}
        </div>
    )
}