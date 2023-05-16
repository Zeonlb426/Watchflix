import FormField from "../Components/formField";
import { useForm } from "react-hook-form";

export default function Contact() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center p-10 gap-10">
            <h1 className="flex justify-center items-center">Отправьте нам Ваше сообщение:</h1>
            <form className="grid gap-4 text-black w-full max-w-xl" onSubmit={handleSubmit(onSubmit)}>
                <FormField type='text' name='firstName' label='Имя:' errors={errors} register={register} /> 
                <FormField type='email' name='email' label='Почта:' errors={errors} register={register} rules={ {required: 'Поле не должно быть пустым', pattern: {value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Не корректный email'}} }/> 
                <FormField type='textarea' name='message' label='Ваше сообщение:' errors={errors} register={register} rules={ {required: 'Поле не должно быть пустым', minLength: {value: 5, message: 'Минимально 5 символов'}, maxLength: {value: 255, message: 'Максимально 255 символов'}} }/>
                <FormField type='checkbox' name='confirm' label='Я согласен с правилами ресурса:' errors={errors} register={register} rules={ {required: 'Вы должны принять соглашение'} }/>
                <button className="bg-yellow-300 rounded-md p-4" type="submit">Отправить</button>
            </form>
        </div>
    )
}