"use client"
import React from "react";

const Notifypanel = ({ isNotify, setIsNotify }) => {
    return (
        <div>
            {isNotify &&
                <div className="bg-white w-72 h-fit rounded-lg drop-shadow absolute right-[500px] text-black divide-y">
                    <div className="flex w-full h-14 items-center mx-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 me-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <p>Thông báo</p>
                    </div>
                    <div className="px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-20 fill-neutral-400 rounded-full bg-neutral-200 mx-auto mt-8">
                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                        </svg>
                        <p className="text-center my-8">Vui lòng đăng nhập để<br /> xem thông báo</p>
                        <button className="w-full h-10 rounded-md text-sm bg-red-600 text-white">Đăng nhập</button>
                        <button className="w-full h-10 rounded-md text-sm border-2 border-red-600 mt-2 mb-4">Đăng ký</button>
                    </div>
                </div>
            }
        </div>
    );
};

export default Notifypanel;