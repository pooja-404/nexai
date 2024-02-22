import React from 'react'
import powerhouse from '../assets/images/powerhouse.png'
import Button from './Button'

function Power() {
    return (
        <div className='lg:my-28 my-10 relative z-10' id='nexchat'>
            <div className='max-w-[1140px] mx-auto px-3 lg:mt-24'>
                <div className='flex flex-wrap flex-row -mx-3 lg:pt-7'>
                    <div className='w-full lg:w-1/2 px-3 flex items-center justify-center relative z-[1]' data-aos="fade-right">
                        <div className='absolute lg:z-[1] lg:w-[231px] lg:h-[231px] lg:rounded-full maxlg:mix-blend-screen lg:bg-[#02CDCF] lg:blur-[180px]'></div>
                        <img data-aos="zoom-in" src={powerhouse} alt="home" className='max-w-[90%] w-full mix-blend-screen  lg:-translate-x-32' />
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-8 lg:pt-0'>
                        <h2 className='font-bold sm:text-[40px] text-3xl sm:leading-[50px] font-recharge text-[#02CDCF] max-lg:text-center'data-aos="fade-left">Ai-Powered Home Assistant</h2>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] text-sm  sm:text-base lg:max-w-[517px] pt-4 max-lg:text-center'data-aos="fade-left">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] text-sm  sm:text-base lg:max-w-[517px] pt-2 max-lg:text-center'data-aos="fade-left">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] text-sm  sm:text-base lg:max-w-[517px] pt-2 max-lg:text-center'data-aos="fade-left">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <div className='max-lg:flex justify-center' data-aos="fade-left">
                            <Button name='!mt-10' text='Learn More' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[228px] h-[245px] bg-[#02CDCF] blur-[200px] rounded-full absolute right-0 top-[16%] z-[-10] '></div>
        </div>
    )
}

export default Power