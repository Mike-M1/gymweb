import React from 'react'
import Navbar from '../components/Navbar'
import "../styles/Metrics.css"

export default function Metrics() {


  return (
    <div id="outer" className='h-screen flex flex-col justify-start'>
      <Navbar/>
      <h1 className='font-heading tracking-[3px] text-[40px]'>Metrics</h1>
      <div id="chartsection">

        <div id="chart">
          This is where the actual chart goes
        </div>

        <div id="content">
          Chart Content
        </div>
        
      </div>

    </div>
  )
}
