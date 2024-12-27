import logo from '../assets/logo2.png'

const Footer = () => {
    return (
        <footer className="flex flex-col px-20 py-8 bg-bg1 gap-10 border-t-2 border-paragraph w-full items-center">
            <div className="h-10 w-full flex flex-row justify-between items-center">
                <div className="h-full">
                    <img src={logo} alt="HANGAMES" className="h-full" />
                </div>
                <a href='https://rawg.io/' target='_blank' className="font-roboto font-bold text-white tracking-[10px] text-3xl">RAWG</a>
            </div>
            <div className="w-full h-[2px] bg-paragraph rounded-full"></div>
            <h1 className="text-white font-poppins">&copy; HANGAMES 2023</h1>


        </footer>
    )
}

export default Footer