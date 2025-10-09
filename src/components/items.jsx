import { Check } from "lucide-react"

const ItemList = ({ text }) => {


    return (
        <li className="flex">
            <Check className="bg-red-400 text-white rounded-full p-1" strokeWidth={3} size={30} />
            <span className="text-[#36384E]">{text}</span>
        </li>
    )
}

export default ItemList 