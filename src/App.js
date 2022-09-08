import "./App.css";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import LeftSection from "./LeftSection";
import Pagination from "./pagination";
import Dropdown from "./dropdown";
import "./header.css";

import logoImage from "./remotelogo.png";

//import state from another file?

import "bootstrap/dist/css/bootstrap.min.css";
<script src="path/to/react-bootstrap-dropdown/react-bootstrap-dropdown.min.js" />;

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //filterChanges
  //filter from an array in react?
  let [filterTextValue, setFilterTextValue] = useState([]);

  let filteredJobList = jobs.filter((job) => {
    if (searchTerm === "") {
      if (filterTextValue === "Worldwide") {
        return job.candidate_required_location === "Worldwide";
      }
      if (filterTextValue === "USA Only") {
        return job.candidate_required_location === "USA Only";
      } else if (filterTextValue === "Other") {
        return (
          job.candidate_required_location !== "USA Only" &&
          job.candidate_required_location !== "Worldwide"
        );
      } else {
        return job;
      }
    } else if (
      job.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      if (filterTextValue === "Worldwide") {
        return job.candidate_required_location === "Worldwide";
      }
      if (filterTextValue === "USA Only") {
        return job.candidate_required_location === "USA Only";
      } else if (filterTextValue === "Other") {
        return (
          job.candidate_required_location !== "USA Only" &&
          job.candidate_required_location !== "Worldwide"
        );
      } else {
        return job;
      }
    }
  });
  function onFilterValueSelected(filterValue) {
    /* if (filterValue === null) {
      filterTextValue.splice(e.target.value);
    }
    setFilterTextValue([...filterTextValue, filterValue]);
    console.log(filterTextValue); */
    setFilterTextValue(filterValue);
  }

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(20);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobList.slice(indexOfFirstJob, indexOfLastJob);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setJobs(result.jobs);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div className="main-section">
          <div className="background">
            <div className="header">
              <div>
                <img src={logoImage} alt="logo" width="50%" />
              </div>
              <div>
                <Dropdown />
              </div>
            </div>
            <div className="title">
              <h1>Find your remote jobs without hassle</h1>
              <p>
                Remotive is where top talents go to easily access active and
                fully remote job opportunities from vetted tech companies.
              </p>
            </div>
            <form action="" className="search-bar">
              <input
                type="search"
                name="search"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                pattern=".*\S.*"
                required
              />
              <button class="search-btn" type="submit">
                <span>Search</span>
              </button>
            </form>
            <div class="container">
              <div class="chevron"></div>
              <div class="chevron"></div>
              <div class="chevron"></div>
            </div>
          </div>
        </div>
        <div className="main-content flex">
          <LeftSection filterValueSelected={onFilterValueSelected} />

          <Jobs jobs={currentJobs} />
        </div>
        <div>
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobs.length}
            paginate={paginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    );
  }
}
