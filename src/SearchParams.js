import React, { useState } from "react";

const SearchParams = () => {
  //you can't use if/for in hooks because order matters. Never do it.
  const [location, setLocation] = useState("Seattle, WA");
  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
