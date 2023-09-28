import { Textfit } from 'react-textfit';
import { useContext } from "react"
import { CalcContext } from "../context/calcContext"

export default function Screen(){
    const {calc}=useContext(CalcContext);
    return(
        <Textfit max={50} mode="single" className="px-2 py-4 text-right bg-gray-400 text-lg text-white font-medium w-1/3">{calc.num?calc.num:calc.res}</Textfit>
    )
}