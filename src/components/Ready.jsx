import React from 'react'
import Button from './Button'
import ellipse4 from '../assets/images/ellipse4.webp'

function Ready() {
    return (
        <div className='relative z-10'>
            <div className='max-w-[1140px] px-3 mx-auto my-24'>
                <div className='lg:flex lg:justify-between items-center'>
                    <h2 className='font-bold sm:text-[40px] text-3xl sm:leading-[50px] font-recharge text-[#FCFCFC] max-lg:text-center lg:max-w-[517px]' data-aos="fade-right">Ready to get started <span className='text-[#02CDCF]'>Talk to us Today</span></h2>
                    <div className='max-lg:flex justify-center pt-5 lg:pt-0' data-aos="fade-left">
                        <Button name='' text='Get Started' />
                    </div>
                </div>
            </div>
            <div className='w-[228px] h-[228px] bg-[#02CDCF]  blur-[200px] rounded-full absolute left-0 top-[-162%] z-[-10]'></div>
            <img src={ellipse4} alt="poker" className='absolute right-0 top-[-17%] z-[-10]' />
        </div>
    )
}
export default Ready
