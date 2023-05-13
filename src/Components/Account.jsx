import avatar from '../Images/avatar.webp'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, PencilSquareIcon, Cog8ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'

const person = {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export default function Account() {
    return (
        <Menu as="div" className="relative">
            <div>
                <Menu.Button className="flex gap-1 items-center px-2 py-1 rounded-md hover:bg-neutral-800 text-sm focus:outline-none">
                    <img src={avatar} className="w-10 h-10 rounded-full" alt=""/>
                    <span className='hidden xl:inline'>{person.name}</span>
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-600 rounded-md bg-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-yellow-300 text-black' : 'text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <PencilSquareIcon className="mr-2 h-5 w-5" aria-hidden="true"/>
                                    Edit
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-yellow-300 text-black' : 'text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <Cog8ToothIcon className="mr-2 h-5 w-5" aria-hidden="true"/>
                                    Settings
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button className={`${active ? 'bg-yellow-300 text-black' : 'text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                    <ArrowLeftOnRectangleIcon className="mr-2 h-5 w-5" aria-hidden="true"/>
                                    Logout
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}