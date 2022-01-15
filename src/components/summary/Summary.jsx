import React from "react";

import { useOccupationContext } from "../../context/occupationContext";

function Summary() {
  const { state } = useOccupationContext();
  const { data } = state;
  // console.log(data);

  const occupation = data.occupation.title;
  const summary = data.summary;

  return (
    <div className="summary">
      <header>
        <p>Occupation Summary for {occupation}</p>
      </header>
      <div className="stats">
        <ul>
          <li>{summary.jobs.regional}</li>
          <li>Jobs ({summary.jobs.year})</li>
          <li>190% above National Average</li>
        </ul>
        <ul>
          <li>{summary.jobs_growth.regional}</li>
          <li>
            % Change({summary.jobs_growth.start_year}-
            {summary.jobs_growth.end_year})
          </li>
          <li>Nation: {summary.jobs_growth.national_avg}</li>
        </ul>
        <ul>
          <li>${summary.earnings.regional}</li>
          <li>Median Hourly Earnings</li>
          <li>Nation: ${summary.earnings.national_avg}/hr</li>
        </ul>
      </div>
    </div>
  );
}

export default Summary;
