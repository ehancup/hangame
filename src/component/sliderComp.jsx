    import { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../index.css'

function SwiperComp({ swipers , delay}) {
    const isLoad = useSelector((state) => state.isLoad.load)
    const [bgFixed, setBgFixed] = useState(false)
    const bg = useRef(null)
    let [currentIndex, setCurrentIndex] = useState(0)

    // ? fungsi auto swipe
    const shuffleSwiper = useCallback(() => {
        // const index = Math.floor(Math.random() * swipers.length);
        setCurrentIndex(prev => {
            if (prev == swipers.length - 1) {
                return 0
            } else {
                return prev + 1
            }
        });
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffleSwiper, delay)
        return () => clearInterval(intervalID);
    }, [])

    useEffect(() => {
        let background = bg.current;
        background.addEventListener('transitionend', () => {
            setBgFixed(true)
        })
    })

    const handleNextSwipe = () => {
        if (currentIndex == swipers.length - 1) {
            setCurrentIndex(0)
            return false
        }
        setCurrentIndex(prev => prev + 1)
    }
    const handlePrevSwipe = () => {
        if (currentIndex == 0) {
            setCurrentIndex(swipers.length - 1)
            return false
        }
        setCurrentIndex(prev => prev - 1)
    }

    return (

        <div ref={bg} className={`w-full aspect-[16/8] overflow-hidden bg-no-repeat relative group duration-1000 transition-all delay-200 ${isLoad ? 'rounded-t-[50%]' : 'rounded-none'} ${bgFixed ? 'bg-scroll xl:bg-fixed' : 'bg-scroll'}`} style={{ backgroundImage: `url(${swipers[currentIndex]})`, backgroundSize: 'cover' , backgroundPosition: 'center center' }} >
            <button className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center left-5 md:opacity-0 group-hover:opacity-100 md:group-hover:left-2 transition-all duration-300" onClick={handlePrevSwipe}><ion-icon name="chevron-back-outline"></ion-icon></button>
            <button className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center right-5 md:opacity-0 group-hover:opacity-100 md:group-hover:right-2 transition-all duration-300" onClick={handleNextSwipe}><ion-icon name="chevron-forward-outline"></ion-icon></button>
            <div className="flex flex-row gap-2 md:gap-3 absolute right-1/2 translate-x-1/2 bottom-2 md:bottom-3">
                {swipers.map((slide, i) => {
                    return <div className={`md:h-3 md:w-3 h-2 w-2 rounded-full ${(i == currentIndex) ? 'bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 animGran' : 'bg-slate-600'}`} onClick={() => { setCurrentIndex(i); }} key={i}></div>;
                })}
            </div>
        </div>
    )
}

export default SwiperComp