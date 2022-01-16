import React from "react";
import { Table } from "react-bootstrap";

import { useOccupationContext } from "../../context/occupationContext";

import "./EmployingIndustries.css";

function EmployingIndustries() {
  const { state } = useOccupationContext();
  const { data } = state;

  // console.log(data);

  const jobs = data.employing_industries.jobs;
  const industries = data.employing_industries.industries;

  //   console.log(industries);

  return (
    <div className="employing-industries">
      <header>
        <p>Industries Employing </p>
      </header>
      <Table variant="black">
        <thead>
          <tr>
            <th>Industry</th>
            <th>
              <p>Occupation Jobs in Industry (2015)</p>
            </th>
            <th>% of Occupation in Industry (2015)</th>
            <th>% of Total Jobs in Industry (2015)</th>
          </tr>
        </thead>
        <tbody>
          {industries.map((industry, idx) => {
            const percentOfOccupation =
              (industry.in_occupation_jobs / jobs) * 100;
            const percentOfJobs =
              (industry.in_occupation_jobs / industry.jobs) * 100;

            return (
              <tr key={idx}>
                <td>{industry.title}</td>
                <td>{industry.in_occupation_jobs}</td>
                <td>{percentOfOccupation.toFixed(1)}</td>
                <td>{percentOfJobs.toFixed(1)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployingIndustries;
