export default function Form(props) {

    const {buttonText, handlerSubmit, children} = props

    return (
        <form className="grid gap-4 text-black w-full max-w-xl" onSubmit={handlerSubmit}>
            {children}
            <button className="bg-yellow-300 rounded-md p-4" type="submit">{buttonText}</button>
        </form>
    )
}