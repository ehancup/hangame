import { useNavigate } from "react-router-dom"

const StoreCard = ({logo , title, link}) => {
    const navigate = useNavigate()

    return (
        <div className="bg-card w-full h-32 relative flex items-center rounded-lg transition-all cursor-pointer duration-300 hover:translate-x-2 hover:-translate-y-2" onClick={() => {window.open(link, '_blank')}}>
            <div className="aspect-square h-[110%] bg-cardImg absolute left-0 overflow-hidden rounded-2xl">
                <img src={logo} alt="" className="w-full h-full object-cover object-center" />
            </div>
            <div className="text-white ml-44 h-full py-5 ">
                <h1 className="font-poppins font-medium text-2xl">{title}</h1>
                <h1 className="font-poppins text-sm text-paragraph underline mt-3">{link}</h1>
            </div>
        </div>
    )
}

export default StoreCard