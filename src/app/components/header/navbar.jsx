"use client"
import Link from "next/link";
import React from "react";

const Navbar = ({ isShow, setIsShow, isNotify, setIsNotify, isSignin, setIsSignin, cart, setCart, showCart, setShowCart }) => {
    return (
        <div className="bg-white w-full h-20 flex items-center text-neutral-500">
            <div className="w-0 xl:w-[15%] h-20"></div>

            {/* Header content bắt đầu từ đây */}
            <div className="grow flex items-center mx-5 xl:mx-3 text-sm">
                    <div className="grow lg:grow-0">
                        <Link href="/">
                            <img src="/fahasa-logo.png" className="w-40 sm:w-52 lg:me-10" alt="" />
                        </Link>    
                    </div>
                <button className="h-10 flex items-center" onClick={() => setIsShow(!isShow)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-10 -rotate-90">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
                <div className="hidden lg:items-center content-center lg:block lg:grow lg:ms-2 lg:me-10 relative">
                    <input type="text" placeholder="Sách mới 2024" className="w-full h-10 border rounded-lg ps-5" />
                    <button className="bg-red-500 w-20 h-8 rounded-md top-1 right-1 content-center absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 mx-auto fill-white">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex lg:gap-x-3">
                    <button className="relative" onClick={() => setIsNotify(!isNotify)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <span className="bg-red-600 w-fit h-5 px-2 rounded-md text-center content-center text-white absolute -top-2 right-1 text-xs">0</span>
                        <p>Thông Báo</p>
                    </button>
                    <button className="relative" onClick={() => setShowCart(!showCart)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                        <span className="bg-red-600 w-fit h-5 px-2 rounded-md text-center content-center text-white absolute -top-2 -right-1 text-xs">{cart.length}</span>
                        <p>Giỏ Hàng</p>
                    </button>
                    <button className="relative" onClick={() => setIsSignin(!isSignin)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span className="bg-red-600 w-fit h-5 px-2 rounded-md text-center content-center text-white absolute -top-2 right-0 text-xs">0</span>
                        <p>Tài Khoản</p>
                    </button>
                    <button className="w-10 h-10 rounded-md border content-center">
                        <div className="bg-red-500 w-7 h-7 rounded-md mx-auto content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 mx-auto fill-yellow-500">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </ul>
            </div>
            {/* Header content kết thúc ở đây */}

            <div className="w-0 xl:w-[15%] h-20"></div>
        </div>
    );
};

export default Navbar;