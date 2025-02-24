
import { useEffect, useRef, useState } from 'react';
import Product from '../components/Product'
import Sidebar from '../components/Sidebar'
import BreadcrumbImg from '/breadcrumb.png'
import { CiGrid41 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiSortAscendingLight } from "react-icons/pi";
import { FiClipboard, FiHeart, FiSettings, FiTarget, FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';

const Shop = () => {
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isShowOpen, setIsShowOpen] = useState(false)

    const sortDropdownRef = useRef(null);
    const showDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
            if (showDropdownRef.current && !showDropdownRef.current.contains(event.target)) {
                setIsShowOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <section id="shopPage" className="max-w-[1610px] mx-auto">
                {/* breadcrumb here */}
                <div className="mt-[30px] mb-[50px] w-full h-[237px] rounded-[20px] relative">
                    <img src={BreadcrumbImg} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-[70px] left-[68px]">
                        <div className="px-3">
                            <h1 className="mb-[18px] text-[48px] leading-[58px] font-bold">Snack</h1>
                            <ul className="flex font-semibold font-lato text-sm leading-6 text-[#7E7E7E] items-center gap-x-3">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Snack</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Added 'relative' to the parent container */}
                <div className="flex gap-x-3 relative">
                    {/* Sidebar here */}
                    <div className="w-[20%]">
                        <Sidebar className="sticky top-[100px]" />
                    </div>

                    {/* Products Section */}
                    <div className="flex-1">
                        <div className="mb-[30px] flex items-center justify-between leading-6 font-lato">
                            <p className='text-[#7E7E7E] text-sm'>We found <span className='text-greeny'>29</span> items for you!</p>
                            <div className="flex gap-x-[10px]">
                                <div className="w-[180px] relative z-10" ref={showDropdownRef}>
                                    <div className="w-full flex py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none" onClick={(e) => {
                                        e.stopPropagation();  // Prevent event bubbling
                                        setIsShowOpen(prev => !prev);
                                    }}>
                                        <CiGrid41 />
                                        <span>Show: 50</span>
                                        <IoIosArrowDown />
                                    </div>
                                    {isShowOpen && (<ul className="w-full absolute right-0 top-[120%] rounded-[10px] px-5 py-7 bg-white shadow-lg border border-[#ECECEC] h-auto z-50 mt-2 flex flex-col gap-y-2">
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiUser /><span>My Account</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiTarget /><span>Order Tracking</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiClipboard /><span>My Voucher</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiHeart /><span>My Wishlist</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiSettings /><span>Setting</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><GoSignOut /><span>Sign out</span></li>
                                    </ul>)}
                                </div>
                                <div className="w-[185px] relative z-10" ref={sortDropdownRef}>
                                    <div className="flex w-full py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none" onClick={(e) => {
                                        e.stopPropagation();  // Prevent event bubbling
                                        setIsSortOpen(prev => !prev);
                                    }}>
                                        <PiSortAscendingLight />
                                        <span>Sort by: Featured</span>
                                        <IoIosArrowDown />
                                    </div>
                                    {isSortOpen && (<ul className="w-full absolute right-0 top-[120%] rounded-[10px] px-5 py-7 bg-white shadow-lg border border-[#ECECEC] h-auto z-50 mt-2 flex flex-col gap-y-2">
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiUser /><span>My Account</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiTarget /><span>Order Tracking</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiClipboard /><span>My Voucher</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiHeart /><span>My Wishlist</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiSettings /><span>Setting</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><GoSignOut /><span>Sign out</span></li>
                                    </ul>)}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-[30px]">

                            {[...Array(20)].map((_, index) => (
                                <Product key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;
