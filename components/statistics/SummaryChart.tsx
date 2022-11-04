import React, { useEffect } from 'react'
import { Line } from "react-chartjs-2";

import 'chart.js/auto';

const data: any = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      // label: "Sales/ month",
      fill: false,
      lineTension: 0.2,
      backgroundColor: "#FAFAFE",
      borderColor: "#F9A109",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#F9A109",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 4,
      // pointHoverBackgroundColor: "red",
      // pointHoverBorderColor: "",
      // pointHoverBorderWidth: 3,
      pointRadius: 3,
      pointHitRadius: 0,
      data: [35, 120, 32, 18, 31, 11, 45, 130],
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false
    },
  },
  responsive: false,
  borderDash: [10, 2]
}
function SummaryChart() {
  return (
    <div className=' flex items-center mt-9'>
      <Line data={data} options={options} width={870} height={300} className="h-[10%]" />
    </div>
  )
}

export default SummaryChart