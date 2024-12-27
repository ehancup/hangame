import { useNavigate } from "react-router-dom"

const GameCard = ({name, rating, ratingsCount, genres, image ,id}) => {
    const navigate = useNavigate();

    const gotoDetail = (id) => {
        navigate({
            pathname: '/games/detail',
            search: `id=${id}`,
        })
    }

    const gotoGenre = (id) => {
        navigate({
            pathname: '/games/genres',
            search: `genre=${id}`,
        })
    }

    return(
        <div className={`w-full flex flex-col overflow-hidden rounded-md bg-card  transition-all duration-300 `}  >
            <div className="w-full bg-cardImg h-[240px] relative group cursor-pointer" onClick={() => {gotoDetail(id)}}>
                <img src={image} alt="" className="w-full h-full object-center object-cover" />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-headline font-quicksand text-3xl transition-all duration-300 font-medium">see detail</div>
                <div className="py-1 px-2 bg-black bg-opacity-80 absolute rounded flex flex-row gap-2 items-center text-white font-quicksand top-3 left-3"><ion-icon name ="star" class="text-yellow-400"></ion-icon>{rating} <span className="text-xs text-paragraph">+{ratingsCount} users</span></div>
                
            </div>
            <div className="w-full h-fit py-3 px-4">
                <div className="w-full flex flex-row flex-wrap gap-2">
                    {
                        genres.map(genre => {
                            return<h3 className="py-1 px-2 text-xs bg-black bg-opacity-50 text-paragraph rounded hover:bg-opacity-100 hover:text-headline transition-all duration-300 cursor-pointer" key={genre.id} onClick={() => {gotoGenre(genre.id)}}>{genre.name}</h3>

                        })
                    }

                </div>
                <h1 className="mt-2 w-fit cursor-pointer text-headline text-2xl font-poppins  font-semibold decoration-card hover:decoration-white underline transition-all duration-300" onClick={() => {gotoDetail(id)}}>{name}</h1>
            </div>
        </div>
    )
}

export default GameCard