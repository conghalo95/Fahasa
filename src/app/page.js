"use client"
import { useEffect, useState } from "react";
import Adsparent from "./components/advertisement/adsparent";
import Flashsale from "./components/flashsale/flashsale";
import Hotsale from "./components/hotsale/hotsale";
import flashsaleData from "./data/flashsaleUI";
import Header from "./components/header/header";
import Cartlist from "./components/cartlist/cartlist";
import Trendinglist from "./components/trending/trendinglist";
import Footer from "./components/footer/footer";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]" )

export default function Home() {

  const [product, setProduct] = useState([flashsaleData]);
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [showCart, setShowCart] = useState(false);
  const [toast, setToast] = useState(false)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  },[cart])

  const addToCart = (flashsaleData) => {
    console.log(flashsaleData);
    if (cart) {
      setToast(true);
      setTimeout(() => {
        setToast(false)
      }, 2000)
    }
    setCart([...cart, { ...flashsaleData, quantity: 1 }])
  };



  return (
    <div className="bg-neutral-100 w-full h-full relative">
      <Header count={cart.length} cart={cart} setCart={setCart} addToCart={addToCart} setShowCart={setShowCart} />
      {
        showCart ?
          <div className="bg-neutral-100 w-full h-fit"><Cartlist cart={cart} setCart={setCart}  /></div> :
          <div className="w-full h-full">
            <Adsparent />
            <Hotsale />
            <Flashsale cart={cart} setCart={setCart} product={product} addToCart={addToCart} toast={toast} setToast={setToast} />
            <Trendinglist />
          </div>
      }
      {
        toast && 
        <div id="toastShow" className="text-black bg-white w-80 h-20 border border-neutral-200 rounded-md overflow-hidden transition ease-in-out text-sm fixed bottom-2 right-2">
          <div className="bg-green-600 text-white px-2 py-2">
            <p>Thông Báo</p>
          </div>
          <div className="px-2 py-2">
            <p>Sản phẩm đã cho vào giỏ</p>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
