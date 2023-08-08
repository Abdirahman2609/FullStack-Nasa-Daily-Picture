const express = require("express");
const app = express();
const cors = require("cors");

// const axios = require("axios");
const { triggerAsyncId } = require("async_hooks");
let url =
  "https://api.nasa.gov/planetary/apod?api_key=m0vKLysaZ6CRYS9wwPIxVqz9i1MgKesabazh6w9R&date=2023-03-01";

// app.use(express.static("./public"));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

app.listen(5000, () => {
  console.log("Server has began.");
});
