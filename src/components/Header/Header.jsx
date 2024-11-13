import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Header() {
    return (        
        <header className="flex shadow sticky z-50 top-0 justify-center items-center w-full lg:flex lg:w-auto lg:order-1 flex-wrap  mx-auto max-w-screen-xl bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">

            <ul className="flex mt-4 font-medium sm: font- lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                            `block py-2 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                            `block py-2 pr-4 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        About
                    </NavLink>
                </li>
                
                <li>
                    <NavLink
                        to="/benefits"
                        className={({isActive}) =>
                            `block py-2 pr-4  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Benefits
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({isActive}) =>
                            `block py-2 pr-4  duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>

        </header>
    );
}

