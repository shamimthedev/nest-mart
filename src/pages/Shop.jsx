import { useEffect, useRef, useState } from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import Breadcrumb2 from "../components/Breadcrumb2";
import useFilteredProducts from "../hook/useFilteredProducts";
import { productsData } from "../data/DB";


const Shop = () => {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isShowOpen, setIsShowOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
    const filteredProducts = useFilteredProducts(productsData);

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

    // Pagination logic based on filtered products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <section id="shopPage">
                <div>
                    <Breadcrumb2 title={"Shop"} />
                </div>

                <div className="container flex gap-x-6 relative">
                    {/* Sidebar */}
                    <div className="w-[20%]">
                        <Sidebar className="sticky top-[100px]" />
                    </div>

                    {/* Products Section */}
                    <div className="flex-1">
                        <div className="mb-[30px] flex items-center justify-between leading-6 font-lato">
                            <p className="text-[#7E7E7E] text-sm">
                                We found <span className="text-greeny">{filteredProducts.length}</span> items for you!
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-between gap-x-4 gap-y-6">
                            {currentProducts.length > 0 ? (
                                currentProducts.map((product, index) => (
                                    <div key={index} className="w-[300px]">
                                        <Product product={product} />
                                    </div>
                                ))
                            ) : (
                                <p className="text-center w-full text-gray-500">No products found.</p>
                            )}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-8">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`w-10 h-10 mx-1 grid place-items-center font-bold leading-[40px] rounded-full cursor-pointer ${currentPage === index + 1 ? "bg-greeny text-white" : "bg-[#F2F3F4] text-[#7E7E7E]"
                                        }`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;
