import React from 'react'
import { FooterFacebook, FooterTelligram, FooterTwitter } from './Icons'

function Footersec() {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto pt-28 bg-[url(./assets/images/footerbg.webp)] bg-center bg-cover object-cover bg-no-repeat'>
                <div className='flex flex-wrap flex-row -mx-3 pb-4'>
                    <div className='lg:w-8/12 w-full px-3 '>
                        <h2 className='font-recharge font-bold text-base text-[#b3b7bb] lg:max-w-[356px] pt-14'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h2>
                        <div className="flex gap-2 pt-3">
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterFacebook />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterTwitter />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" className="hover:translate-y-[-5px] hover:shadow-[0px_5px_8px_#fff] transition-all ease-linear duration-500 rounded-[50px]"><FooterTelligram />
                            </a>
                        </div>
                    </div>
                    <div className='lg:w-4/12 w-full px-3 pt-5 lg:pt-0'>
                        <div className='flex flex-wrap flex-row -mx-3'>
                            <div className='w-1/2 px-3 lg:flex justify-end'>
                                <ul>
                                    <li className="font-recharge font-bold text-lg leading-[21px] text-[#FCFCFC]"> Quick links</li>
                                    <li className='pt-4'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Home</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Features</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Marketplace</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Tokens</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>NexChat</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>About</a></li>
                                </ul>
                            </div>
                            <div className='w-1/2 px-3 lg:flex justify-end'>
                                <ul>
                                    <li className="font-recharge font-bold text-lg leading-[21px] text-[#FCFCFC]">Information's</li>
                                    <li className='pt-4'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Contact</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Phone</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>terms</a></li>
                                    <li className='pt-3'><a href="" className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#b3b7bb] '>Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-[#b3b7bb] w-full border-[1px] border-solid'></div>
                <p className='text-[#b3b7bb] font-recharge font-bold text-base leading-[19px]  text-center py-5'>@Copyright.nexai</p>
            </div>
        </>
    )
}
export default Footersec