export default function Form(props) {

    const {buttonText, children} = props

    const handlerSubmit = () => {
        alert('Форма отправлена')
    }

    return (
        <form className="grid gap-4 text-black min-w-[450px]" onSubmit={handlerSubmit}>
            {children}
            <button className="bg-yellow-300 rounded-md p-4" type="submit">{buttonText}</button>
        </form>
    )
}