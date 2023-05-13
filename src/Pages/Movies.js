import Form from "../Components/form";
import FormField from "../Components/formField";

export default function Movies() {
    return (
        <div className="max-w-screen-2xl mx-auto flex flex-col justify-center items-center p-10 gap-10">
            <Form buttonText='Отправить'>
                <FormField type='email' id='email' name='email' label='Почта:'/> 
                <FormField type='textarea' id='access' name='access' label='Напишите свои пожелания:'/>
            </Form>
        </div>
        
    )
}