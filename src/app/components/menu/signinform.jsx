"use client"
import React from "react";

const Signinform = ({ isSignin, setIsSignin }) => {
    return (
        <div>
            {isSignin && 
                <div className="bg-white w-72 h-fit px-5 py-5 rounded-lg drop-shadow absolute right-[350px] text-black">
                    <button className="w-full h-10 rounded-md text-sm bg-red-600 text-white">Đăng nhập</button>
                    <button className="w-full h-10 rounded-md text-sm border-2 border-red-600 mt-2">Đăng ký</button>
                    <button className="w-full h-10 rounded-md text-sm bg-blue-700 text-white mt-2">Đăng nhập bằng facebook</button>
                </div>
            }
        </div>
    );
};

export default Signinform;