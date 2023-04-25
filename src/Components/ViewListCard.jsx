export default function ViewListCard(prop) {

    const {data} = prop

    console.log(data);

    return (
        <div className="bg-black border-2 border-white p-6">
            <span className="rounded-md bg-yellow-300 text-black py-[2px] px-2">
                Fantasy
            </span>

            <div>
                <div>
                    <span>2023-04-23</span>
                    <span>4 987</span>
                </div>
                <div>
                    <h3>{data[0].title}</h3>
                </div>
            </div>

        </div>
    )
}