import React from 'react'
import shieldSearch from "../assets/shield-search.svg"
import frame1 from "../assets/Frame2877.svg"
import frame2 from "../assets/Frame2879.svg"
import "./index.css"


export default function Table() {
  return (
    <div id="table" className="mt-5">
        <table className="w-full text-sm">
            <thead className="bg-[#FAFAFA]">
                <tr className="text-[#98949E]">
                    <th className="font-light py-3">Customer Name</th>
                    <th className="font-light py-3">Level</th>
                    <th className="font-light py-3">Favorite Menu</th>
                    <th className="font-light py-3">Total transactions</th>
                    <th className="font-light py-3">Action</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#F6FCFE] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#56CCF2] to-[#2F80ED]" >Juragan</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#F6FEF9] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#38EF7D] to-[#11998E]" >Sultan</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEF5FF] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#E100FF] to-[#7F00FF]" >Konglomerat</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td className="py-2">Odin Reinhart</td>
                    <td className="py-2">
                        <div className="px-3 py-1 bg-[#FEFBF6] rounded-sm">
                            <p className="level bg-gradient-to-r from-[#EEA849] to-[#F46B45]" >Warga</p>
                        </div>
                    </td>
                    <td className="py-2">Chicken & Ribs Combo</td>
                    <td className="py-2">IDR 194,700</td>
                    <td className="flex gap-x-1 justify-center py-2">
                        <div className="flex bg-[#FAFAFA] px-3 rounded-md gap-x-3">
                            <img src={shieldSearch} alt=""/>
                            <button>Details</button>
                        </div>
                        <button>
                            <img src={frame1} alt=""/>
                        </button>
                        <button>
                            <img src={frame2} alt=""/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
