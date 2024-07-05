"use client"
import React from "react";

const Countdown = () => {
    return (
        <div className="flex items-center">
            <img src="/label-flashsale.webp" className="h-8" alt="" />
            <p className="ms-5">Kết thúc trong</p>
            <p className="bg-neutral-900 text-white w-fit h-6 px-1 rounded-md ms-2">00</p>
            <p className="ms-2">:</p>
            <p className="bg-neutral-900 text-white w-fit h-6 px-1 rounded-md ms-2">00</p>
            <p className="ms-2">:</p>
            <p className="bg-neutral-900 text-white w-fit h-6 px-1 rounded-md ms-2">00</p>
            <div className="grow"></div>
            <p className="text-blue-700 font-semibold">Xem tất cả</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-blue-700">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    );
};

export default Countdown;