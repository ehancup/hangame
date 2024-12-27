// import loader from './loader.svg'
// import './loader.css'
import { PulseLoader } from "react-spinners"
import { useRef, useEffect, useState } from "react"

const Loader = ({loading}) => {
    const loaderRef = useRef(null)


    useEffect(() => {

        let loader = loaderRef.current;
        
        // loader.addEventListener('transitionend', () => {
        //     loader.remove()
        // })

        setTimeout(() => {
            loader.remove()
        }, 4000)
    },[])

    return (
        <div ref={loaderRef} className={`fixed inset-x-0 h-screen bg-bg1 flex justify-center items-center z-50 transition-all duration-700 border-b-4 border-paragraph md:duration-1000 ease-out ${loading ? 'top-0 rounded-none' : '-top-[100vh] rounded-[0%0%50%50%/0%0%30%30%]'}`}>
            <div className="h-40 w-40 bg-transparent border-b-8 border-b-white rounded-full animate-spin"></div>
        </div>
    )
}

export default Loader