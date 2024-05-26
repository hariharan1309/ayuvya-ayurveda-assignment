import { useState } from "react";

export default function Pill({title}){
    const [stat,setStat]=useState(false);
    return(
        <span onClick={()=>setStat((prev)=>!prev)} className={`py-1.5 px-3 rounded-full text-gray-800 cursor-pointer text-sm font-medium ${stat?'bg-green-300':'bg-gray-200'}`} >{title}</span>
    )
}
