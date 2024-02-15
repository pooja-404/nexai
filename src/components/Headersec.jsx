import React, { useState } from 'react'
import Button from './Button';


function Headersec() {
    const [show, setshow] = useState(true);
    function view() {
        setshow(!show);
        document.body.classList.toggle("max-lg:!overflow-hidden")
    }
    return (
        <>
            <div className="max-w-[1380px] mx-auto pt-[13px] bg-[url(./assets/images/aibg.webp)] bg-center bg-BgSize object-cover bg-no-repeat min-h-[90vh]">
                <nav className="flex justify-between max-w-[1140px] mx-auto px-3 py-4 ">
                    <a href="">
                    </a>
                    <ul
                        className={`${show ? "left-[-100%]" : "left-0 bg-[#ffffff]"
                            } flex items-center justify-center gap-6 flex-row max-lg:fixed max-lg:z-50 max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}
                    >
                        <li>
                            <a
                                href="#about"
                                className="text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Tokenomic"
                                className="text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                Marketplace
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Roadmap"
                                className="text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Faq"
                                className="text-white font-poppins text-base font-normal leading-[24px] hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                            >
                                NexChat
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
                                ? ""
                                : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "" : "hidden"
                                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                        <span
                            className={`${show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                                } bg-[#fff] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                        ></span>
                    </label>
                </nav>
                <div className='max-w-[1140px] mx-auto px-3 pt-40'>
                    <h2 className='font-recharge  font-normal text-white text-[60px] leading-[75px] max-w-[577px]'><span className=' text-[#02CDCF]  '>Nexai</span> is an advanced AI-powered home assistant</h2>
                    <p className='font-poppins font-normal text-base text-[#b3b7bb] pt-5'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <Button name='!mt-16' text='Know More' />
                </div>
            </div>
        </>
    )
}

export default Headersec