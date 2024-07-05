"use client"
import React from "react";

const Footer = () => {
    return (
        <div className="flex w-full px-5 xl:px-28 2xl:px-[185px] mt-5">
            <div className="w-0 xl:w-[15%]"></div>
            <div className="bg-white rounded-t-lg grow h-fit text-neutral-600 overflow-hidden">
                <div className="md:flex h-20 content-center md:items-center justify-center bg-gray-400 px-5">
                    <div className="flex mb-1 justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 stroke-white">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p className="ms-2 md:w-52 lg:text-xl text-white">Đăng ký nhận bản tin</p>
                    </div>
                    <div className="flex items-center w-full lg:w-[55%] relative">
                        <input type="text" className="w-full h-8 md:h-12 rounded-md" />
                        <button className="text-white text-xs lg:text-base absolute right-0 bg-orange-600 rounded w-16 h-6 md:w-32 md:h-10 me-1">Đăng ký</button>
                    </div>
                </div>
                <div className="px-5 py-5 lg:grid lg:grid-cols-12">
                    <div className="w-full text-center lg:text-left lg:col-span-5 lg:pe-5 lg:border-r">
                        <img src="/fahasa-logo.png" className="w-60 mx-auto lg:mx-0" alt="" />
                        <p className="text-sm my-2">
                            Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCM <br />
                            Công Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA <br />
                            60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam <br />
                            Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc. 
                        </p>
                        <img className="w-32 mx-auto lg:mx-0 my-2" src="/logoBCT.png" alt="" />
                        <div className="flex justify-center lg:justify-start">
                            <img className="w-9" src="/Facebook-on.png" alt="" />
                            <img className="w-9" src="Insta-on.png" alt="" />
                            <img className="w-9" src="/Youtube-on.png" alt="" />
                            <img className="w-9" src="/tumblr-on.png" alt="" />
                            <img className="w-9" src="/twitter-on.png" alt="" />
                            <img className="w-9" src="/pinterest-on.png" alt="" />
                        </div>
                        <div className="flex gap-x-2 my-2 justify-center lg:justify-start">
                            <img className="w-32" src="/android1.png" alt="" />
                            <img className="w-32" src="/appstore1.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-2 lg:ms-5 lg:col-span-7 sm:grid sm:grid-cols-2 sm:gap-x-4 text-center sm:text-left text-sm">
                        <div className="mt-4">
                            <p className="font-bold mb-2">DỊCH VỤ</p>
                            <p>Điều khoản sử dụng</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Giới thiệu Fahasa</p>
                            <p>Hệ thống trung tâm - nhà sách</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold mb-2">HỖ TRỢ</p>
                            <p>Chính sách đổi - trả - hoàn tiền</p>
                            <p>Chính sách bảo hành - bồi hoàn</p>
                            <p>Chính sách vận chuyển</p>
                            <p>Chính sách khách sỉ</p>
                            <p>Phương thức thanh toán và xuất HĐ</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold mb-2">TÀI KHOẢN CỦA TÔI</p>
                            <p>Đăng nhập/ Tạo mới tài khoản</p>
                            <p>Thay đổi địa chỉ khách hàng</p>
                            <p>Chi tiết tài khoản</p>
                            <p>Lịch sử mua hàng</p>
                        </div>
                        <div className="mt-4">
                            <p className="font-bold mb-2">LIÊN HỆ</p>
                            <div className="flex gap-x-1 items-center justify-center sm:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                                </svg>
                                <p>60 - 62 Lê Lợi, Q.1 TP.HCM</p>
                            </div>
                            <div className="flex gap-x-2 items-center justify-center sm:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                <p>cskh@fahasa.com.vn</p>
                            </div>
                            <div className="flex gap-x-2 items-center justify-center sm:justify-start">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>
                                <p>1900636467</p>
                            </div>
                        </div>
                        <div className="sm:col-span-2 sm:flex sm:gap-x-5 sm:justify-center mt-5">
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/vnpost1.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/ahamove_logo3.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/icon_snappy1.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/Logo_ninjavan.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/vnpay_logo.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/ZaloPay-logo-130x83.png" alt="" />
                                <img className="w-10 sm:w-8 sm:h-8 mx-auto sm:mx-0" src="/momopay.png" alt="" />
                                <img className="w-20 sm:w-full sm:h-8 mx-auto sm:mx-0" src="/shopeepay_logo.png" alt="" />
                        </div>
                    </div>
                    <div className="mt-5 sm:col-span-12">
                        <p className="text-xs text-center">
                            Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh <br /> cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-0 xl:w-[15%]"></div>
        </div>
    );
};

export default Footer;