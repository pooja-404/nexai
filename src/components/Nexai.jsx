import React from 'react'
import Ai from '../assets/images/ai.png'
import Button from './Button'


function Nexai() {
    return (
        <div>
            <div className='max-w-[1340px] mx-auto flex px-16 justify-center items-center flex-col  border-[1px] border-solid border-[#FCFCFC] rounded-[32px] bg-[url(./assets/images/nexai.png)] h-[810px]   bg-center bg-cover object-cover bg-no-repeat'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-1/2 px-3'>
                        <h2 className='font-bold text-[40px] leading-[50px] font-recharge text-[#02CDCF] pt-9'>What is NexAi?</h2>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] max-w-[564px] pt-4'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] max-w-[564px] pt-2'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                        <Button name='!mt-10' text='Learn More' />
                    </div>
                    <div className='w-1/2 px-3'>
                        <img src={Ai} alt="poker" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nexai