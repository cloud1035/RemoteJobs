import React from "react";
import ReactTimeAgo from "react-time-ago";
import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import image from "./world-globe.png";
import USA from "./usa.png";
import Header from "./Header";
import LeftSection from "./LeftSection";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
export default function (props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);

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
  console.log(jobs.jobs);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header />
        <div className="main-section">
          <div>
            <LeftSection />
          </div>
          <div className="main-content">
            {jobs.map((job) => {
              var date = new Date(job.publication_date);
              var currentDate = new Date();
              currentDate.setDate(currentDate.getDate() - 1);
              var same = date.getDate() >= currentDate.getDate();
              return (
                <li>
                  <div className="row">
                    <div className="img">
                      <img src={job.company_logo} width="40px" />
                    </div>
                    <div className="left-section">
                      <div>
                        <a href={job.url}>
                          <h2 className="position">
                            {job.title}, {job.company_name}
                          </h2>
                        </a>
                      </div>
                      <div className="location-category">
                        <p className="location">
                          {job.candidate_required_location === "Worldwide" ? (
                            <img src={image} width="10px" />
                          ) : job.candidate_required_location === "USA Only" ? (
                            <img src={USA} width="10px" />
                          ) : (
                            <img
                              src="https://remotive.com/remotive_website_job/static/src/img/remote-symbol.png"
                              width="10px"
                            />
                          )}

                          {job.candidate_required_location}
                        </p>
                        <p className="category">{job.category}</p>
                        {job.salary && <p className="category">{job.salary}</p>}
                      </div>
                    </div>

                    <div className="right-section">
                      <div className="new">
                        {same ? (
                          <p> New</p>
                        ) : (
                          <ReactTimeAgo date={date} locale="en-US" />
                        )}

                        {/* give new tag to that were updated yesterday; */}
                      </div>
                    </div>
                    <span className="right-section button">
                      <a href={job.url} target="_blank">
                        <button className="apply"> APPLY </button>
                      </a>
                    </span>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
