
import Poster from "../Components/Poster";
import MovieTop from "../Components/MovieTop";
import TVShowTop from "../Components/TVShowTop";
import VideoView from "../Components/VideoView";
import Episodes from "../Components/Episodes";

export default function Home() {

    return (
        <div>
            <Poster/>
            <MovieTop/>
            <TVShowTop/>
            <VideoView/>
            {/* <ViewList title={'Top TV Show'} url={topTvShowUrl}/> */}


        </div>
    )
}