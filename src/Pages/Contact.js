import Form from "../Components/form";
import FormField from "../Components/formField";
import { useState } from "react";


export default function Contact() {

    // const [firstName, setFirstName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message, setMessage] = useState('')
    // const [confirm, setConfirm] = useState('')

    const [state, setState] = useState({
        firstName: '',
        email: '',
        message: '',
        confirm: false,
    })

    const handlerOnChenge = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value
        setState({[name]: value})
    }

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        email: '',
        message: '',
    })

    const handlerSubmit = () => {
        alert('Форма отправлена')
    }

    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center p-10 gap-10">
            <h1 className="flex justify-center items-center">Отправьте нам Ваше сообщение:</h1>
            <Form buttonText='Отправить' handlerSubmit={handlerSubmit}>
                <FormField type='text' name='firstName' label='Имя:' handlerOnChenge={handlerOnChenge} value={state.firstName}/> 
                <FormField type='email' name='email' label='Почта:' require={true} handlerOnChenge={handlerOnChenge} value={state.email}/> 
                <FormField type='textarea' name='message' label='Ваше сообщение:' require={true} handlerOnChenge={handlerOnChenge} value={state.message}/>
                <FormField type='checkbox' name='confirm' label='Я согласен с правилами ресурса:' require={true} handlerOnChenge={handlerOnChenge} value={state.confirm}/>
            </Form>
        </div>
    )
}