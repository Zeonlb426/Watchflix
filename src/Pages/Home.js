import Poster from "../Components/Poster";
import ViewList from "../Components/ViewList";

export default function Home() {
    return (
        <div>
            <Poster/>
            <ViewList title={'Top Movies'} list={[1,2,3,4]}/>
            <ViewList title={'Top TV Show'} list={[5,7,8,9]}/>


        </div>
    )
}