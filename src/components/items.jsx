import { Check } from "lucide-react"

const ItemList = ({ text }) => {


    return (
        <li className="text-[18px] font-medium flex items-start gap-x-3.5">
            <Check className="bg-red-400 text-white rounded-full p-1" strokeWidth={3} size={25} />
            <span className="text-[#36384E]">{text}</span>
        </li>
    )
}

export default ItemList 