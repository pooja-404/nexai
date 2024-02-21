import React from 'react'
import Ai from '../assets/images/ai.webp'
import Button from './Button'

function Nexai() {
    return (
        <>
            <div className='max-w-[1340px] mb-20 mx-auto flex sm:px-16 px-6 max-lg:pt-10   border-[1px] border-solid border-[#FCFCFC] rounded-[32px] bg-[url(./assets/images/nexai.webp)]   h-full bg-center bg-cover object-cover bg-no-repeat'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 mx-auto px-3 relative z-[2]  lg:hidden block  text-center my-auto  mix-blend-screen' data-aos="fade-down-left">
                        <div className='flex justify-center'>
                            <img src={Ai} alt="ai" className='w-[90%] mix-blend-lighten ' />
                            <div className='md:w-[468px] w-[267px] h-[267px] md:h-[463px] bg-[#02CDCF] blur-[294px] absolute top-[2%] right-[-8%] z-[-1]'></div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 py-10 lg:py-[163px]'>
                        <h2 className='font-bold sm:text-[40px] text-3xl sm:leading-[50px] font-recharge text-[#02CDCF]  max-lg:text-center' data-aos="fade-down-right">What is NexAi?</h2>
                        <p className='font-poppins font-normal leading-[25px] text-sm sm:text-base text-[#b3b7bb] lg:max-w-[564px] pt-4 max-lg:text-center' data-aos="fade-down-right">Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className='font-poppins font-normal leading-[25px] text-sm sm:text-base text-[#b3b7bb] lg:max-w-[564px] pt-2 max-lg:text-center' data-aos="fade-down-right">Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <div className='max-lg:flex justify-center'>
                            <Button name='!mt-10' text='Learn More' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 mx-auto px-3 relative z-[2] lg:block hidden  text-center my-auto  mix-blend-screen' data-aos="fade-down-left">
                        <div className='flex justify-end'>
                            <img src={Ai} alt="ai" className='w-[90%] mix-blend-lighten ' />
                            <div className='md:w-[310px] w-[267px] mix-blend-lighten  h-[210px] md:h-[300px] bg-[#02CDCF] blur-[470px] absolute top-[2%] right-[-17%] z-[-1]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nexai