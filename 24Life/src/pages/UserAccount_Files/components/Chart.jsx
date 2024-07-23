import React from 'react'
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export default function Chart() {

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
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {


};


  return (
    <div id="chart" className=''>
      <Line options={options} data={lineChartData} />
    </div>
  );
}
