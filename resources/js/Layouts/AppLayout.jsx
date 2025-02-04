import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { Dialog, Transition } from '@headlessui/react';
import { Head, Link } from '@inertiajs/react';
import { Fragment, useState } from 'react';
import { PiDatabase, PiLockKey, PiLockKeyBold, PiPlus, PiSidebar, PiSquaresFour, PiUser, PiX } from 'react-icons/pi';

export default function AppLayout({ children, title }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head title={title} />
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>

                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                                            <button
                                                type="button"
                                                className="-m-2.5 p-2.5"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <PiX className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar Responsive */}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>

                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
                        <div className="flex h-16 shrink-0 items-center space-x-1.5">
                            <Link
                                href="/"
                                className="-m-1.5 p-1.5 text-2xl font-black leading-relaxed tracking-tighter"
                            >
                                Taskara<span className="text-red-500">.</span>
                            </Link>
                        </div>
                        <nav className="flex flex-col flex-1">
                            <ul role="list" className="flex flex-col flex-1 gap-y-7">
                                <li>
                                    <ul role="list" className="-mx-2 space-y-2">
                                        {/* menu */}
                                        <li>
                                            <Link
                                                href="#"
                                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50 hover:text-foreground"
                                            >
                                                <PiSidebar className="h-6 w-6 flex-none" aria-hidden="true" />
                                                Dashboard
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50 hover:text-foreground"
                                            >
                                                <PiUser className="h-6 w-6 flex-none" aria-hidden="true" />
                                                People
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50 hover:text-foreground"
                                            >
                                                <PiSquaresFour className="h-6 w-6 flex-none" aria-hidden="true" />
                                                My Tasks
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="#"
                                                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50 hover:text-foreground"
                                            >
                                                <PiLockKey className="h-6 w-6 flex-none" aria-hidden="true" />
                                                Logout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    {/* workspaces */}
                                    <div className="flex items-center justify-between">
                                        <div className="text-xs font-semibold leading-relaxed uppercase text-foreground">
                                            Workspaces
                                        </div>
                                        <Link>
                                            <PiPlus className="h-4 w-4 text-foreground hover:text-red-500" aria-hidden="true" />
                                        </Link>
                                    </div>
                                    <ul role="list" className="mt-2 -mx-2 space-y-2">
                                        <li>
                                            <Link
                                                href="#"
                                                className="group flex items-center gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-900 hover:bg-gray-50 hover:text-foreground dark:text-white dark:hover:bg-gray-800 dark:hover:text-white"
                                            >
                                                <span className='bg-[#ffc107] text-white flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border font-medium leading-6 '>B</span>
                                                <span className="truncate">Backend Developer</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mt-auto -mx-6">
                                    {/* profile */}
                                    <div className="flex items-center gap-x-4 border-t border-gray-200 p-4 dark:border-gray-800 hover:bg-gray-50 hover:text-foreground cursor-pointer">
                                        <Link href="#">
                                            <span className="sr-only">Your profile</span>
                                            <Avatar>
                                                <AvatarFallback>X</AvatarFallback>
                                            </Avatar>
                                        </Link>
                                        <div className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                                            <Link href="#">Tom Cook</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-white px-4 py-4 shadow-sm dark:bg-gray-900 sm:px-6 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <PiSidebar className="h-6 w-6 text-foreground" aria-hidden="true" />
                    </button>
                    <div className="flex-1 text-sm font-semibold leading-relaxed tracking-tighter text-foreground">
                        {title}
                    </div>
                    <Link href="#">
                        <span className="sr-only">Your profile</span>
                        <Avatar>
                            <AvatarFallback>X</AvatarFallback>
                        </Avatar>
                    </Link>
                </div>

                <main className="py-10 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">{children}</div>
                </main>
            </div>
        </>
    );
}
