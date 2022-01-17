import React from "react";

import { useOccupationContext } from "../../context/occupationContext";

import "./Summary.css";

function Summary() {
  const { state } = useOccupationContext();
  const { data } = state;

  const percentHelper = (num1, num2) => {
    const result = (num1 / num2) * 100;
    return parseInt(result.toFixed());
  };

  const occupation = data.occupation.title;
  const summary = data.summary;
  const regionalJobs = summary.jobs.regional;
  const nationAvg = summary.jobs.national_avg;
  const percent = percentHelper(regionalJobs, nationAvg);

  return (
    <div className="summary">
      <header className="summary-head">
        <p>Occupation Summary for {occupation}</p>
      </header>
      <div className="stats">
        <ul>
          <li className="stat-row-1">{summary.jobs.regional}</li>
          <li>Jobs ({summary.jobs.year})</li>
          <li>
            {percent}%{" "}
            {percent > 0 ? (
              <span className="above">above</span>
            ) : (
              <span className="below">below</span>
            )}{" "}
            National Average
          </li>
        </ul>
        <ul>
          <li
            className={
              summary.jobs_growth.regional > 0
                ? "above stat-row-1"
                : "below stat-row-1"
            }
          >
            {summary.jobs_growth.regional}
          </li>
          <li>
            % Change({summary.jobs_growth.start_year}-
            {summary.jobs_growth.end_year})
          </li>
          <li>Nation: {summary.jobs_growth.national_avg}</li>
        </ul>
        <ul>
          <li className="stat-row-1">${summary.earnings.regional}</li>
          <li>Median Hourly Earnings</li>
          <li>Nation: ${summary.earnings.national_avg}/hr</li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Summary;
