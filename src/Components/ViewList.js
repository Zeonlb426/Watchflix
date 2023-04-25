import { useEffect, useState } from "react";
import ViewListCard from "./ViewListCard"

export default function ViewList(prop) {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const {title, url} = prop

    useEffect(
        ()=>{
            fetch(url)
            .then( response => response.json())
            .then(answer => {
                setData(answer.results)
                setIsLoading(false)
            })
        },
        []
    )

    if (isLoading) {
        return(<div>Загружается...</div>)
    }

    return (
        <div className="max-w-screen-2xl mx-auto mt-40">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl">{title}</h2>
                <button className="text-yellow-300">View More</button>
            </div>

           <ViewListCard data={data}/>

            
        </div>
    )
}