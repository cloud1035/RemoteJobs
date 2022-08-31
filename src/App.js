import "./App.css";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Header from "./Header";
import LeftSection from "./LeftSection";

export default function App() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [jobsPerPage, setJobsPerPage] = useState(10);
  // const indexOfLastJob = currentPage * jobsPerPage;
  // const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  // const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  return (
    <div>
      <Jobs />
    </div>
  );
}
