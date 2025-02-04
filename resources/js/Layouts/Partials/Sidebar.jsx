import { Link } from '@inertiajs/react';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { PiLockKey, PiPlus, PiSidebar, PiSquaresFour, PiUser } from 'react-icons/pi';

export default function Sidebar() {
    return (
        <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" className="-mx-2 space-y-2">
                        {/* menu */}
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-foreground"
                            >
                                <PiSidebar className="h-6 w-6 flex-none" aria-hidden="true" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-foreground"
                            >
                                <PiUser className="h-6 w-6 flex-none" aria-hidden="true" />
                                People
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-foreground"
                            >
                                <PiSquaresFour className="h-6 w-6 flex-none" aria-hidden="true" />
                                My Tasks
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                className="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-foreground"
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
                        <div className="text-xs font-semibold uppercase leading-relaxed text-foreground">
                            Workspaces
                        </div>
                        <Link>
                            <PiPlus className="h-4 w-4 text-foreground hover:text-red-500" aria-hidden="true" />
                        </Link>
                    </div>
                    <ul role="list" className="-mx-2 mt-2 space-y-2">
                        <li>
                            <Link
                                href="#"
                                className="group flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 hover:text-foreground dark:text-white dark:hover:bg-gray-800 dark:hover:text-white"
                            >
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-[#ffc107] font-medium leading-6 text-white">
                                    B
                                </span>
                                <span className="truncate">Backend Developer</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="-mx-6 mt-auto">
                    {/* profile */}
                    <div className="flex cursor-pointer items-center gap-x-4 border-t border-gray-200 p-4 hover:bg-gray-50 hover:text-foreground dark:border-gray-800">
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
    );
}
