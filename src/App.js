import "./App.css";
import { useEffect, useState } from "react";
import Jobs from "./Jobs";
import Header from "./Header";
import LeftSection from "./LeftSection";
export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [jobs, setJobs] = useState([]);

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
            {jobs.map((job, i) => {
              return (
                <li>
                  <Jobs job={job} />
                </li>
              );
            })}
            ;
          </div>
        </div>
      </div>
    );
  }
}
