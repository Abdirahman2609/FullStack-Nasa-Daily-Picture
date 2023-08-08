import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  async function getData(e) {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000"); // Update the URL to target the specific route on your backend
      const data = response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
      <h1>{data.title}</h1>
      <img src={data.hdurl} alt={data.title} />
      <p>{data.explanation}</p>
    </div>
  );
}

export default App;
