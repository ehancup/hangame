import React from "react"
import { Link } from "react-router-dom"

const LinkBtn = ({address, title, ...props}) => {
    return (
        <Link to={address} class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group">
            <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out font-poppins group-hover:text-gray-900">{title}</span>
            <span class="absolute inset-0 border-2 border-white rounded-full"></span>
        </Link>
    )
}

export default LinkBtn