"use client"
import React, { useState } from "react";
import Navbar from "./navbar";
import Category from "../menu/category";
import Notifypanel from "../menu/notification";
import Signinform from "../menu/signinform";



const Header = ({ cart, setCart, addToCart, showCart, setShowCart }) => {
    const [isShow, setIsShow] = useState(false);
    const [isNotify, setIsNotify] = useState(false);
    const [isSignin, setIsSignin] = useState(false);

    
    return(
        <div>
            <Navbar isShow={isShow} setIsShow={setIsShow} isNotify={isNotify} setIsNotify={setIsNotify} isSignin={isSignin} setIsSignin={setIsSignin} 
            cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
            <Category isShow={isShow} setIsShow={setIsShow} />
            <Notifypanel isNotify={isNotify} setIsNotify={setIsNotify} />
            <Signinform isSignin={isSignin} setIsSignin={setIsSignin}/>
        </div>
    );
};

export default Header;