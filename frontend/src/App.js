import axios from "axios";
import Header from "./home-components/Header";
import Search from "./home-components/Search";
import "./css/App.css";

import React, { useState } from "react";

//App component gets data from the backend and implements in the component using state.

function App() {
  const [data, setData] = useState("");

  //The handleFormSubmit is a callback function that gets the date from the Search component and checks if it is in the proper pattern required and then
  //send the date to the backend.

  const handleFormSubmit = async (date) => {
    const pattern =
      /^(199[5-9]|20[0-2][0-3])-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    if (!date.match(pattern)) {
      window.alert("The value placed in the search is not a valid date.");
    }

    try {
      const response = await axios.get("http://localhost:5000/post_date", {
        params: { date },
      });
      const responseData = response.data;
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <Header />
      <Search parentCallback={handleFormSubmit} />

      <div className="info">
        <h1 id="title">{data.title}</h1>
        <img src={data.hdurl} alt={data.title} id="image" />
        <p id="explanation">{data.explanation}</p>
      </div>
    </div>
  );
}

export default App;
