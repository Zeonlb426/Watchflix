export default function ViewList(prop) {

    const {title, list} = prop

    return (
        <div className="max-w-screen-2xl mx-auto mt-40">
            <div className="flex items-center justify-between">
                <h2 className="text-5xl">{title}</h2>
                <button className="text-yellow-300">View More</button>
            </div>
            
        </div>
    )
}