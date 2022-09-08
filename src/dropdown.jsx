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
        >
          Find remote jobs <i class="arrow"></i>
        </div>
        {isFind && (
          <div
            className="dropdown-content"
            onMouseOver={(e) => SetIsFind(true)}
            onMouseOut={(e) => SetIsFind(false)}
          >
            <div className="dropdown-item">Search By skill and location</div>
            <div className="dropdown-item">
              <a href="https://remotive.com/remote-companies" target="_blank">
                Search by company
              </a>
            </div>
            <div className="dropdown-item">
              <a
                target="_blank"
                href="https://remotive.com/community?utm_campaign=Community+Website&utm_source=remotive.com&utm_medium=Website+Top+Menu"
              >
                Join our community
              </a>
            </div>
            <button className="dropdown-item">Contact</button>
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
          <div
            className="dropdown-content"
            onMouseOver={(e) => SetIsPost(true)}
            onMouseOut={(e) => SetIsPost(false)}
          >
            <div className="dropdown-item">
              <a href="https://remotive.com/hire" target="_blank">
                Why Remotive?
              </a>
            </div>
            <div className="dropdown-item">
              <a
                href="https://support.remotive.com/en/article/job-posting-rules-1xarot3/"
                target="_blank"
              ></a>
              Job posting guidelines
            </div>
            <div className="dropdown-item">
              <a
                href="https://support.remotive.com/en/article/job-listing-template-17b70cx/"
                target="_blank"
              >
                Job listing templates
              </a>
            </div>
            <a
              href="https://support.remotive.com/en/article/posting-a-remote-job-frequently-asked-questions-14sjtsn/"
              target="_blank"
            >
              <button className="dropdown-item">FAQ</button>
            </a>
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
          <div
            className="dropdown-content"
            onMouseOver={(e) => SetResources(true)}
            onMouseOut={(e) => SetResources(false)}
          >
            <div className="dropdown-item">
              <a href="https://remotive.com/manifesto" target="_blank">
                About us
              </a>
            </div>
            <div className="dropdown-item">
              <a
                href="https://remotive.com/webinar?utm_campaign=Webinar+Website&utm_source=remotive.com&utm_medium=Website+Top+Menu"
                target="_blank"
              >
                Webinar
              </a>
            </div>
            <div className="dropdown-item">
              <a href="https://remotive.com/guides" target="_blank">
                Guides
              </a>
            </div>
            <a href="https://remotive.com/tools" target="_blank">
              <button className="dropdown-item">Remote tools</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
