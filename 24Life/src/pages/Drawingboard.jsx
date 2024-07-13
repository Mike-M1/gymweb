import React from 'react'
import "../styles/Drawingboard.css"

export default function Drawingboard() {
  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center'>
        <div id="circle" className='p-[10px]'>
            <div id="circle2"></div>
        </div>
    </div>
  )
}
