import { useEffect, useState } from "react";
import ViewListCard from "./ViewListCard"
import { NavLink } from "react-router-dom";

export default function MovieTop() {

    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [isLoadingMovies, setIsLoadingMovies] = useState(true)
    const [isLoadingGenres, setIsLoadingGenres] = useState(true)

    const topMoviesUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=1'
    const genresUrl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US'

    useEffect(
        ()=>{
            fetch(topMoviesUrl)
            .then( response => response.json())
            .then(answer => {
                setMovies(answer.results)
                setIsLoadingMovies(false)
            })

            fetch(genresUrl)
            .then( response => response.json())
            .then(answer => {
                setGenres(answer.genres)
                setIsLoadingGenres(false)
            })
        },
        []
    )

    let list = [];

    if (isLoadingMovies === false && isLoadingGenres === false) {
       for (let index = 0; index < 6; index++) {
            const movie = movies[index];
            let newArrayGenres = []
            movie.genre_ids.map((id) => {
                    newArrayGenres.push(
                        ...genres.filter((genre)=>{
                            return genre.id === id
                        })
                    )
            })
            list.push(
                <ViewListCard 
                    key={movie.id}
                    title={movie.title} 
                    image={movie.poster_path} 
                    genres={newArrayGenres} 
                    voteAverage={movie.vote_average} 
                    voteCount={movie.vote_count}
                />
            )
        }
    }

    if (isLoadingMovies || isLoadingGenres) {
        return(<div>Загружается...</div>)
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-40">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl">Top Movies</h2>
                <NavLink className="text-yellow-300" to={'/movies'}>View More</NavLink>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {list}
            </div>
            
        </div>
    )
}