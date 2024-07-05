"use client"
import adsData from "@/app/data/adsUI";
import React, { useState } from "react";


const Adsparent = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    }
    
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    }

    return (
        <div className="flex mx-5">
            <div className="w-0 xl:w-[15%]"></div>
            <div className="grid grid-cols-1 grow lg:grid-cols-12 py-5 text-neutral-600 gap-x-3">
                <div className="bg-neutral-400 lg:col-span-8 text-center text-xl font-bold content-center w-full h-60 lg:h-full rounded-md">
                    Carousel here
                </div>
                <div className="lg:col-span-4 overflow-hidden">
                    <img src="/1.jpg" alt="" className="w-full h-fit object-cover rounded-md my-4 lg:mt-0 mb-3" />
                    <img src="/2.jpg" alt="" className="w-full h-fit object-cover rounded-md" />
                </div>
                <div className="lg:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
                    <img src="/3.png" alt="" className="w-full h-fit lg:h-52 object-cover rounded-md" />
                    <img src="/4.jpg" alt="" className="w-full h-fit lg:h-52 object-cover rounded-md" />
                    <img src="/5.jpg" alt="" className="w-full h-fit lg:h-52 object-cover rounded-md" />
                    <img src="/6.png" alt="" className="w-full h-fit lg:h-52 object-cover rounded-md" />
                </div>
            </div>
            <div className="w-0 xl:w-[15%]"></div>
        </div>
    );
};

export default Adsparent;