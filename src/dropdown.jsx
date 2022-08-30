import { useState } from "react";
export default function DropDown() {
  const [isFind, SetIsFind] = useState(false);
  const [isPost, SetIsPost] = useState(false);
  const [Resources, SetResources] = useState(false);

  return (
    <div className="dropdown">
      <div>
        <div
          className="dropdown-btn"
          onMouseOver={(e) => SetIsFind(true)}
          onMouseOut={(e) => SetIsFind(false)}
          onClick={(e) => {
            SetIsFind(!isFind);
          }}
        >
          Find remote jobs <i class="arrow"></i>
        </div>
        {isFind && (
          <div className="dropdown-content">
            <div className="dropdown-item">Search By skill and location</div>
            <div className="dropdown-item">Search by company</div>
            <div className="dropdown-item">Join us</div>
            <button className="dropdown-item">Get Job updates</button>
          </div>
        )}
      </div>
      <div>
        <div
          className="dropdown-btn"
          onMouseOver={(e) => SetIsPost(true)}
          onMouseOut={(e) => SetIsPost(false)}
          onClick={(e) => {
            SetIsPost(!isPost);
          }}
        >
          Post remote jobs <i class="arrow"></i>
        </div>
        {isPost && (
          <div className="dropdown-content">
            <div className="dropdown-item">Why Remotive</div>
            <div className="dropdown-item">Jop posting guidelines</div>
            <div className="dropdown-item">Job listing templates</div>
            <button className="dropdown-item">FAQ</button>
          </div>
        )}
      </div>
      <div>
        <div
          className="dropdown-btn"
          onMouseOver={(e) => SetResources(true)}
          onMouseOut={(e) => SetResources(false)}
          onClick={(e) => {
            SetResources(!Resources);
          }}
        >
          Resources <i class="arrow"></i>
        </div>
        {Resources && (
          <div className="dropdown-content">
            <div className="dropdown-item">About us</div>
            <div className="dropdown-item">Webinar</div>
            <div className="dropdown-item">Guidelines</div>
            <button className="dropdown-item">Remote tools</button>
          </div>
        )}
      </div>
    </div>
  );
}
