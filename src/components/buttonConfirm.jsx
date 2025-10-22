const ConfirmButton = (props) => {
    
    return (
        <button 
            {...props}
            className="bg-[#232742] text-white hover:bg-linear-to-r from-pink-500 to-orange-500 to-85% hover:shadow-[5px_5px_5px_#f562006c] rounded-[10px] text-[18px] font-semibold p-4 cursor-pointer outline-none transition-all ease-in-out duration-200"
        >
            {props.children}
        </button>
    )
}

export default ConfirmButton