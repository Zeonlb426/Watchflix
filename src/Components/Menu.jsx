import { NavLink } from "react-router-dom";
import { Bars3BottomLeftIcon } from '@heroicons/react/20/solid';
import { Popover, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Menu() {
    const routes = [
        {path:'/', name:'Home'},
        {path:'/movies', name:'Movies'},
        {path:'/tv-show', name:'TV Show'},
        // {path:'/video', name:'Video'},
        // {path:'/faq', name:'FAQ'},
        // {path:'/pricing', name:'Pricing'},
        {path:'/contact', name:'Contact Us'},
    ]

    return (
        <>
            <nav className="hidden lg:block">
                <ul className="list-none text-white flex gap-4">
                    {routes.map(
                        (route, index) => (
                            <li className="text-base" key={index}>
                                <NavLink className={({isActive}) => isActive ? "border-yellow-500 border-b-4 " : "border-transparent border-b-4 " } to={route.path}>
                                    {route.name}
                                </NavLink>
                            </li>
                        )
                    )}
                </ul>
            </nav>

            <Popover className="block lg:hidden">
                {({ open }) => (
                    <>
                        <Popover.Button className={`${open ? 'bg-neutral-800' : ''} group border-neutral-700 border inline-flex items-center rounded-md hover:bg-neutral-700 p-2 focus:outline-none`}>
                            <Bars3BottomLeftIcon className="h-5 w-5" aria-hidden="true"/>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-x-10"
                            enterTo="opacity-100 translate-x-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-x-0"
                            leaveTo="opacity-0 -translate-x-10"
                        >
                            <Popover.Panel className="absolute left-0 z-10 mt-6 w-screen max-w-xs transform px-4">
                                <div className="overflow-hidden rounded-md shadow-lg">
                                    <div className="relative grid gap-4 bg-neutral-800 p-4">
                                        {routes.map((route) => (
                                            <NavLink key={route.name} className={({isActive}) => `${isActive ? "border-yellow-500 border " : "border-transparent border "} p-4 rounded-md bg-neutral-700 hover:bg-neutral-900`} to={route.path}>
                                                {route.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </> 
    )
}