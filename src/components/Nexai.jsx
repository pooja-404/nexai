import React from 'react'
import Ai from '../assets/images/ai.webp'
import Button from './Button'

function Nexai() {
    return (
        <>
            <div className='max-w-[1340px] mb-24 mx-auto flex sm:px-16 px-6 justify-center items-center flex-col  border-[1px] border-solid border-[#FCFCFC] rounded-[32px] bg-[url(./assets/images/nexai.webp)] lg:h-[810px] h-full bg-center bg-cover object-cover bg-no-repeat'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <h2 className='font-bold sm:text-[40px] text-3xl sm:leading-[50px] font-recharge text-[#02CDCF] pt-9 max-lg:text-center'data-aos="fade-down-right">What is NexAi?</h2>
                        <p className='font-poppins font-normal leading-[25px] text-sm sm:text-base text-[#b3b7bb] lg:max-w-[564px] pt-4 max-lg:text-center'data-aos="fade-down-right">Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className='font-poppins font-normal leading-[25px] text-sm sm:text-base text-[#b3b7bb] lg:max-w-[564px] pt-2 max-lg:text-center'data-aos="fade-down-right">Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <div className='max-lg:flex justify-center'>
                            <Button name='!mt-10' text='Learn More' />
                        </div>
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-2 lg:pt-0 relative z-10' data-aos="fade-down-left">
                        <img src={Ai} alt="poker" className=' mix-blend-lighten' />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Nexai