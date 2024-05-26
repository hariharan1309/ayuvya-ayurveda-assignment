import { useState } from "react";

export default function Rating({title,subtitle}){
    const [index,setIndex]=useState(0);
    return(
        <div className="flex flex-col gap-1">
            <h2 className="font-serif text-xl font-semibold">{title}</h2>
            <h3 className="text-lg text-gray-500">{subtitle}</h3>
            <div className="flex flex-row">
                {Array(5).fill().map((_, i) => (
                    <div key={i} onClick={()=>{setIndex(i)}}>
                        <svg enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={` cursor-pointer h-10 w-10 ${i<=index?'fill-yellow-400':'fill-zinc-300'}`}>
                            <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" id="XMLID_328_"/>
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    )
}
