import React from 'react'
import powerhouse from '../assets/images/powerhouse.png'
import Button from './Button'

function Power() {
    return (
        <div className='py-24'>
            <div className='max-w-[1140px] mx-auto px-3'>
                <div className='flex flex-wrap flex-row -mx-3'>
                    <div className='w-1/2 px-3'>
                        <img src={powerhouse} alt="poker" />
                    </div>
                    <div className='w-1/2 px-3'>
                        <h2 className='font-bold text-[40px] leading-[50px] font-recharge text-[#02CDCF]'>Ai-Powered Home Assistant</h2>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] max-w-[517px] pt-4'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] max-w-[517px] pt-2'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='font-poppins font-normal leading-[25px] text-[#b3b7bb] max-w-[517px] pt-2'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <Button name='!mt-10' text='Learn More' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Power