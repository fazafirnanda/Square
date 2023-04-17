import React from 'react'
import vector1 from "../assets/Vector(1).svg"
import ellipse13 from "../assets/Ellipse13.svg"
import ellipse14 from "../assets/Ellipse14.svg"
import ellipse15 from "../assets/Ellipse15.svg"
import one from "../assets/one.svg"
import grafik from "../assets/grafik.svg"

export default function Banner() {
  return (
    <div className="w-1/4">
        <div className="bg-[#5d5ff0] rounded-md px-3 py-4 h-72 relative overflow-hidden -z-20 flex flex-col justify-between">
            <img src={vector1} alt="" className="-z-10 absolute w-[44rem] h-[12rem] -translate-x-9 -translate-y-12 -rotate-[18deg]"/>
            <img src={ellipse13} alt="" className="absolute bottom-0 right-0"/>
            <img src={ellipse14} alt="" className="absolute bottom-0 right-0"/>
            <img src={ellipse15} alt="" className="absolute bottom-0 right-0"/>
            <div>
                <h1 className="text-2xl text-white z-10">See analytics of <br/>the Customer <br/>Clearly</h1>
            </div>
            <div>
                <button style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}} className="block p-2 px-4 rounded-lg text-white backdrop-blur-md font-light">See Analytics</button>
            </div>
        </div>

        <div className="rounded-lg bg-[#FAFAFA] mt-5">
            <div className="px-3 py-4">
                <div>
                    <h1 className="text-xl">Top Menu <br/> <span className="text-[#F17300]">This Week</span></h1>
                    <p className="text-xs text-[#98949E]">10 - 12 Agustus 2023</p>
                </div>
                <div className="text-sm mt-5">
                    <div className="bg-white rounded-lg shadow-md p-3 relative">
                        <img src={one} alt="" className="absolute top-0 right-0 -translate-y-2"/>
                        <p className="font-bold">Nasi Goreng Jamur <br/> Special Resto Pak Min</p>
                    </div>
                    <div className="mt-3 flex flex-col gap-y-4 text-[#98949E]">
                        <p>2. Tongseng Sapi Gurih</p>
                        <p>3. Nasi Gudeg Telur Ceker</p>
                        <p>4. Nasi Ayam serundeng</p>
                        <p>5. Nasi Goreng Seafood</p>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <img src={grafik} alt="" style={{ width: "100%" }}/>
            </div>
        </div>
    </div> 
  )
}
