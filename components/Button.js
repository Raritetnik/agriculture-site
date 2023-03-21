import {BsFillArrowRightCircleFill} from "react-icons/bs"

export default function Button({name, color}) {
    return(
        <button
        style={{
            backgroundColor: color
        }}
        className="p-7 rounded-2xl flex items-center font-semibold">
        {name}
        <BsFillArrowRightCircleFill
        size={23}
        className='ml-2'/>
        </button>
    )
}