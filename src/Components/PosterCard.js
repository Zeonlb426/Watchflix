
export default function PosterCard(props) {

    const { movie } = props;

    console.log(movie);
    return (
        <div className="">
            <p>{movie.original_title}</p>
            <a href='#'>
            <div className=''>
                    <img className='' src={'https://image.tmdb.org/t/p/w220_and_h330_face'+ movie.poster_path} alt=''/>
                    <div className=''>{movie.vote_average}</div>
                </div>
            </a>
        </div>
        
    )
}