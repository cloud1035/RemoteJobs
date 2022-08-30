import image from "./remoteLogo.png";
import Dropdown from "./dropdown";
import "./header.css";

import "bootstrap/dist/css/bootstrap.min.css";
<script src="path/to/react-bootstrap-dropdown/react-bootstrap-dropdown.min.js" />;
export default function () {
  return (
    <div className="background">
      <div className="header">
        <div>
          <img src={image} alt="logo" width="50%" />
        </div>
        <div>
          <Dropdown />
        </div>
      </div>
      <form action="" className="search-bar">
        <input type="search" name="search" pattern=".*\S.*" required />
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
  );
}
