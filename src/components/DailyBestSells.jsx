import { IoIosArrowRoundForward } from "react-icons/io"
import Product from "./Product"
import Nature from '/nature.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import { productsData } from "../data/DB";

const DailyBestSells = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


  return (
    <>
      <section className="mt-[55px]" id="dealsOfTheDay">
        <div className="max-w-[1610px] mx-auto">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="font-bold text-[32px] leading-[38px]">Daily Best Sells</h2>
            <div>
              <ul className="flex gap-x-7 items-center font-semibold">
                <li>Featured</li>
                <li>Popular</li>
                <li>New Added</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-6 h-[520px] justify-between">
            {/* Left Side */}
            <div className="w-[375px] h-full relative group cursor-pointer flex-shrink-0">
              <img src={Nature} alt='Nature' className="w-full h-full object-cover rounded-[15px]" />
              <div className="absolute top-[49px] left-[50px]">
                <h3 className="font-bold text-[40px] leading-[48px] mb-[99px] max-w-[246px] group-hover:translate-y-[-5px] transform transition-transform ease-in-out duration-300">Bring nature into your home</h3>
                <button className="px-3 py-2 bg-greeny text-white flex items-center gap-x-1 rounded-sm font-bold text-xs leading-[16px] tracking-[0.5px]">Shop Now <IoIosArrowRoundForward /></button>
              </div>
            </div>
            {/* Right Side (Slider) */}
            <div className="max-w-[1200px] overflow-hidden">
              <Slider {...settings} className="w-full overflow-hidden deals-slide">
                {productsData.map((product, index) => (
                  <div className="w-[300px]" key={index}>
                    <Product product={product} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DailyBestSells