import { MapPinIcon, AtSymbolIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <div className="bg-neutral-800 mt-20">
            <div className="max-w-screen-2xl mx-auto grid xl:grid-cols-3 px-4 sm:px-10">
                <div className='py-10 xl:py-28 text-center sm:text-left'>
                    <h3 className='text-6xl'>Watchflix</h3>
                    <p className='text-base text-gray-300 mt-8'>
                        Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.
                    </p>
                    <div className='mt-10'>Join Newsletters</div>
                    <div className='mt-6 flex items-center'>
                        <input className='p-4 w-full max-w-[280px] bg-gray-700 rounded-md' placeholder='Insert your mail here'/>
                        <button className='bg-yellow-300 rounded-md p-3 -ml-12 mt-1'> 
                            <ArrowRightIcon className="h-4 w-4 text-black" />
                        </button>
                    </div>
                </div>
                <div className='xl:px-16 xl:py-28 col-span-2'>
                    <div className='flex gap-8 xl:gap-40'>
                        <div className='grid gap-2'>
                            <h4 className='font-bold'>Product</h4>
                            <NavLink to={'/movies'}>Movies</NavLink>
                            <NavLink to={'/tv-show'}>TV Show</NavLink>
                            <NavLink to={'/video'}>Videos</NavLink>
                        </div>
                        <div className='grid gap-2'>
                            <h4 className='font-bold'>Media Group</h4>
                            <NavLink to={'/'}>Nice Studio</NavLink>
                            <NavLink to={'/'}>Nice News</NavLink>
                            <NavLink to={'/'}>Nice TV</NavLink>
                        </div>
                        <div className='grid gap-2'>
                            <h4 className='font-bold'>Sitemap</h4>
                            <NavLink to={'/'}>About</NavLink>
                            <NavLink to={'/'}>Careers</NavLink>
                            <NavLink to={'/'}>Press</NavLink>
                        </div>
                    </div>
                    <div className='flex flex-wrap mt-8 xl:mt-24 gap-4 mb-10'>
                        <span className='flex gap-1 items-center'><MapPinIcon className="h-4 w-4 text-white" /> 8819 Ohio St. South Gate, California 90280</span>
                        <span className='flex gap-1 items-center'><AtSymbolIcon className="h-4 w-4 text-white" />ourstudio@hello.com</span>
                        <span className='flex gap-1 items-center'><PhoneIcon className="h-4 w-4 text-white" />+271 386-647-3637</span>
                    </div>
                </div>
            </div>
        </div>
    )
}