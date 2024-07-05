"use client"
import hotsaleData from "@/app/data/hotsaleUI";
import React from "react";

const Hotsale = () => {
    return (
        <div className="flex mx-5 mb-5">
            <div className="w-0 xl:w-[15%]"></div>
            <div className="bg-white rounded-lg h-fit grow grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 px-5 py-5 text-neutral-600 gap-3">
                {hotsaleData.map((item, i) => {
                    return(
                        <div className="text-center">
                            <button>
                                <img src={item.url} alt="" className="bg-neutral-300 w-10 h-10 md:w-12 md:h-12 mx-auto rounded-md object-cover" />
                                <p className="mt-2 mx-auto w-[100px] text-wrap">{item.title}</p>
                            </button>
                        </div>
                    )
                })}
            </div>
            <div className="w-0 xl:w-[15%]"></div>
        </div>
    );
};

export default Hotsale;