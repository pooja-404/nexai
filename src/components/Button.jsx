import React from 'react'

function Button(props) {
  return (
    <>
      <button className={`${props.name} relative flex h-[50px] hover:text-[#02CDCF]  items-center justify-center overflow-hidden  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#040404] hover:border-[transparent] before:duration-500 before:ease-out  hover:border-0 hover:shadow-[0px_0px_12px_0px_#02CDCF] hover:before:h-56 hover:before:w-56  bg-[#02CDCF] text-[#0B0A0A] text-lg font-recharge rounded-[12px] px-[32px] py-[18px] font-bold`}>
        <span className='relative z-10 text-nowrap'>{props.text}</span>
      </button>

    </>
  )
}

export default Button