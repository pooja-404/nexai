import React from 'react'
import { FooterFacebook, FooterTelligram, FooterTwitter } from './Icons'

function Footersec() {
    return (
        <div className='relative z-10 bg-[url(./assets/images/footerbg.webp)] bg-center lg:bg-BgSize bg-cover object-cover bg-no-repeat'>
            <div className='max-w-[1140px] px-3 mx-auto lg:pt-28 '>
                <div className='flex flex-wrap flex-row -mx-3 pb-4'>
                    <div className='lg:w-7/12 w-full px-3' data-aos="fade-right">
                        <h2 className='font-recharge font-bold text-sm sm:text-base text-[#b3b7bb] lg:max-w-[356px] lg:pt-14'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h2>
                        <div className="flex gap-3 pt-5">
                            <a href="https://www.facebook.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#02CDCF] transition-all ease-linear duration-500 rounded-[50px]"><FooterFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#02CDCF] transition-all ease-linear duration-500 rounded-[50px]"><FooterTwitter />
                            </a>
                            <a href="https://web.telegram.org/a/" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#02CDCF] transition-all ease-linear duration-500 rounded-[50px]"><FooterTelligram />
                            </a>
                        </div>
                    </div>
                    <div className='lg:w-5/12 w-full px-3 sm:pt-12 pt-9 lg:pt-0' data-aos="fade-left">
                        <div className='flex flex-wrap flex-row -mx-3 lg:pb-5'>
                            <div className='w-1/2 px-3'>
                                <ul>
                                    <li className="font-recharge font-bold text-base sm:text-lg leading-[21px] text-[#FCFCFC]"> Quick links</li>
                                    <li className='lg:pt-4 pt-2'><a href="#home" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Home</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#nexchat" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Features</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#Marketplace" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Marketplace</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#ready" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Tokens</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#tokens" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>NexChat</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="#about" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>About</a></li>
                                </ul>
                            </div>
                            <div className='w-1/2 px-3 lg:flex justify-end'>
                                <ul>
                                    <li className="font-recharge font-bold text-base sm:text-lg leading-[21px] text-[#FCFCFC]">Information's</li>
                                    <li className='lg:pt-4 pt-2'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Contact</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Phone</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>terms</a></li>
                                    <li className='lg:pt-3 pt-2'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-5px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#02CDCF] '>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-[#b3b7bb] w-full border-[1px] border-solid'></div>
                <p className='text-[#b3b7bb] font-recharge font-bold text-sm sm:text-base leading-[19px]  text-center py-5'>@Copyright.nexai</p>
            </div>
            <div className='w-[228px] h-[228px] bg-[#02CDCF]  blur-[200px] rounded-full absolute right-0 top-[-10%] z-[-10]'></div>
        </div>
    )
}
export default Footersec