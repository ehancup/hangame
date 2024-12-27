import { useState, useEffect } from "react";
import { setFalseNav } from "../features/isNavOpen";
import { useDispatch, useSelector } from "react-redux";
import commentsJSON from '../store/comments'
import CreatorCard from "../component/creatorCard";
import LinkBtn from "../component/hoverBtn";
import GameCard from "../component/gameCard";
import StoreCard from "../component/storeCard";
import SwiperComp from "../component/sliderComp";
import CommentsComp from "../component/comments";
import gif from '../assets/gameGif.gif'
//* image for store
import epicGames from '../assets/epic.jpeg'
import apple from '../assets/apple.png'
import steam from '../assets/steam.jpeg'
import playstore from '../assets/playstore.webp'
import psstore from '../assets/psstore.jpg'
import xbox from '../assets/xbox.webp'
//* image for slider
import image_1 from '../assets/image_1.webp'
import image_2 from '../assets/image_2.webp'
import image_3 from '../assets/image_3.webp'
import image_4 from '../assets/image_4.webp'
import image_5 from '../assets/image_5.webp'
import image_6 from '../assets/image_6.webp'
import '../index.css'

const Home = () => {
    const isNav = useSelector(state => state.isNavOpen.navbarOpen)
    const isLoad = useSelector((state) => state.isLoad.load)
    const [comments, setComments] = useState(commentsJSON)
    const [gameItems, setGameItems] = useState([
        {
            "id": 4200,
            "slug": "portal-2",
            "name": "Portal 2",
            "released": "2011-04-18",
            "tba": false,
            "background_image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            "rating": 4.61,
            "rating_top": 5,
            "ratings": [
                {
                    "id": 5,
                    "title": "exceptional",
                    "count": 3776,
                    "percent": 70.34
                },
                {
                    "id": 4,
                    "title": "recommended",
                    "count": 1333,
                    "percent": 24.83
                },
                {
                    "id": 3,
                    "title": "meh",
                    "count": 143,
                    "percent": 2.66
                },
                {
                    "id": 1,
                    "title": "skip",
                    "count": 116,
                    "percent": 2.16
                }
            ],
            "ratings_count": 5319,
            "reviews_text_count": 32,
            "added": 17607,
            "added_by_status": {
                "yet": 592,
                "owned": 10838,
                "beaten": 5144,
                "toplay": 345,
                "dropped": 543,
                "playing": 145
            },
            "metacritic": 95,
            "playtime": 11,
            "suggestions_count": 543,
            "updated": "2023-07-07T21:51:52",
            "user_game": null,
            "reviews_count": 5368,
            "saturated_color": "0f0f0f",
            "dominant_color": "0f0f0f",
            "platforms": [
                {
                    "platform": {
                        "id": 14,
                        "name": "Xbox 360",
                        "slug": "xbox360",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 2786,
                        "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 75239,
                        "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "macOS",
                        "slug": "macos",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 101647,
                        "image_background": "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
                    },
                    "released_at": null,
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 16,
                        "name": "PlayStation 3",
                        "slug": "playstation3",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 3183,
                        "image_background": "https://media.rawg.io/media/games/8e4/8e4de3f54ac659e08a7ba6a2b731682a.jpg"
                    },
                    "released_at": "2011-04-19",
                    "requirements_en": null,
                    "requirements_ru": null
                },
                {
                    "platform": {
                        "id": 4,
                        "name": "PC",
                        "slug": "pc",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 513929,
                        "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                    },
                    "released_at": null,
                    "requirements_en": null,
                    "requirements_ru": {
                        "minimum": "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
                        "recommended": "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение"
                    }
                },
                {
                    "platform": {
                        "id": 1,
                        "name": "Xbox One",
                        "slug": "xbox-one",
                        "image": null,
                        "year_end": null,
                        "year_start": null,
                        "games_count": 5533,
                        "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg"
                    },
                    "released_at": "2011-04-18",
                    "requirements_en": null,
                    "requirements_ru": null
                }
            ],
            "parent_platforms": [
                {
                    "platform": {
                        "id": 1,
                        "name": "PC",
                        "slug": "pc"
                    }
                },
                {
                    "platform": {
                        "id": 2,
                        "name": "PlayStation",
                        "slug": "playstation"
                    }
                },
                {
                    "platform": {
                        "id": 3,
                        "name": "Xbox",
                        "slug": "xbox"
                    }
                },
                {
                    "platform": {
                        "id": 5,
                        "name": "Apple Macintosh",
                        "slug": "mac"
                    }
                },
                {
                    "platform": {
                        "id": 6,
                        "name": "Linux",
                        "slug": "linux"
                    }
                }
            ],
            "genres": [
                {
                    "id": 2,
                    "name": "Shooter",
                    "slug": "shooter",
                    "games_count": 59323,
                    "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
                },
                {
                    "id": 7,
                    "name": "Puzzle",
                    "slug": "puzzle",
                    "games_count": 97104,
                    "image_background": "https://media.rawg.io/media/games/c00/c003705c0eaed100397ae408b7b89e90.jpg"
                }
            ],
            "stores": [
                {
                    "id": 465889,
                    "store": {
                        "id": 2,
                        "name": "Xbox Store",
                        "slug": "xbox-store",
                        "domain": "microsoft.com",
                        "games_count": 4767,
                        "image_background": "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
                    }
                },
                {
                    "id": 13134,
                    "store": {
                        "id": 1,
                        "name": "Steam",
                        "slug": "steam",
                        "domain": "store.steampowered.com",
                        "games_count": 76788,
                        "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                    }
                },
                {
                    "id": 4526,
                    "store": {
                        "id": 3,
                        "name": "PlayStation Store",
                        "slug": "playstation-store",
                        "domain": "store.playstation.com",
                        "games_count": 7823,
                        "image_background": "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
                    }
                },
                {
                    "id": 33916,
                    "store": {
                        "id": 7,
                        "name": "Xbox 360 Store",
                        "slug": "xbox360",
                        "domain": "marketplace.xbox.com",
                        "games_count": 1912,
                        "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                    }
                }
            ],
            "clip": null,
            "tags": [
                {
                    "id": 31,
                    "name": "Singleplayer",
                    "slug": "singleplayer",
                    "language": "eng",
                    "games_count": 206544,
                    "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg"
                },
                {
                    "id": 40847,
                    "name": "Steam Achievements",
                    "slug": "steam-achievements",
                    "language": "eng",
                    "games_count": 30840,
                    "image_background": "https://media.rawg.io/media/games/120/1201a40e4364557b124392ee50317b99.jpg"
                },
                {
                    "id": 7,
                    "name": "Multiplayer",
                    "slug": "multiplayer",
                    "language": "eng",
                    "games_count": 35108,
                    "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg"
                },
                {
                    "id": 40836,
                    "name": "Full controller support",
                    "slug": "full-controller-support",
                    "language": "eng",
                    "games_count": 14476,
                    "image_background": "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
                },
                {
                    "id": 13,
                    "name": "Atmospheric",
                    "slug": "atmospheric",
                    "language": "eng",
                    "games_count": 29635,
                    "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                },
                {
                    "id": 40849,
                    "name": "Steam Cloud",
                    "slug": "steam-cloud",
                    "language": "eng",
                    "games_count": 14345,
                    "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                },
                {
                    "id": 7808,
                    "name": "steam-trading-cards",
                    "slug": "steam-trading-cards",
                    "language": "eng",
                    "games_count": 7571,
                    "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                },
                {
                    "id": 18,
                    "name": "Co-op",
                    "slug": "co-op",
                    "language": "eng",
                    "games_count": 9892,
                    "image_background": "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg"
                },
                {
                    "id": 118,
                    "name": "Story Rich",
                    "slug": "story-rich",
                    "language": "eng",
                    "games_count": 18334,
                    "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
                },
                {
                    "id": 411,
                    "name": "cooperative",
                    "slug": "cooperative",
                    "language": "eng",
                    "games_count": 4104,
                    "image_background": "https://media.rawg.io/media/games/476/476178ef18ab0534771d099f51cdc694.jpg"
                },
                {
                    "id": 8,
                    "name": "First-Person",
                    "slug": "first-person",
                    "language": "eng",
                    "games_count": 28676,
                    "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                },
                {
                    "id": 32,
                    "name": "Sci-fi",
                    "slug": "sci-fi",
                    "language": "eng",
                    "games_count": 17236,
                    "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
                },
                {
                    "id": 30,
                    "name": "FPS",
                    "slug": "fps",
                    "language": "eng",
                    "games_count": 12151,
                    "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
                },
                {
                    "id": 9,
                    "name": "Online Co-Op",
                    "slug": "online-co-op",
                    "language": "eng",
                    "games_count": 4438,
                    "image_background": "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg"
                },
                {
                    "id": 4,
                    "name": "Funny",
                    "slug": "funny",
                    "language": "eng",
                    "games_count": 22604,
                    "image_background": "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
                },
                {
                    "id": 189,
                    "name": "Female Protagonist",
                    "slug": "female-protagonist",
                    "language": "eng",
                    "games_count": 10614,
                    "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
                },
                {
                    "id": 123,
                    "name": "Comedy",
                    "slug": "comedy",
                    "language": "eng",
                    "games_count": 10929,
                    "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
                },
                {
                    "id": 75,
                    "name": "Local Co-Op",
                    "slug": "local-co-op",
                    "language": "eng",
                    "games_count": 4982,
                    "image_background": "https://media.rawg.io/media/games/33b/33b825c76382931df0fd8ecddf5caebe.jpg"
                },
                {
                    "id": 11669,
                    "name": "stats",
                    "slug": "stats",
                    "language": "eng",
                    "games_count": 4503,
                    "image_background": "https://media.rawg.io/media/games/74d/74dafeb9a442b87b9dd4a1d4a2faa37b.jpg"
                },
                {
                    "id": 40852,
                    "name": "Steam Workshop",
                    "slug": "steam-workshop",
                    "language": "eng",
                    "games_count": 1324,
                    "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                },
                {
                    "id": 25,
                    "name": "Space",
                    "slug": "space",
                    "language": "eng",
                    "games_count": 41805,
                    "image_background": "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg"
                },
                {
                    "id": 40838,
                    "name": "Includes level editor",
                    "slug": "includes-level-editor",
                    "language": "eng",
                    "games_count": 1648,
                    "image_background": "https://media.rawg.io/media/games/e0f/e0f05a97ff926acf4c8f43e0849b6832.jpg"
                },
                {
                    "id": 40833,
                    "name": "Captions available",
                    "slug": "captions-available",
                    "language": "eng",
                    "games_count": 1236,
                    "image_background": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
                },
                {
                    "id": 40834,
                    "name": "Commentary available",
                    "slug": "commentary-available",
                    "language": "eng",
                    "games_count": 254,
                    "image_background": "https://media.rawg.io/media/games/726/7263e11b6bfb15abe35dcfa3b26147f5.jpg"
                },
                {
                    "id": 87,
                    "name": "Science",
                    "slug": "science",
                    "language": "eng",
                    "games_count": 1519,
                    "image_background": "https://media.rawg.io/media/games/cae/caeb9d0cb154124b132d51861735431e.jpg"
                }
            ],
            "esrb_rating": {
                "id": 2,
                "name": "Everyone 10+",
                "slug": "everyone-10-plus"
            },
            "short_screenshots": [
                {
                    "id": -1,
                    "image": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
                },
                {
                    "id": 99018,
                    "image": "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
                },
                {
                    "id": 99019,
                    "image": "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg"
                },
                {
                    "id": 99020,
                    "image": "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg"
                },
                {
                    "id": 99021,
                    "image": "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg"
                },
                {
                    "id": 99022,
                    "image": "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg"
                },
                {
                    "id": 99023,
                    "image": "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg"
                }
            ]
        },
    ]);
    const [creator, setCreator] = useState([
        {
            "id": 31,
            "name": "Gabe Newell",
            "slug": "gabe-newell",
            "image": "https://media.rawg.io/media/persons/5e5/5e5e064d3475fc3fe49d1d2debb4e36c.jpg",
            "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
            "games_count": 24,
            "positions": [
                {
                    "id": 2,
                    "name": "director",
                    "slug": "director"
                },
                {
                    "id": 5,
                    "name": "producer",
                    "slug": "producer"
                },
                {
                    "id": 7,
                    "name": "programmer",
                    "slug": "programmer"
                }
            ],
            "games": [
                {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 17614
                },
                {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 15257
                },
                {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14961
                },
                {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14884
                },
                {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 13319
                },
                {
                    "id": 19710,
                    "slug": "half-life-2-episode-one",
                    "name": "Half-Life 2: Episode One",
                    "added": 10013
                }
            ]
        }
    ])
    const [text, setText] = useState("");
    const dispatch = useDispatch()

    document.title = 'Explore HANGAMES - The Game Search API';

    // console.log(commentsJSON);

    const swipers = [image_1, image_2, image_3, image_4, image_5, image_6]

    useEffect(() => {
    //     const randomPage = Math.floor(Math.random() * 20)

    //     console.log('page', randomPage);

        fetch(`https://api.rawg.io/api/games?key=285b90498a88477499a91d5948ac0c50&page=6`)
            .then(resp => resp.json())
            .then(item => {
                setGameItems(item.results)
            })
    }, [])

    useEffect(() => {
        fetch('https://api.rawg.io/api/creators?key=285b90498a88477499a91d5948ac0c50')
            .then(resp => resp.json())
            .then(item => {
                setCreator(item.results)
            })
    }, [])

    return (
        <>

            <section className={`  font-exo w-full transition-all duration-1000 ease-out delay-200 ${isLoad ? 'mt-96 md:mt-[1000px]' : 'mt-24 md:mt-32'}`} onClick={() => dispatch(setFalseNav())}>
                <SwiperComp swipers={swipers} delay={10000} />

            </section>
            <section className="px-5 sm:px-10 lg:px-28 mt-24 ">
                <h1 className="text-headline text-6xl font-bold">New & Trending</h1>
                <h1 className="text-paragraph text-xl mt-3">Based on player counts and release date</h1>
                <div className="pt-12 columns-4 space-y-10 gap-10">
                    {
                        gameItems.map(item => {
                            return <GameCard name={item.name} rating={item.rating} ratingsCount={item.ratings_count} genres={item.genres} image={item.background_image} key={item.id} id={item.id} />
                        })
                    }
                </div>
                <div className="w-full flex justify-end flex-row mt-10">
                    <LinkBtn address={'/games/allgames'} title={'See All'} />
                </div>
            </section>
            <section className="mt-24 px-5 sm:px-10 lg:px-28">
                <h1 className="text-headline text-6xl font-bold">Meet the Creators</h1>
                <h1 className="text-paragraph text-xl mt-3">There are more than 25.000 creators out there</h1>
                <div className="grid grid-cols-5 gap-5 mt-12">
                    {
                        creator.map(e => {
                            return <CreatorCard img={e.image} bgimg={e.image_background} name={e.name} positions={e.positions} games={e.games_count} key={e.id} />
                        })
                    }
                </div>

            </section>
            <section className="mt-24 relative min-h-[80vh] bg-cover bg-fixed overflow-hidden border-y-4 border-card rounded-[50%/5%]" style={{ backgroundImage: `url(${gif})`, backgroundPosition: 'center center' }}>
                <div className="absolute inset-0 top-0 bg-black bg-opacity-50 flex flex-col gap-8 justify-center items-center">
                    <h1 className="font-poppins font-black text-white text-5xl"> Your World, Your Rules, Your Games</h1>
                    <LinkBtn address={'/games/allgames'} title={'See All Games'} />
                </div>
            </section>
            <section className="mt-24 px-5 sm:px-10 lg:px-28 w-full">
                <h1 className="text-headline text-6xl font-bold">One-Stop Game Shop</h1>
                <h1 className="text-paragraph text-xl mt-3">for All Things Gaming, Connect, Play, and Conquer</h1>
                <div className="grid grid-cols-3 gap-14 w-full my-12">

                    <StoreCard logo={epicGames} title={'Epic Games'} link={'https://store.epicgames.com'} />
                    <StoreCard logo={apple} title={'Apple Store'} link={'https://www.apple.com/id/app-store'} />
                    <StoreCard logo={psstore} title={'PlayStation'} link={'https://store.playstation.com'} />
                    <StoreCard logo={steam} title={'Steam'} link={'https://store.steampowered.com'} />
                    <StoreCard logo={xbox} title={'Xbox Store'} link={'https://www.xbox.com'} />
                    <StoreCard logo={playstore} title={'Google Playstore'} link={'https://play.google.com/store'} />
                </div>
            </section>
            <section className="mt-24 px-5 sm:px-10 lg:px-28 w-full">
                <h1 className="text-headline text-6xl font-bold">Comments</h1>
                <h1 className="text-paragraph text-xl mt-3">Regarding our website</h1>
                <div className="grid grid-cols-2 gap-10">

                    <div className="grid grid-cols-1 gap-10 mt-12">
                        {
                            comments.map((e, i) => {
                                if (i <= 4) {

                                    return <CommentsComp key={e.id} userName={e.username} userEmail={e.email} comment={e.comment} />
                                }
                            })
                        }

                    </div>
                    <div className="grid grid-cols-1 gap-10 mt-12">
                        {
                            comments.map((e, i) => {
                                if (i >= 5) {

                                    return <CommentsComp key={e.id} userName={e.username} userEmail={e.email} comment={e.comment} />
                                }
                            })
                        }

                    </div>
                </div>

            </section>
            <section className="mt-24 w-full h-52 bg-blue-600"></section>
        </>
    )
}

export default Home

