import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

import { useOccupationContext } from "../../context/occupationContext";

import Trends from "../trends/Trends";

const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Percent Change",
      },
    },
  },
};

function DataChart() {
  const { state } = useOccupationContext();

  const regionalGrowth = state.data.trend_comparison.regional;
  const nationalGrowth = state.data.trend_comparison.nation;
  const stateGrowth = state.data.trend_comparison.state;

  const growthRate = (nums) => {
    const result = ["0"];
    nums.forEach((num, i) => {
      const next = nums[i + 1];

      if (next) {
        const percentage = ((next - num) / num) * 100;
        result.push(percentage.toFixed(2));
      }
    });

    return result;
  };

  const data = {
    labels: [2013, 2014, 2015, 2016, 2017, 2018],
    datasets: [
      {
        label: "Regional",
        data: growthRate(regionalGrowth),
        fill: true,
        backgroundColor: "rgba(7, 225, 230, 0.2)",
        borderColor: "rgba(7, 225, 230, 0.8)",
      },
      {
        label: "National",
        data: growthRate(nationalGrowth),
        fill: true,
        backgroundColor: "rgba(7, 219, 91, 0.2)",
        borderColor: "rgba(7, 219, 91, 0.8)",
      },
      {
        label: "State",
        data: growthRate(stateGrowth),
        fill: true,
        backgroundColor: "rgba(245, 64, 64, 0.2)",
        borderColor: "rgba(245, 64, 64, 0.8)",
      },
    ],
  };

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
