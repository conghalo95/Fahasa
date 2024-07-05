"use client"
import React from "react";
import Countdown from "./countdown";
import flashsaleData from "@/app/data/flashsaleUI";

const Flashsale = ({ cart, setCart, addToCart }) => {
    return (
        <div className="w-full h-[525px] relative">
            <div className="bg-neutral-400 h-[525px] absolute w-full">
                <img src="/17.jpg" className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text-black absolute flex w-full">
                <div className="w-0 xl:w-[15%]"></div>
                <div className="grow px-5 py-5 xl:px-3">
                    <div className="bg-white h-16 rounded-md content-center px-5">
                        <Countdown />
                    </div>
                    <div className="flex gap-x-5 mt-5">
                        {flashsaleData.map((item, i) => {
                            if (i < 5) {
                                return (
                                    <div className="bg-white flex-none sm:flex-1 w-60 h-fit py-5 rounded-md hover:scale-105 transition ease-in-out duration-200 overflow-hidden text-neutral-600">
                                        <img src={item.url} alt="" />
                                        <div className="px-5 mt-2">
                                            <span className="font-semibold">{item.title}</span>
                                            <div className="flex items-center">
                                                <p className="font-extrabold text-lg text-red-600 grow">{item.price} đ</p>
                                                <p className="bg-neutral-700 rounded-lg w-fit h-7 px-2 py-1 content-center text-center text-white font-semibold text-xs">{item.episode}</p>
                                            </div>
                                            <button onClick={() => addToCart(item)} className="bg-red-600 rounded-lg w-full mt-4 py-2 text-white hover:bg-purple-500 transition ease-in-out duration-400">Cho vào giỏ</button>
                                        </div>
                                    </div>
                                )
                            }
                        })}   
                    </div>
                </div>
                <div className="w-0 xl:w-[15%]"></div>
            </div>
        </div>
    );
};

export default Flashsale;