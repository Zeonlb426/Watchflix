import { useEffect, useState } from "react";
import ViewListCard from "../Components/ViewListCard"
import ReactPaginate from 'react-paginate';

export default function Show() {

    const [tvShows, setTVShows] = useState([])
    const [genres, setGenres] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(1)
    const [isLoadingTVShow, setIsLoadingTVShow] = useState(true)
    const [isLoadingGenres, setIsLoadingGenres] = useState(true)

    const topTVShowUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US&page=${page}`
    const genresUrl = 'https://api.themoviedb.org/3/genre/tv/list?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US'

    useEffect(
        ()=>{
            fetch(topTVShowUrl)
            .then( response => response.json())
            .then(answer => {
                setPageCount(answer.total_pages > 500 ? 500 : answer.total_pages);
                setTVShows(answer.results);
                setIsLoadingTVShow(false);
            })
        },
        [page]
    )

    useEffect(
        ()=>{
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

    if (isLoadingTVShow === false && isLoadingGenres === false) {
        for (let index = 0; index < tvShows.length; index++) {
            const tvShow = tvShows[index];
            let newArrayGenres = []
            tvShow.genre_ids.map((id) => {
                    newArrayGenres.push(
                        ...genres.filter((genre)=>{
                            return genre.id === id
                        })
                    )
            })
            list.push(
                <ViewListCard 
                    key={tvShow.id}
                    title={tvShow.name} 
                    image={tvShow.poster_path} 
                    genres={newArrayGenres} 
                    voteAverage={tvShow.vote_average} 
                    voteCount={tvShow.vote_count}
                />
            )
        }
    }

    const handlePageClick = (event) => {
        setPage(event.selected + 1);
    };

    if (isLoadingTVShow || isLoadingGenres) {
        return(
            <div className="max-w-screen-2xl mx-auto mt-40 px-4 sm:px-10">
                <div className="flex items-center justify-center">
                    <h2 className="text-5xl">Загружается...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-40 px-4 sm:px-10">
            <div className="flex items-center justify-between">
                <h2 className="text-xl sm:text-4xl">TV Show</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-y-10 md:gap-y-16 justify-items-center mt-8">
                {list}
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={'flex gap-2 flex-wrap mt-16'}
                pageLinkClassName={'py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-base border border-yellow-500 rounded-md'}
                activeLinkClassName={'bg-yellow-500'}
                disabledClassName={'opacity-40'}
                pageClassName={'mt-4 flex items-center'}
                breakClassName={'mt-4 flex items-center'}
                previousClassName={'mt-4 flex items-center'}
                nextClassName={'mt-4 flex items-center'}
            />
        </div>
    )
}