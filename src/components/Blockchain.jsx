import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderimg1 from '../assets/images/blockcard.webp'
import Slider from "react-slick";
import ellipse1 from '../assets/images/ellipse1.webp'
import ellipse2 from '../assets/images/ellipse2.webp'

const cards = [
    {
        bg: sliderimg1,
        heading: "Security and Privacy",
        text: 1,
        botm: "lg:-translate-y-[83px]",
    },
    {
        bg: sliderimg1,
        heading: "Transparent and Reliable Data Management",
        text: 2,
    },
    {
        bg: sliderimg1,
        heading: "Self-learning and Personalization",
        text: 3,
        botm: "lg:-translate-y-[83px]",
    },
    {
        bg: sliderimg1,
        heading: "Automated and Transparent Transactions",
        text: 4,
    }
];
const Blockchain = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    CenterMode: true,
                    arrow: false,
                }
            },
            {
                breakpoint: 838,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    CenterMode: true,
                    arrow: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,
                }
            }
        ]
    };
 
    const card = cards.map((cards, i) => (<div key={i} className={`lg:w-1/3 md:w-2/4  w-full px-5 flex justify-center group duration-500 py-16 ${cards.botm}`}>
        <div className="  bg-[(url(./assets/images/blockcard.webp)] object-cover w-[367px] h-[367px] flex flex-col items-center bg-no-repeat bg-center bg-BgSize " data-aos={`${cards.animation}`} data-aos-duration="1000" data-aos-offset="500"
            data-aos-easing="ease-in-sine" style={{ backgroundImage: `url(${cards.bg})` }}>
            <div className='w-[58px] h-[58px] rounded-full bg-[#040404] mt-12 shadow-[0px_4px_16px_0px_#02CDCF99_inset] flex justify-center items-center'>
                <p className='font-recharge font-bold text-[32px] leading-[50px] text-[#FCFCFC]'>{cards.text}</p>
            </div>
            <h2 className='text-[#FCFCFC] pt-10 font-recharge font-bold text-base sm:text-xl leading-[32px] text-center max-w-[212px] mx-auto'> {cards.heading}</h2>
        </div>
    </div>));
    return (
        <div className='lg:pb-24 lg:pt-20 py-10 relative z-10 Blockchain overflow-x-clip'>
            <div className="max-w-[1140px] mx-auto px-3" >
                <h2 className='font-recharge font-bold sm:text-[40px] text-3xl sm:leading-[50px] text-[#02CDCF] text-center'data-aos="zoom-in">Blockchain & AI technology</h2>
                <p className=' font-poppins leading-[25px] text-sm sm:text-base font-normal text-[#b3b7bb]  text-center pt-7 'data-aos="zoom-in">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <p className='font-recharge font-bold text-base sm:text-xl leading-[32px] text-center text-[#FCFCFC] lg:w-[684px] mx-auto py-7 lg:py-20'data-aos="zoom-in">By building the software on blockchain, Nexai provides the following advantages</p>
                <Slider {...settings}>{card}</Slider>
            </div>
            <div className='w-[302px] h-[262px] bg-[#02CDCF]  blur-[210px] rounded-full absolute right-0 top-[16%] z-[-10]'></div>
            <div className='w-[302px] h-[262px] bg-[#02CDCF]  blur-[210px] rounded-full absolute left-0 top-[10%] z-20 lg:block hidden'></div>
            <img src={ellipse1} alt="poker" className=' absolute right-0 top-[-4%] z-[-10]' />
            <img src={ellipse2} alt="poker" className=' absolute left-0 bottom-0 z-10 lg:block hidden ' />
        </div>
    )
}
export default Blockchain
