import { useSearchParams, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const Games = () => {
    let {category} = useParams()
    const [searchParams] = useSearchParams()
    const [page, setPage] = useState('')

    useEffect(() => {
        document.documentElement.scrollTop = 0
    },[category])
    
    useEffect(() => {
        setPage(category)
        
        switch (category) {
            case 'search':
                document.title = searchParams.get('search') ? `Search for "${searchParams.get('search')}"` : 'games'
                
            case 'genres':
                document.title = 'genres'

        }


    }, [category])

    return (
        <div className="w-full min-h-screen bg-blue-400 px-20 mt-32">
            {/* {(searchParams.get('search')) ? (

                <h1 className="">search "{searchParams.get('search')}" {category}</h1>
            ) : apakek.category} */}

        </div>
    )
}

export default Games