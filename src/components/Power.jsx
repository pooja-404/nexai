import React from 'react'
import powerhouse from '../assets/images/powerhouse.png'
import Button from './Button'

function Power() {
    return (
        <div className='lg:py-24 py-10 relative z-10' id='nexchat'>
            <div className='max-w-[1140px] mx-auto px-3 mt-18'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <img src={powerhouse} alt="poker" className='max-lg:w-full' data-aos="fade-right" />
                    </div>
                    <div className='lg:w-1/2 w-full px-3 pt-7 lg:pt-0'>
                        <h2 className='font-bold sm:text-[40px] text-3xl sm:leading-[50px] font-recharge text-[#02CDCF] max-lg:text-center'data-aos="fade-left">Ai-Powered Home Assistant</h2>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] lg:max-w-[517px] pt-4 max-lg:text-center'data-aos="fade-left">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] lg:max-w-[517px] pt-2 max-lg:text-center'data-aos="fade-left">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] lg:max-w-[517px] pt-2 max-lg:text-center'data-aos="fade-left">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
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