export default function InfoSpan({label, value}) {
    return (
        <div className='flex items-center gap-2 bg-yellow-300 px-2 md:px-4 py-1 rounded-md border border-yellow-700'>
            <span className='text-slate-600 text-sm md:text-base'>{label}</span>
            <span className='font-bold text-black text-sm md:text-base'>{value}</span>
        </div> 
    )
}