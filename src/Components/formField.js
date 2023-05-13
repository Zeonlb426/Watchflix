export default function FormField(props) {

    const { type, id, name, label } = props

    return (
        <div className="grid gap-2">
            <label className="text-white" htmlFor={id}>{label}</label>
            {type === 'textarea' ? 
                <textarea className="p-2 rounded-md text-lg" id={id} name={name}/>
            :
                <input className="p-2 rounded-md text-lg" type={type} id={id} name={name}/>
            }
        </div>
        
    )
}