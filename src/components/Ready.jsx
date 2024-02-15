import React from 'react'
import Button from './Button'

function Ready() {
    return (
        <>
            <div className='max-w-[1140px] px-3 mx-auto'>
                <div className='md:flex md:justify-between items-center'>
                    <h2 className='font-bold text-[40px] leading-[52px] font-recharge text-[#FCFCFC] max-w-[517px]'>Ready to get started <span className='text-[#02CDCF]'>Talk to us Today</span></h2>
                    <Button name='' text='Get Started' />
                </div>
            </div>
        </>
    )
}
export default Ready
