import React from 'react'
import { Unique1, Unique2, Unique3, Unique4 } from './Icons'

function Unique() {
    return (
        <div>
            <div className='max-w-[1340px] mx-auto lg:px-24 md:px-16 px-8 lg:my-24  border-[1px] border-solid border-[#FCFCFC] rounded-[32px] bg-[url(./assets/images/service.webp)]  w-full bg-center bg-cover  object-cover bg-no-repeat' id='tokens'>
                <h2 className='font-recharge font-bold sm:text-[40px] text-3xl sm:leading-[50px] text-[#FCFCFC] mx-auto text-center pt-16' data-aos="zoom-in">Unique features</h2>
                <p className='font-poppins font-normal text-sm sm:text-base leading-[25px] text-[#b3b7bb] text-center max-w-[397px] mx-auto pt-4' data-aos="zoom-in">ability to engage in natural, fluent conversations in over 15 languages,</p>
                <div className=' overflow-y-scroll sm:h-[590px] h-[520px] max-[475px]:h-[602px] flex flex-wrap flex-row -mx-3 mt-10  '>
                    <div className='md:w-1/2 w-full px-3'>
                        <div className='lg:max-w-[364px] pt-7 rounded-[16px] bg-white px-6 pb-14 mt-'>
                          <Unique1/>
                            <p className='font-recharge font-bold text-base sm:text-xl text-[#0B0A0A] leading-[32px] pt-6 '>Remote Access and File Management</p>
                            <p className='font-poppins font-normal text-sm sm:text-base leading-[25px] text-[#0B0A0A] pt-4'>Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                        </div>
                        <div className='lg:max-w-[364px] pt-7 rounded-[16px] bg-white px-6 pb-14 md:mt-32 mt-14'>
                            <Unique3 />
                            <p className='font-recharge font-bold text-base sm:text-xl text-[#0B0A0A] leading-[32px] pt-6 '>Autonomous and Natural Language Communication</p>
                            <p className='font-poppins font-normal text-sm sm:text-base leading-[25px] text-[#0B0A0A] pt-4'>.Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,</p>
                        </div>
                       
                    </div>
                    <div className='md:w-1/2 w-full px-3'>
                        <div className='lg:flex justify-end md:mt-[350px] mt-14'>
                            <div className=' pt-7 lg:max-w-[364px] rounded-[16px] bg-white px-6 pb-14'>
                                <Unique2 />
                                <p className='font-recharge font-bold text-base sm:text-xl text-[#0B0A0A] leading-[32px] pt-6 '>Real-time Home Monitoring</p>
                                <p className='font-poppins font-normal text-sm sm:text-base leading-[25px] text-[#0B0A0A] pt-4'>While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home. .</p>
                            </div>
                        </div>
                        <div className='lg:flex justify-end md:mt-32 mt-14'>
                            <div className=' pt-7 lg:max-w-[364px] rounded-[16px] bg-white px-6 pb-14'>
                                <Unique4 />
                                <p className='font-recharge font-bold text-base sm:text-xl text-[#0B0A0A] leading-[32px] pt-6 '>Intelligent Contextual Awareness</p>
                                <p className='font-poppins font-normal text-sm sm:text-base leading-[25px] text-[#0B0A0A] pt-4'>Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom and there's a smart TV present, Nexai will automatically display on the TV screen. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unique
