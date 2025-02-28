import AboutPerson from '/about-person.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../components/NextArrow';
import PrevArrow from '../components/PrevArrow';
import AboutSlider01 from '/about-slider-01.png'
import AboutSlider02 from '/about-slider-02.png'
import AboutSlider03 from '/about-slider-03.png'
import Divider from '/about-divider.png'
import AboutFeatureCard from '../components/AboutFeatureCard';
import AboutFeature01 from '/about-feature-01.svg'
import AboutFeature02 from '/about-feature-02.svg'
import AboutFeature03 from '/about-feature-03.svg'
import AboutFeature04 from '/about-feature-04.svg'
import AboutFeature05 from '/about-feature-05.svg'
import AboutFeature06 from '/about-feature-06.svg'
import AboutPerformance from '/about-performance.png'
import AboutCounter from '/about-counter-background.png'

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow isAbout={true} />,
    prevArrow: <PrevArrow isAbout={true} />,
    cssEase: 'linear',
  };

  const catSlides = [
    {
      id: 1,
      img: AboutSlider01,
    },
    {
      id: 2,
      img: AboutSlider02,
    },
    {
      id: 3,
      img: AboutSlider03,
    },
    {
      id: 4,
      img: AboutSlider02,
    },

    {
      id: 5,
      img: AboutSlider01,
    },
    {
      id: 6,
      img: AboutSlider03,
    },
    {
      id: 7,
      img: AboutSlider02,
    },
    {
      id: 8,
      img: AboutSlider03
    },
  ];

  const featureData = [
    {
      id: 1,
      title: 'Best Prices & Offers',
      img: AboutFeature01
    },
    {
      id: 2,
      title: 'Wide Assortment',
      img: AboutFeature02
    },
    {
      id: 3,
      title: 'Free Delivery',
      img: AboutFeature03
    },
    {
      id: 4,
      title: 'Easy Returns',
      img: AboutFeature04
    },
    {
      id: 5,
      title: '100% Satisfaction',
      img: AboutFeature05
    },
    {
      id: 6,
      title: 'Great Daily Deal',
      img: AboutFeature06
    },
  ]

  return (
    <>
      {/* Welcome Section */}
      <section>
        <div className="max-w-[1341px] mx-auto mt-[50px]">
          <div className="flex items-center gap-x-[49px]">
            <div className="w-[646px] h-auto">
              <img src={AboutPerson} alt="" className='w-full h-full' />
            </div>
            <div className="flex-1">
              <h1 className='font-bold text-[40px] leading-12 mb-8'>Welcome to Nest</h1>
              <p className='font-lato leading-6 text-[#7E7E7E] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.</p>
              <p className='font-lato leading-6 text-[#7E7E7E]'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.</p>

              {/* Slider Part  */}
              <div className="mt-[53px] overflow-hidden max-w-[620px] h-auto">
                <Slider {...settings} className="overflow-hidden cat-slide">
                  {catSlides.map((slide, index) => (
                    <div key={index} className="w-[192px]">
                      <img src={slide.img} alt='' className="w-full object-cover" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section>
        <div className="max-w-[1341px] mx-auto mt-[57px]">
          <div className="relative mb-10">
            <h2 className='font-bold text-[40px] text-center leading-12 pb-6'>What We Provide?</h2>
            <img src={Divider} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2' />
          </div>
          <div className="flex flex-wrap gap-6">
            {featureData.map((feature, index) => {
              return (
                <div key={index}>
                  <AboutFeatureCard feature={feature} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Performance Section  */}
      <section>
        <div className="max-w-[1341px] mx-auto mt-[74px]">
          <div className="flex items-center gap-x-[30px]">
            <img src={AboutPerformance} alt="" />
            <div className="">
              <h5 className='mb-[18px] font-bold text-2xl leading-[29px] text-[#B6B6B6]'>Our performance</h5>
              <h2 className='mb-[41px] font-bold text-5xl leading-[58px]'>Your Partner for e-
                commerce grocery
                solution</h2>
              <p className='mb-[35px] font-lato text-[#7E7E7E] leading-6 text-justify'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto</p>
              <p className='font-lato text-[#7E7E7E] leading-6 text-justify'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
            </div>
          </div>
          <div className="my-[50px] flex justify-between">
            <div className="px-3 py-1">
              <h3 className='font-bold text-[32px] leading-[38px] mb-[31px]'>Who we are</h3>
              <p className='max-w-[394px] text-justify font-lato text-[#7E7E7E] leading-6'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                mattis enim ut tellus eros donec ac odio orci ultrices in.
                ellus eros donec ac odio orci ultrices in.</p>
            </div>
            <div className="px-3 py-1">
              <h3 className='font-bold text-[32px] leading-[38px] mb-[31px]'>Who we are</h3>
              <p className='max-w-[394px] text-justify font-lato text-[#7E7E7E] leading-6'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                mattis enim ut tellus eros donec ac odio orci ultrices in.
                ellus eros donec ac odio orci ultrices in.</p>
            </div>
            <div className="px-3 py-1">
              <h3 className='font-bold text-[32px] leading-[38px] mb-[31px]'>Who we are</h3>
              <p className='max-w-[394px] text-justify font-lato text-[#7E7E7E] leading-6'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
                mattis enim ut tellus eros donec ac odio orci ultrices in.
                ellus eros donec ac odio orci ultrices in.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section  */}
      <section>
        <div className="max-w-[1610px] mx-auto relative rounded-[15px] overflow-hidden">
          <div className="w-full">
            <img src={AboutCounter} alt="" className='w-full' />
          </div>
          <div className="bg-[#4b675acc] py-[100px] absolute left-0 top-0 w-full">
            <div className="flex">
              <div className="w-[320px] h-[115px] text-center font-bold text-white">
                <h2 className='text-7xl leading-[87px]'>10+</h2>
                <span className='text-2xl leading-7'>Glorious years</span>
              </div>
              <div className="w-[320px] h-[115px] text-center font-bold text-white">
                <h2 className='text-7xl leading-[87px]'>5000+</h2>
                <span className='text-2xl leading-7'>Happy clients</span>
              </div>
              <div className="w-[320px] h-[115px] text-center font-bold text-white">
                <h2 className='text-7xl leading-[87px]'>100+</h2>
                <span className='text-2xl leading-7'>Projects complete</span>
              </div>
              <div className="w-[320px] h-[115px] text-center font-bold text-white">
                <h2 className='text-7xl leading-[87px]'>60+</h2>
                <span className='text-2xl leading-7'>Team advisor</span>
              </div>
              <div className="w-[320px] h-[115px] text-center font-bold text-white">
                <h2 className='text-7xl leading-[87px]'>100+</h2>
                <span className='text-2xl leading-7'>Products Sale</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About