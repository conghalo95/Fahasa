"use client"
import React, { useEffect, useState } from "react";


const Cartlist = ({ cart, setCart }) => {


    const [cartQuantity, setCartQuantity] = useState([]);

    useEffect(() => {
        setCartQuantity(cart)
    }, [cart])

    const itemRemove = (id) => {
        const removeitem = cart.filter((cartItem) => cartItem.id !== id)
        setCart(removeitem)
    }

    return (
        <div className="mx-5">
            <div>
                <p className="text-center text-neutral-600 text-4xl font-bold w-[50%] mx-auto mt-5">GIỎ HÀNG</p>
            </div>
            <div className="bg-white w-full xl:w-[50%] my-5 h-fit px-7 py-5 rounded-lg drop-shadow xl:mx-auto">
                <div className="text-neutral-600 font-semibold py-2 border-b grid grid-cols-5">
                    <p className="col-span-2">SẢN PHẨM</p>
                    <p className="text-center">GIÁ</p>
                    <p className="text-center">SỐ LƯỢNG</p>
                    <p className="text-right">THÀNH TIỀN</p>
                </div>
                {cartQuantity?.map((cartItem, cartIndex) => {
                    return(
                        <div className="text-neutral-600 grid grid-cols-5 border-b py-2">
                            <div className="flex col-span-2">
                                <img src={cartItem.url} className="h-24 my-2 border border-neutral-300" alt="" />
                                <div className="ms-4 mt-2">
                                    <p className="font-semibold">{cartItem.title}</p>
                                    <p>{cartItem.episode}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-center mt-2">{cartItem.price}</p>
                            </div>
                            <div className="grid grid-cols-3 border rounded-md w-24 h-8 mt-2 divide-x text-center mx-auto items-center">
                                <button onClick={() => {
                                    const quantityNumber = cartQuantity.map((quantityInCart, quantityIndex) => {
                                        return cartIndex === quantityIndex ? { ...quantityInCart, quantity: quantityInCart.quantity > 1 ? quantityInCart.quantity - 1 : 1 } : quantityInCart
                                    })
                                    setCartQuantity(quantityNumber)
                                }}>-</button>
                                <p>{cartItem.quantity}</p>
                                <button onClick={() => {
                                    const quantityNumber = cartQuantity.map((quantityInCart, quantityIndex) => {
                                        return cartIndex === quantityIndex ? { ...quantityInCart, quantity: quantityInCart.quantity + 1 } : quantityInCart
                                    })
                                    setCartQuantity(quantityNumber)
                                }}>+</button>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold text-red-600 mt-2">{cartItem.price * cartItem.quantity}.000 đ</p>
                                <button onClick={() => itemRemove(cartItem.id)} className="bg-neutral-100 border border-neutral-200 w-12 h-6 rounded-md text-xs mt-10">Xóa</button>
                            </div>
                        </div>
                    )
                })}
                <div className="grid grid-cols-9 my-2 pt-1">
                    <button className="bg-neutral-100 border border-neutral-200 w-20 h-6 rounded-md text-xs text-neutral-600">Xóa Hết</button>
                    <p className="text-neutral-600 text-lg font-bold col-span-6 text-right me-5">Tổng tiền </p>
                    <p className="text-red-600 font-bold text-right text-lg col-span-2">
                        {cartQuantity.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}.000 đ
                    </p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Cartlist;