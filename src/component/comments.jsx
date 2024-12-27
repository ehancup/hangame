const CommentsComp = ({userName, userEmail, comment}) => {
    return (
        <div className=" bg-card rounded-xl shadow-md p-8 h-fit">
            <div className="">
                <h1 className="text-white font-poppins text-2xl spacing font-medium">{userName}</h1>
                <p className="text-paragraph font-poppins ">{userEmail}</p>
            </div>
            <p className="text-white font-extralight italic font-quicksand text-2xl mt-5">"{comment}"</p>
        </div>
    )
}

export default CommentsComp