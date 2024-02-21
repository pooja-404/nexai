import React, { useState } from 'react'
import Button from './Button';
import layer from '../assets/images/layer.webp'


function Headersec() {
    const [show, setshow] = useState(false);
    function view() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    function hide() {
        setshow(false);
        document.body.classList.toggle("max-lg:!overflow-hidden");
    }
    return (
        <div className='lg:px-12 md:px-5  pt-2 relative z-[1] min-h-screen'>
            <div className="pt-[13px] bg-[url(./assets/images/aibg.webp)] flex bg-center  flex-col bg-cover xl:bg-BgSize object-cover bg-no-repeat min-h-[95vh] z-10">
                <nav className=" max-w-[1280px] lg:mr-24 lg:ml-48 px-3">
                    <div className='flex items-center sm:pt-7  justify-between'>
                        <div className='lg:block hidden'></div>
                        <ul
                            className={` gap-5 flex mobileView ${show ? "right-0" : "right-[-100%]"}`}
                        >
                            <li>
                                <a
                                    href="#home" onClick={hide}
                                    className=" text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#Marketplace"
                                    onClick={hide}
                                    className=" text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    onClick={hide}
                                    className=" text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#nexchat"
                                    onClick={hide}
                                    className=" text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    NexChat
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tokens"
                                    onClick={hide}
                                    className=" text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[100%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#02CDCF] after:h-[2px] relative after:left-[0] after:bottom-[-5px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                                >
                                    Tokens
                                </a>
                            </li>
                        </ul>
                        <Button text='Sign Up' />
                        <label
                            className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
                            onClick={view}
                        >
                            <span
                                className={`${show
                                    ? "rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                                    : " "
                                    } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                            <span
                                className={`${show ? "hidden" : ""
                                    } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                            <span
                                className={`${show ? "rotate-[-50deg] translate-y-[-50%]" : ""
                                    } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                        </label>
                    </div>
                </nav>
                <div className='flex-grow flex justify-center flex-col' data-aos="fade-down" data-aos-delay="3000" id='home'>
                    <div className='max-w-[1140px] px-3 xl:pl-[122px] '>
                        <h2 className='font-recharge  font-normal text-white lg:text-[60px] sm:text-6xl text-4xl lg:leading-[75px] max-w-[577px]'><span className=' text-[#02CDCF]  '>Nexai</span> is an advanced AI-powered home assistant</h2>
                        <p className='font-poppins font-normal text-sm sm:text-base text-[#b3b7bb] pt-3 pb-12'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                        <Button name='n' text='Know More' />
                    </div>
                </div>
            </div>
            <img src={layer} alt="poker" className='absolute  bottom-[-2%] ' />
            <div className='w-[262px] h-[262px] bg-[#02CDCF]  blur-[200px] rounded-full absolute left-0 top-[12%]  lg:block hidden'></div>
            <div className='w-[262px] h-[262px] bg-[#02CDCF]  blur-[200px] rounded-full absolute right-[9%] top-[50%] z-[1]  lg:block hidden'></div>
        </div>
    )
}
export default Headersec