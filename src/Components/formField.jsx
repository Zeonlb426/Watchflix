
export default function FormField({ 
    type,
    name,
    label,
    register,
    rules,
    errors,
}) {

    let inputField
    switch(type){
        case 'textarea':
            inputField = <textarea {...register(name, { ...rules })} className={`p-2 rounded-md text-lg text-black border-2 ${errors[name]?.message ? "border-red-500" : "border-white"} `} name={name} />
        break;
        case 'checkbox':
        case 'radio':
            inputField = <input {...register(name, { ...rules })} className={`p-2 rounded-md text-lg text-black`} type={type} name={name}/>
        break;
        default:
            inputField = <input {...register(name, { ...rules })} className={`p-2 rounded-md text-lg text-black border-2 ${errors[name]?.message ? "border-red-500" : "border-white"}`} type={type} name={name}/>
    }

    return (
        <div className="grid gap-2">
            <label className="text-white flex flex-col">
                <span className="relative w-fit">
                    {require ? <span className="text-red-500 text-xl absolute -right-3">*</span> : ''}
                    {label}
                </span>
                {inputField}
            </label>
            <div className="text-red-500 text-xs h-7">
                { errors[name]?.message }
            </div>
        </div>
    )
}