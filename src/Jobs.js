import React from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";
import image from "./world-globe.png";
import USA from "./usa.png";
TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);
export default function (props) {
  var date = new Date(props.job.publication_date);
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() - 1);
  var same = date.getDate() >= currentDate.getDate();

  return (
    <div className="row">
      <div className="img">
        <img src={props.job.company_logo} width="40px" />
      </div>
      <div className="left-section">
        <div>
          <a href={props.job.url}>
            <h2 className="position">
              {props.job.title}, {props.job.company_name}
            </h2>
          </a>
        </div>
        <div className="location-category">
          <p className="location">
            {props.job.candidate_required_location === "Worldwide" ? (
              <img src={image} width="10px" />
            ) : props.job.candidate_required_location === "USA Only" ? (
              <img src={USA} width="10px" />
            ) : (
              <img
                src="https://remotive.com/remotive_website_job/static/src/img/remote-symbol.png"
                width="10px"
              />
            )}

            {props.job.candidate_required_location}
          </p>
          <p className="category">{props.job.category}</p>
          {props.job.salary && <p className="category">{props.job.salary}</p>}
        </div>
      </div>

      <div className="right-section">
        <div className="new">
          {same ? <p> New</p> : <ReactTimeAgo date={date} locale="en-US" />}

          {/* give new tag to that were updated yesterday; */}
        </div>
      </div>
      <span className="right-section button">
        <a href={props.job.url} target="_blank">
          <button className="apply"> APPLY </button>
        </a>
      </span>
    </div>
  );
}
