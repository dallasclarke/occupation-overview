import React from "react";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement
// } from "chart.js";
import Chart from "chart.js/auto"
import { Line } from "react-chartjs-2";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   PointElement
// );

const data = {
  labels: [2013, 2014, 2015, 2016, 2017, 2018],
  datasets: [
    {
      label: "Regional",
      data: [91, 92, 93, 90, 88, 99],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "National",
      data: [93, 92, 99, 85, 90, 80],
      fill: true,
    },
  ],
};

function DataChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default DataChart;
