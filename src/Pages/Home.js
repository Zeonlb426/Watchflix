
import Poster from "../Components/Poster";
import MovieTop from "../Components/MovieTop";

export default function Home() {


    const topMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'
    const topTvShowUrl = 'https://api.themoviedb.org/3/tv/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'

    return (
        <div>
            <Poster/>
            <MovieTop/>
            {/* <ViewList title={'Top TV Show'} url={topTvShowUrl}/> */}


        </div>
    )
}