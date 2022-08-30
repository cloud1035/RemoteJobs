import "./leftSection.css";
import image from "./world-globe.png";
import USA from "./usa.png";
export default function () {
  return (
    <div class="filter">
      <h4>Remote Location</h4>
      <ul>
        <li>
          <input type="checkbox" id="worldwide" />
          <img src={image} />
          Worldwide
        </li>
        <li>
          <input type="checkbox" id="USA" />
          <img src={USA} USA only /> USA Only
        </li>
        <li>
          <input type="checkbox" id="other" />
          <img src="https://remotive.com/remotive_website_job/static/src/img/remote-symbol.png" />
          Other locations
        </li>
      </ul>
    </div>
  );
}
