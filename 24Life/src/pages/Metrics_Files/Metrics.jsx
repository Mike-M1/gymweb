import React from 'react'
import Navbar from '../../universal_components/Navbar/Navbar'
import "./Metrics.css"
import {Line} from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Metrics() {



  const lineChartData = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Steps",
        data: [3000, 5000, 0, 4000, 200, 4000, 10000, 15, 20000],
        borderColor: "rgb(75, 192, 192)"
      }
    ]
  }


  const options = {};
  const data = {};

  return (
    <div id="outer" className='h-screen flex flex-col justify-start'>
      <Navbar/>
      <h1 className='font-heading tracking-[3px] text-[40px]'>Metrics</h1>
      <div id="chartsection" className='flex flex-col items-center flex-1'>

        <div id="chart1"className='border-black border-2'>
          This is where the actual chart goes
          <Line options={options} data={lineChartData}/>
        </div>

        <div id="content" className="flex-1">
          Chart Content
        </div>
        
      </div>

    </div>
  )
}
