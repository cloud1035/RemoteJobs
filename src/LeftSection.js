import "./leftSection.css";
import image from "./world-globe.png";
import USA from "./usa.png";
import { useState } from "react";
export default function (props) {
  var checkboxArray = [];
  const [checked, setChecked] = useState([]);
  function onCheckedValue(e) {
    //console.log(e.target.value);

    if (e.target.checked) {
      // checkboxArray.push(e.target.value);
      setChecked([...checked, e.target.value]);
      props.filterValueSelected(e.target.value);
    } else {
      props.filterValueSelected(null);
    }
    var index = checked.indexOf(e.target.value);
    if (!e.target.checked && index != -1) {
      checked.splice(index, 1);
    }
    console.log(checked);
  }
  return (
    <div class="filter">
      <h4>Remote Location</h4>
      <ul>
        <li>
          <input
            type="checkbox"
            id="worldwide"
            value="Worldwide"
            onChange={onCheckedValue}
          />
          <img src={image} />
          Worldwide
        </li>
        <li>
          <input
            type="checkbox"
            id="USA"
            value="USA Only"
            onChange={onCheckedValue}
          />
          <img src={USA} /> USA Only
        </li>
        <li>
          <input
            type="checkbox"
            id="other"
            value="Other"
            onChange={onCheckedValue}
          />
          <img src="https://remotive.com/remotive_website_job/static/src/img/remote-symbol.png" />
          Other locations
        </li>
      </ul>
    </div>
  );
}

/*
const [state, setState] = useState({
  products: PRODUCTS,
  filters: new Set(),
});

const handleFilterChange = useCallback(event => {
  setState(previousState => {
    let filters = new Set(previousState.filters)
    let products = PRODUCTS
    
    if (event.target.checked) {
      filters.add(event.target.value)
    } else {
      filters.delete(event.target.value)
    }
    
    if (filters.size) {
      products = products.filter(product => {
        return filters.has(product.candidate_required_location)
      })
    }
    
    return {
      filters,
      products,
    }
  })
}, [setState])

return (
  <main>
    <ProductFilters 
      categories={CATEGORIES}
      onFilterChange={handleFilterChange}/>
    <ProductsList products={state.products} />
  </main>
)
} */
