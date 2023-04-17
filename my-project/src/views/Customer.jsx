import React from 'react'
import mainBanner from "../assets/unsplash_wtevVfGYwnM.png"
import plus from "../assets/plus.svg"
import search from "../assets/search-normal.svg"
import print from "../assets/printer.svg"
import refresh from "../assets/refresh-2.svg"
import filter from "../assets/filter.svg"
import Table from '../components/Table'
import { useEffect, useState } from "react"   
import Banner from '../components/Banner'
import arrow from "../assets/Arrow.svg"

export default function Customer() {
    const [isPage,setPage] = useState("Customer")

    useEffect(() => {
     setPage("Customer")   
    })

  return (
    <section id="customerPage" className="pt-5 px-6 w-full">
        <div className="border-b border-b-gray-300">
            <h1 className="text-2xl font-semibold">Customer</h1>
            <div className="flex justify-between mt-4">
                <div className="-translate-y-3 w-1/2">
                    <p className="text-sm font-light text-gray-400 mt-3">You can manage and organize your customer and other things here</p>
                </div>
                <div className="flex text-sm font-normal text-gray-500 w-1/2 justify-stretch">
                    <div className="cursor-pointer w-1/3 text-center border-b-2 border-b-white hover:border-b-[#5d5ff0] hover:text-[#5d5ff0]" style={isPage == "Customer" ? { borderBottomColor : "#5d5ff0", color : "#5d5ff0" } : "" }>
                        <p>Customer</p>
                    </div>
                    <div className="cursor-pointer w-1/3 text-center border-b-2 border-b-white hover:border-b-[#5d5ff0] hover:text-[#5d5ff0]">
                        <p>Promo</p>
                    </div>
                    <div className="cursor-pointer w-1/3 text-center border-b-2 border-b-white hover:border-b-[#5d5ff0] hover:text-[#5d5ff0]">
                        <p>Voucher</p> 
                    </div> 
                </div>
            </div>
        </div>
        
        <div className="py-5 gap-x-3 flex">
            <div className="w-3/4 relative">
                <div className="bg-[#5d5ff0] rounded-md relative px-5 py-4 text-white overflow-hidden -z-20">
                    <img src={mainBanner} alt="" className="absolute right-0 h-full top-0 -z-10"/>
                    <div className="z-10">
                        <h1 className="text-xl mb-3">Customer</h1>
                        <p className="text-sm">On this menu you will be able to create, edit, and also delete <br/> the customer. Also you can manage it easily.</p>
                        <div className="w-full mt-5 text-sm gap-x-2 grid grid-cols-12 justify-between">
                            <div className="col-span-3 flex justify-center gap-x-2 rounded-lg px-2 py-2 backdrop-blur-md" style={{backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
                                <img src={plus} alt="" className="w-5"/>
                                <button className="font-light text-xs">Add new Customer</button>
                            </div>
                            <div className="col-span-6 bg-white overflow-hidden rounded-lg p-1 pl-4 items-center">
                                <form action="" className="flex w-full h-full text-black justify-between gap-x-2">
                                    <img src={search} alt="" className="w-5"/>
                                    <input type="text" placeholder="Search here"/>
                                    <button className="bg-[#5d5ff0] text-white rounded-lg px-2">Search</button>
                                </form>
                            </div>
                            <div className="col-span-3 flex gap-x-2">
                                <div className="flex justify-center col-span-1 backdrop-blur-md p-3 rounded-lg gap-x-2" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                                    <img src={filter} alt=""/>
                                    {/* <button>Filter</button> */}
                                </div>
                                <div className="flex justify-center col-span-1 backdrop-blur-md p-3 rounded-lg gap-x-2" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                                    <img src={refresh} alt=""/>
                                    {/* <button>Refresh</button> */}
                                </div>
                                <div className="flex justify-center col-span-1 backdrop-blur-md p-3 rounded-lg" style={{backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                                    <img src={print} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Table/>

                <div id='pagination' className='absolute bottom-0 bg-[#FAFAFA] w-full rounded-md px-7 py-3 text-[#98949E] flex justify-between'>
                    <div className='flex items-center'>
                        <p className='text-sm'>Showing 10 Data Customers</p>
                    </div>
                    <div className='flex gap-x-5 items-center'>
                        <div className='bg-white shadow-md rounded-md p-1 px-3'>
                            <p className='text-black text-sm'>1</p>
                        </div>
                        <button>2</button>
                        <button>3</button>
                        <button>...</button>
                        <button>38</button>
                        <button>Next</button>
                        <img src={arrow} alt="" />
                    </div>
                </div>

            </div>
            <Banner/>
        </div>
    </section>
  )
}
