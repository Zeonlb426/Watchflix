
import Poster from "../Blocs/Poster";
import MovieTop from "../Blocs/MovieTop";
import TVShowTop from "../Blocs/TVShowTop";
import VideoView from "../Blocs/VideoView";

export default function Home() {

    return (
        <div className='w-full'>
            <Poster/>
            <MovieTop/>
            <TVShowTop/>
            <VideoView/>
        </div>
    )
}