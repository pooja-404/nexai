import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const productcard = [
    {
        heading: "NexAi, Turn on light",
    },
    {
        heading: "NexAi, setalarm of 5:00 am",
    },
    {
        heading: "NexAi, measure this table",
    },
    {
        heading: "NexAi, Turn on music",
    }
];
const productcard2 = [
    {
        heading: "NexAi, measure this table",
    },
    {
        heading: "NexAi, Turn on music",
    },
    {
        heading: "NexAi, Turn on light",
    },
    {
        heading: "NexAi, is the front door locked?",
    }
];
const productcard3 = [
    {
        heading: "NexAi, Turn on TV",
    },
    {
        heading: "NexAi, Turn on music",
    },
    {
        heading: "NexAi, Turn of AC.",
    },
    {
        heading: "NexAi, Lock the front door",
    }
];
const Nexslider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // CenterMode: true,
                    arrow: false,
                }
            },
           
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // CenterMode: true,
                    dots: false,
                    arrow: false,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // CenterMode: true,
                    dots: false,
                    arrow: false,
                }
            }
        ]
    };
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: -1,
        arrows: false,
        variableWidth: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: -1,
                    infinite: true,
                    dots: false,
                    // CenterMode: true,
                    arrow: false,
                }
            },
         
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: -1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,

                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: -1,
                    CenterMode: true,
                    dots: false,
                    arrow: false,
                }
            }
        ]
    };
    var settings3 = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        autoplay: true,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    // CenterMode: true,
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
                    // CenterMode: true,
                    dots: false,
                    arrow: false,
                }
            }
        ]
    };

    const list = productcard.map((productcard, p) => (
        <div className=" max-w-[340px] h-[220px] w-full rounded-[16px]  p-[21px] shadow-[0px_4px_20px_0px_#02CDCF29] !flex justify-center items-center mt-10 mx-3  z-1 mb-1" key={p} >
            <p className='font-recharge font-bold sm:text-[24px] text-[20px] lg:leading-[38px] text-white text-center mx-auto hover:text-[#02CDCF] duration-500'>{productcard.heading}</p>
        </div>
    ));
    const list2 = productcard2.map((productcard2, p) => (
        <div className=" max-w-[340px] h-[220px] w-full rounded-[16px]  p-[21px] shadow-[0px_4px_20px_0px_#02CDCF29] !flex justify-center items-center mt-10 mx-3  z-1 mb-1" key={p} >
            <p className='font-recharge font-bold sm:text-[24px] text-[20px] lg:leading-[38px] text-white text-center mx-auto hover:text-[#02CDCF] duration-500'>{productcard2.heading}</p>
        </div>
    ));
    const list3 = productcard3.map((productcard3, p) => (
        <div className=" max-w-[340px] h-[220px] w-full rounded-[16px]  p-[21px] shadow-[0px_4px_20px_0px_#02CDCF29] !flex justify-center items-center mt-10 mx-3  z-1 mb-24" key={p} >
            <p className='font-recharge font-bold sm:text-[24px] text-[20px] lg:leading-[38px] text-white text-center mx-auto hover:text-[#02CDCF] duration-500'>{productcard3.heading}</p>
        </div>
    ));
    return (
        <>
            <div className='lg:py-20 relative z-10' id='Marketplace'>
                <div className="max-w-[144 0px] mx-auto " >
                    <h2 className='font-recharge font-bold sm:text-[40px] text-3xl sm:leading-[50px]  text-[#02CDCF] text-center mx-auto'data-aos="zoom-in">NexAi does all this. And more.</h2>
                    <p className=' font-poppins leading-[25px] text-sm sm:text-base font-normal text-[#b3b7bb]  max-w-[912px] mx-auto  text-center pt-2 lg:pb-7'data-aos="zoom-in">Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                    <Slider  {...settings}>
                        {list}
                    </Slider>
                    <Slider {...settings2}>{list2}</Slider>
                    <Slider {...settings3}>{list3}</Slider>
                </div>
                <div className='w-[233px] h-[233px] bg-[#02CDCF]  blur-[200px] rounded-full absolute right-0 top-[-13%] z-[-10]'></div>
            </div>
        </>
    )
}
export default Nexslider
