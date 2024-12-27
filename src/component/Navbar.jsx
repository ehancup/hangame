import logo from '../assets/logo2.png'
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadDone } from '../features/isLoad';
import { handleIsNav } from '../features/isNavOpen';
import { Link, useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import Loader from './loader';
import '../index.css'
// import Typed from 'typed.js';


const Navbar = () => {
    const isNav = useSelector((state) => state.isNavOpen.navbarOpen)
    const isLoad = useSelector((state) => state.isLoad.load)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    // let [scrollTop, setScrollTop] = useState(0)
    let [loading, setLoading] = useState(true)
    let [lastScroll, setLastScroll] = useState(0)
    let [hideHead, setHideHead] = useState(false)
    let [hideNav, setHideNav] = useState(false)
    let [genres, setGenres] = useState([
        {
            id: 23,
            name: 'jangan lupa nyalain fetchnya nanti'
        }
    ]);
    let [tagged, setTagged] = useState(searchParams.get('tag'));
    let [query, setQuery] = useState(searchParams.get('search'));
    let nav = useRef(null)
    let searchBar = useRef(null)
    let searchBar2 = useRef(null)
    const navigate = useNavigate();

    // window.addEventListener('scroll',() => {
    //     setScrollTop(window.pageYOffset || document.documentElement.scrollTop)
    //     console.log(scrollTop);
    // })

    window.addEventListener('scroll', () => {
        let navbar = nav.current;
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScroll) {
            setHideHead(true)
        } else {
            setHideHead(
                
                
                false)
        }
        setLastScroll(scrollTop)
    })

    const handleNav = () => {
        setHideNav(prev => !prev)
        dispatch(handleIsNav())
        console.log('isnav : ',isNav);
    }

    const handleSearch = () => {
        if (window.innerWidth > 768) {
            let value = searchBar.current.value;
            value = value.split(' ');
            value = value.join('+');

            navigate({
                pathname: '/games/search',
                search: `search=${value}`
            })
        } else {
            console.log(window);
            let value = searchBar2.current.value;
            value = value.split(' ');
            value = value.join('+');

            navigate({
                pathname: '/games/search',
                search: `search=${value}`
            })

        }
    }

    const enter = (event) => {
        let key = event.key;

        if (key === 'Enter') {
            handleSearch();
            setQuery(event.target.value);
        }
    }

    useEffect(() => {
        // window.addEventListener('load' , () => {
            setTimeout(() => {
                setLoading(false)
                dispatch(loadDone())
            }, 3000);
        // })
    },[])

    // window.addEventListener('load', () => {
    //     setTimeout(() => {
    //         if (loading) setLoading(false)
    //     }, 3000);
    // })

    // useEffect(() => {
    //     console.log('scroll berubah');
    //     if (scrollTop > lastScroll){
    //         setHideHead(true)
    //     }

    // },[scrollTop])

    useEffect(() => {
        setTagged(searchParams.get('tag'))
        setQuery('')
    }, [searchParams.get('tag')]);

    // ! jangan lupa nyalain
    useEffect(() => {
        fetch('https://api.rawg.io/api/tags?key=285b90498a88477499a91d5948ac0c50')
            .then(resp => resp.json())
            .then(tags => {
                setGenres(tags.results)
            })
    }, [])

    // console.log(document.querySelector('#gameSearch'));
    return (
        <>
        
            <nav className={`${hideHead ? '-top-12 md:-top-16' : 'top-0'} transition-all duration-300 fixed inset-x-0 flex flex-col bg-bg1 group z-10`} ref={nav}>

                <div><Toaster position="top-center" reverseOrder={false} /></div>
                <div className="w-full h-12 md:h-16 px-5 sm:px-10 lg:px-20  flex flex-row justify-between items-center border-b border-gray-500">
                    <div className=" overflow-hidden ">
                        <img src={logo} alt="" className='h-5 md:h-7 cursor-pointer ' onClick={() => {
                            navigate({
                                pathname: '/'
                            })
                        }} />
                    </div>

                    <div className="h-9 w-fit hidden md:flex flex-row relative items-center">
                        <input placeholder='Search any game' type="search" name="" id="gameSearch" className="h-full backdrop-blur w-[250px] lg:w-[350px] pl-5 pr-10 rounded-full bg-[#57555520] bg-opacity-50 text-[#94a1b2] outline-none" ref={searchBar} onKeyDown={enter} defaultValue={query} />
                        <button onClick={handleSearch} className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 animGran p-1.5 right-1 transition-all duration-300 absolute rounded-full flex items-center"><ion-icon name="search-outline" class="text-white "></ion-icon></button>
                    </div>

                    <div className={`transition-all ease-in-out overflow-hidden duration-300 z-20 font-poppins h-screen md:h-full w-80 px-10 sm:px-16 py-7 md:p-0 md:w-auto flex flex-col items-center justify-between md:justify-center absolute md:static top-0  bg-bg1 md:bg-transparent ${isNav ? 'right-0 rounded-l-none shadow-none' : '-right-96 md:scale-100 rounded-l-[990px] shadow-2xl'}`}>
                        <div className="self-start text-[#94a1b2] border-b w-full border-[#94a1b2] md:hidden pb-2  flex justify-between ">
                            <h1 className="text-xs self-end">navigation</h1>
                            <div className="" onClick={handleNav}>
                                <ion-icon name="close-outline" class='text-white text-3xl'></ion-icon>
                            </div>
                        </div>
                        <ul className="w-full md:w-auto text-white flex flex-col items-start  md:flex-row gap-4 text-2xl md:text-sm lg:text-base list-disc md:list-none ">
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white md:hidden hover:-translate-y-1 ' onClick={handleNav}>
                                <Link to={'/'} className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Home</Link>
                            </li>
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white hover:-translate-y-1 ' onClick={handleNav}>
                                <a href="#" className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Genres</a>
                            </li>
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white hover:-translate-y-1 ' onClick={handleNav}>
                                <a href="#" className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Stores</a>
                            </li>
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white hover:-translate-y-1 ' onClick={handleNav}>
                                <a href="#" className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Developers</a>
                            </li>
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white hover:-translate-y-1 ' onClick={handleNav}>
                                <a href="#" className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Publishers</a>
                            </li>
                            <li className=' transition-all duration-300 marker:text-bg1 hover:marker:text-white md:hidden hover:-translate-y-1' onClick={handleNav}>
                                <a href="#" className='border-b pb-0 border-bg1 hover:border-white hover:pb-1 transition-all duration-300'>Creators</a>
                            </li>
                        </ul>
                        <div className="w-full border-t border-[#94a1b2] pt-2 md:hidden">
                            <p className='text-paragraph text-xs'>Socials</p>
                            <ul className='text-white flex flex-row gap-3'>
                                <li><a href="">LinkedIn</a></li>
                                <li><a href="">Github</a></li>
                                <li><a href="">ehancup</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="h-full flex items-center md:hidden" >
                        <a href='https://wa.me/6281294238988' target='_blank'>tes</a>
                        <div className="" onClick={handleNav}>

                            <ion-icon name="menu-outline" class='text-white text-2xl'></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="w-full px-5 sm:px-10 lg:px-20  py-2 md:pt-3 md:pb-3 flex flex-row flex-wrap gap-3 overflow-x-scroll scrollbar-none md:scrollbar-thin scrollbar-thumb-bg1 group-hover:scrollbar-thumb-basic">
                    <div className="hidden md:flex flex-row flex-nowrap gap-2 w-fit">
                        {
                            genres.map((tag, i) => {

                                if (i < 7) {

                                    return <Link key={tag.id} to={`/games/tags?tag=${tag.id}`} className={`truncate px-4 py-1 rounded-lg border-2 border-[#010101] text-base lg:text-base font-poppins ${(tagged && tagged == tag.id) ? "bg-opacity-100 opacity-100 bg-white text-gray-600 " : "bg-opacity-50 opacity-50 hover:bg-opacity-100 hover:opacity-100 bg-[#16161a] text-white font-light"}  transition duration-300 hidden  md:block `}>{tag.name}</Link>
                                }

                            })
                        }
                    </div>
                    <div className="h-8 w-full flex flex-rowitems-center md:hidden">
                        <input placeholder='Search any game' type="search" name="" id="gameSearch2" className="h-full backdrop-blur w-full pl-5 pr-10 rounded-l-full bg-[#57555520] bg-opacity-50 text-[#94a1b2] text-sm outline-none" ref={searchBar2} onKeyDown={enter} defaultValue={query} />
                        <button onClick={handleSearch} className="bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 animGran px-5 h-full rounded-r-full flex items-center"><ion-icon name="search-outline" class="text-white "></ion-icon></button>
                    </div>

                </div>

            </nav>
            <Loader loading={isLoad}/> 
        </>
    )
}

export default Navbar