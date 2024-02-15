import React from 'react'

function Button(props) {
  return (
    <div>
      <button className={`${props.name} py-[18px] px-[32px] bg-[#02CDCF] text-[#0B0A0A] text-lg font-recharge rounded-[12px] p-[18px_32px_18px_32px] font-bold`}>{props.text} </button>
    </div>
  )
}

export default Button
