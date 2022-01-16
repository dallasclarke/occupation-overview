import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import Trends from "../trends/Trends";

const data = {
  labels: [2013, 2014, 2015, 2016, 2017, 2018],
  datasets: [
    {
      label: "Regional",
      data: [11904, 12384, 12352, 12680, 12920, 13114],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "National",
      data: [300651, 307024, 314154, 318998, 326205],
      fill: true,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function DataChart() {
  return (
    <div>
      <header>
        <h3>Regional Trends</h3>
      </header>
      <hr />
      <Line data={data} options={options} />
      <Trends />
    </div>
  );
}

export default DataChart;
