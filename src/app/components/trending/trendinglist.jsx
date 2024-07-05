"use client"
import TrendingData from "@/app/data/trendingUI";
import React, { useState } from "react";

const Trendinglist = () => {

    const [currentTrendingTab, setCurrentTrendingTab] = useState("0");

    return (
        <div className="flex mx-5 my-5">
            <div className="w-0 xl:w-[15%]"></div>
            <div className="bg-white rounded-lg w-full xl:mx-20 h-fit text-neutral-600 overflow-hidden">
                <div className="flex gap-x-4 h-20 items-center bg-pink-200 px-5">
                    <div className="bg-pink-600 w-10 h-10 rounded-lg content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                        </svg>
                    </div>
                    <p className="text-xl font-bold text-neutral-800">Xu Hướng Mua Sắm </p>
                </div>
                <div className="px-5 py-2 text-center">
                    <div className="flex w-full h-fit border-b border-b-neutral-200 gap-x-4 xl:gap-x-6">
                        {
                            TrendingData.map((itemTrending, itemTrendingIndex) => {
                                return (
                                    <button onClick={e => setCurrentTrendingTab(e.target.id)} disabled={currentTrendingTab === `${itemTrending.id}`}
                                    key={itemTrendingIndex} id={itemTrending.id} className="w-fit h-fit text-sm py-2 lg:py-5 lg:text-base disabled:border-b-2 disabled:border-b-red-600">{itemTrending.title}</button>
                                )
                            })
                        }
                    </div>
                    <div className="mt-5 mb-3">
                        {
                            TrendingData.map((itemTrending, itemTrendingIndex) => 
                                <div key={itemTrendingIndex}>
                                    {currentTrendingTab === `${itemTrending.id}` && 
                                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 text-sm lg:text-sm">
                                            {itemTrending.content.map((contents, c) => {
                                                return(
                                                    <div className="bg-white w-full h-full border rounded-lg overflow-hidden hover:scale-105 transition ease-in-out duration-200">
                                                        <img src={contents.url} className="h-60 object-cover" alt="" />
                                                        <div className="px-3 py-3">
                                                            <p className="font-semibold text-left h-10">{contents.title}</p>
                                                            <div className="flex content-center">
                                                                <span className="grow font-bold text-red-600 text-lg text-left">{contents.price}</span>
                                                                <p className="bg-red-600 text-white w-fit h-fit rounded-lg px-1 py-1 text-sm">{contents.discount}</p>
                                                            </div>
                                                            <p className="text-sm line-through text-left">{contents.old_price}</p>
                                                            <button className="bg-red-600 rounded-lg w-full mt-2 py-2 text-white hover:bg-purple-500 transition ease-in-out duration-400">Cho vào giỏ</button>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>}
                                </div>)
                        }
                    </div>
                    <button className="w-60 h-12 my-2 border-2 border-red-600 rounded-lg">Xem thêm</button>
                </div>
            </div>
            <div className="w-0 xl:w-[15%]"></div>
        </div>
    );
};

export default Trendinglist;