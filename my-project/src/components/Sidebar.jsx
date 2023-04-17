import React from 'react'
import square from "../assets/square.svg"
import dashboard from "../assets/dashboard.svg"
import notification from "../assets/notification.svg"
import battery from "../assets/battery-fullbattery.svg"
import profile from "../assets/profile-2userprofile.svg"
import restaurant from "../assets/reserverestaurant.svg"
import mouse from "../assets/mouse-square.svg"
import documentNormal from "../assets/document-normal.svg"
import userSquare from "../assets/user-square.svg"
import candle from "../assets/candle.svg"
import shoppingCart from "../assets/shopping-cart.svg"
import truck from "../assets/truck.svg"
import arab from "../assets/arab.svg"
import logout from "../assets/logout.svg"

export default function Sidebar() {
  return (
    <>
        <section id="sidebar" className="w-[20rem] h-screen border-r border-r-slate-300 text-gray-400 flex flex-col justify-between sticky top-0">
            <div>
                <div className="flex flex-col justify-between pt-4 px-8">
                    <img src={square} alt="" className="w-32"/>
                    <p className="mt-6 text-xs">Menu</p>
                </div>
                <div className="py-3 flex flex-col gap-y-4 text-sm px-8">
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={dashboard} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Dashboard</p>
                        </div>
                        <div>
                            <img src={notification} alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={battery} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Stock</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={profile} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p className="text-[#5d5ff0]">Customer</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={restaurant} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Restaurant</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <div>
                            <img src={mouse} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Design</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={documentNormal} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Report</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={userSquare} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Role & Admin</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={candle} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Settings</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="pt-3 text-xs">
                        <p>Integration</p>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={shoppingCart} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Stock</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                    <div className="flex gap-x-3 items-center ">
                        <div>
                            <img src={truck} alt="" className="w-5"/>
                        </div>
                        <div>
                            <p>Supply</p>
                        </div>
                        <div className="invisible">
                            <img src="../assets/notification.svg" alt="" className="w-5"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-t-gray-300 mt-10 px-8 py-4 text-sm flex flex-col gap-y-3">
                <div className="flex gap-x-4 items-center">
                    <div>
                        <img src={arab} alt="" className="w-10"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-black">Savannah N</p>
                        <p className="font-light">Food Quality Manager</p>
                    </div>
                </div>
                <div className="bg-[#fef5f6] flex justify-center py-3 rounded-md">
                    <div className="flex gap-x-2">
                        <img src={logout} alt=""/>
                        <p className="text-[#ac1d15]">Logout</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
