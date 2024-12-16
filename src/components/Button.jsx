import React from 'react'

export default function Button({styles}) {
  return (
    <button type='button' className={`py-4 px-6 rounded-md bg-blue-gradient font-poppins font-medium text-[18px] text-primary ${styles}`}>
       Get started
    </button>
  )
}
