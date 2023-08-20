import React, { useState } from "react";

function Search({ parentCallback }) {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    parentCallback(date);
  };

  //This Search component passes the date typed in to the Search bar to the App component

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="YYYY/MM/DD."
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" id="search_button">
          Search
        </button>
      </form>
    </article>
  );
}

export default Search;
