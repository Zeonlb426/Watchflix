import { useState } from "react"

export default function FormField(props) {

    const { type, name, label, require = false, handlerOnChenge, value } = props

    return (
        <div className="grid gap-2">
            <label className="text-white flex flex-col">
                <span className="relative w-fit">
                    {require ? <span className="text-red-500 text-xl absolute -right-3">*</span> : ''}
                    {label}
                </span>
                {type === 'textarea' ? 
                    <textarea required={require} className="p-2 rounded-md text-lg text-black" name={name} value={value} onChange={handlerOnChenge}/>
                :
                    <input required={require} className="p-2 rounded-md text-lg text-black" type={type} name={name} value={value} onChange={handlerOnChenge}/>
                }
            </label>
        </div>
    )
}