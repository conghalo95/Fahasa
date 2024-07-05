"use client"
import navbarData from "@/app/data/navbarUI";
import React, { useState } from "react";

const Category = ({ isShow, setIsShow }) => {
    const [currentTab, setCurrentTab] = useState("0") 
    
    return(
        <div>
            {isShow && 
            <div className="bg-white lg:bg-neutral-100 w-full h-fit justify-center text-neutral-500 text-sm px-5 absolute">
                
                {/* Từ mobile cho đến lg */}
                <div className="lg:hidden">
                    <div className="w-full h-10 border rounded-lg flex items-center px-2">
                        <p className="grow">Chọn ngôn ngữ</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                    <div className="w-full h-10 flex items-center mt-2 relative">
                        <input type="text" placeholder="Search something here" className="w-full h-10 border rounded-lg px-8" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5 ms-2 absolute">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-y-1 sm:gap-x-5">
                        <button className="flex mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                            </svg>
                            <p className="ms-2 grow">Thông Báo</p>
                            <span className="bg-red-600 w-8 h-5 rounded-md text-center content-center text-white">0</span>
                        </button>
                        <button className="flex sm:mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <p className="ms-2 grow">Giỏ Hàng</p>
                            <span className="bg-red-600 w-8 h-5 rounded-md text-center content-center text-white">0</span>
                        </button>
                        <button className="flex sm:mt-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <p className="ms-2 grow">Tài Khoản</p>
                            <span className="bg-red-600 w-8 h-5 rounded-md text-center content-center text-white">0</span>
                        </button>
                        <li className="font-semibold text-lg text-center border-t border-t-neutral-200 mt-2 pt-1 sm:col-span-3">Danh mục sản phẩm</li>
                        {navbarData.map((item, i) => {
                            return(
                                <button className="text-center h-8 rounded-md hover:bg-slate-100">{item.title}</button>
                            )
                        })}
                    </ul>
                </div>
                {/* Kết thúc của mobile đến lg */}

                {/* Từ lg đổ lên */}
                <div className="flex">
                    <div className="w-0 xl:w-[15%]"></div>
                    <div className="hidden lg:grow lg:flex rounded-b-lg drop-shadow bg-white">
                        <div className="w-80 px-5 py-5 border-r border-r-neutral-200">
                            <p className="font-semibold text-lg">Danh mục sản phẩm</p>
                            {navbarData.map((item, i) => {
                                return(
                                    <button className="w-72 text-left rounded-md my-1 px-2 py-2 disabled:bg-neutral-200 hover:bg-neutral-100" 
                                    key={i} id={item.id} onClick={e => setCurrentTab(e.target.id)} disabled={currentTab === `${item.id}`}>
                                        {item.title}
                                    </button>
                                )
                            })}
                        </div>
                        <div className="w-full mx-5 my-5 px-2">
                            {navbarData.map((item, i) =>
                                <div key={i}>
                                    {currentTab === `${item.id}` && 
                                    <div>
                                        <p className="text-xl font-bold">{item.title}</p>
                                        <div className="grid grid-cols-3 gap-y-5 mt-5">
                                            {item.category.map((group, g) => {
                                                return(
                                                    <div key={g}>
                                                        <p className="font-semibold">{group.title}</p>
                                                        {group.subcategory?.map((subitem, s) => {
                                                            return(
                                                                <p>{subitem.title}</p>
                                                            )
                                                        })}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-0 xl:w-[15%]"></div>
                </div>
                {/* Kết thúc của từ lg đổ lên */}

            </div>
            }
        </div>
    );
};

export default Category;