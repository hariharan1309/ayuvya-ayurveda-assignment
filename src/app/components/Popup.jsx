'use client'
import { useState } from "react";
import Rating from "../components/Rating";
import Pill from "../components/Pill";

export default function Popup(){
    const [up,setUp]=useState(false);
    const [down,setDown]=useState(false);
    return(
        <section className="flex flex-col gap-10">
            <h1 className="font-serif font-extrabold text-3xl mt-2">Leave a review</h1>
            <Rating title="Safety" subtitle="How safe did you feel with Trausti??"/>
            <Rating title="Communication" subtitle="How easy was to communicate with Trausti?"/>

            <div className="flex flex-col gap-2">
                <h2 className="font-serif text-xl font-semibold">Would you Recommend Trausti</h2>
                <h3 className="text-xl text-gray-500">{`Your opinion won't be posted publicly`}</h3>
                <div className="flex flex-row gap-5 items-center">
                    <div className="flex flex-row items-center gap-2" 
                    onClick={()=>{
                        down===true?null
                        :setDown((prev)=>!prev)
                         setUp(false)}}>
                        <svg className="rotate-180 scale-x-[-1] cursor-pointer" style={{transform:"rotateY(180)"}} height="40px" version="1.1" viewBox="0 0 22 20" width="40px" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" ><title/><desc/><defs/>
                            <g className={`${down?'fill-[#ef4444]':'fill-gray-400'}`} fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g  id="Core" transform="translate(-295.000000, -464.000000)"><g id="thumb-up" transform="translate(295.000000, 464.000000)"><path d="M0,20 L4,20 L4,8 L0,8 L0,20 L0,20 Z M22,9 C22,7.9 21.1,7 20,7 L13.7,7 L14.7,2.4 L14.7,2.1 C14.7,1.7 14.5,1.3 14.3,1 L13.2,0 L6.6,6.6 C6.2,6.9 6,7.4 6,8 L6,18 C6,19.1 6.9,20 8,20 L17,20 C17.8,20 18.5,19.5 18.8,18.8 L21.8,11.7 C21.9,11.5 21.9,11.2 21.9,11 L21.9,9 L22,9 C22,9.1 22,9 22,9 L22,9 Z" id="Shape"/></g></g></g>
                        </svg>
                        <span className={`text-sm font-medium ${down?'text-[#ef4444]':'text-gray-400'}`}>NO</span>
                    </div>
                    <div className="flex flex-row items-center gap-2" 
                    onClick={()=>{
                        up===true?
                        null:
                        setUp((prev)=>!prev)
                        setDown(false);
                    }}
                    >
                        <svg className="cursor-pointer" height="40px" version="1.1" viewBox="0 0 22 20" width="40px" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink"  ><title/><desc/><defs/>
                            <g className={`${up?'fill-[#22c55e]':'fill-gray-400'}`}fill={`${up?'fill-[#22c55e]':'fill-gray-400'}`} fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g  id="Core" transform="translate(-295.000000, -464.000000)"><g id="thumb-up" transform="translate(295.000000, 464.000000)"><path d="M0,20 L4,20 L4,8 L0,8 L0,20 L0,20 Z M22,9 C22,7.9 21.1,7 20,7 L13.7,7 L14.7,2.4 L14.7,2.1 C14.7,1.7 14.5,1.3 14.3,1 L13.2,0 L6.6,6.6 C6.2,6.9 6,7.4 6,8 L6,18 C6,19.1 6.9,20 8,20 L17,20 C17.8,20 18.5,19.5 18.8,18.8 L21.8,11.7 C21.9,11.5 21.9,11.2 21.9,11 L21.9,9 L22,9 C22,9.1 22,9 22,9 L22,9 Z" id="Shape"/></g></g></g>
                        </svg>
                        <span className={`text-sm font-medium ${up?'text-[#22c55e]':'text-gray-400'}`}>YES</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="font-serif text-xl font-semibold">Praise</h2>
                <h3 className="text-xl text-gray-500 mt-1">What traits best describe Trausti?</h3>
                <div className="flex flex-row gap-4">
                    <Pill title="Adventerous" />
                    <Pill title="Clean" />
                    <Pill title=" Good listener" />
                </div>
            </div>
        </section>
    )
}