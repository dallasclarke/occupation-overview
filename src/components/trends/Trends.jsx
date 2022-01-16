import React from "react";
import { Table } from "react-bootstrap";

import { useOccupationContext } from "../../context/occupationContext";

function Trends() {
  const { state } = useOccupationContext();
  const { data } = state;

  const jobChange = (num1, num2) => {
    return num2 - num1;
  };

  const jobChangePercentage = (num1, num2) => {
    const change = num2 - num1;
    const percentage = change / num1 * 100;

    return Math.round(percentage * 10) / 10 + "%";
  };

  const trend = data.trend_comparison;

  const regionStartJobs = trend.regional[0];
  const regionEndJobs = trend.regional[trend.regional.length - 1];
  const stateStartJobs = trend.state[0];
  const stateEndJobs = trend.state[trend.state.length - 1];
  const nationStartJobs = trend.nation[0];
  const nationEndJobs = trend.nation[trend.nation.length - 1];

  return (
    <Table>
      <thead>
        <tr>
          <th>Region</th>
          <th>{trend.start_year} Jobs</th>
          <th>{trend.end_year} Jobs</th>
          <th>Change</th>
          <th>% Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Regional</td>
          <td>{regionStartJobs}</td>
          <td>{regionEndJobs}</td>
          <td>{jobChange(regionStartJobs, regionEndJobs)}</td>
          <td>{jobChangePercentage(regionStartJobs, regionEndJobs)}</td>
        </tr>
        <tr>
          <td>State</td>
          <td>{stateStartJobs}</td>
          <td>{stateEndJobs}</td>
          <td>{jobChange(stateStartJobs, stateEndJobs)}</td>
          <td>{jobChangePercentage(stateStartJobs, stateEndJobs)}</td>
        </tr>
        <tr>
          <td>Nation</td>
          <td>{nationStartJobs}</td>
          <td>{nationEndJobs}</td>
          <td>{jobChange(nationStartJobs, nationEndJobs)}</td>
          <td>{jobChangePercentage(nationStartJobs, nationEndJobs)}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Trends;
