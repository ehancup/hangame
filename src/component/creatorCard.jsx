const CreatorCard = ({img, bgimg, name, positions, games}) => {
    return (
        <div className="w-full flex flex-col items-center gap-2 rounded relative group">
            <div className="w-full h-24 bg-cardImg rounded-lg overflow-hidden group-hover:-translate-y-2 transition-all duration-300">
                <img src={bgimg} alt="background" className="w-full h-full object-cover object-center" />
            </div>
            <div className="w-full h-fit bg-card rounded-lg font-poppins pt-20 px-5 pb-10 group-hover:translate-y-2 transition-all duration-300">
                <h1 className="text-white text-2xl font-semibold ">{name}</h1>
                <div className="flex flex-row flex-wrap gap-1 mt-1">
                    {
                        positions.map(e => {
                            return<p className="text-paragraph bg-black bg-opacity-50 py-1 px-2 text-xs rounded" key={e.id}>{e.name}</p>
                        })
                    }
                </div>
                <h3 className="text-paragraph text-sm mt-3">Total Games : {games}</h3>
            </div>
            <div className="ring-[8px] group-hover:ring-[16px] transition-all duration-300 ring-bg1 rounded-full overflow-hidden w-28 h-28 bg-cardImg absolute top-10 left-6">
                <img src={img} alt={name} className="w-full h-full object-cover object-center" />
            </div>

        </div> 
        
    )
}

export default CreatorCard