import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function Search() {
    return (
        <div className='flex items-center'>
            <input type='text' className='hidden rounded-md bg-neutral-800 px-2 py-1 xl:inline'/>
            <MagnifyingGlassIcon className="-ml-6 h-5 w-5" aria-hidden="true"/>
        </div>
        
    )
}