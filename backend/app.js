const express = require("express");
const app = express();
const cors = require("cors");

const { triggerAsyncId } = require("async_hooks");
let url = `https://api.nasa.gov/planetary/apod?api_key=m0vKLysaZ6CRYS9wwPIxVqz9i1MgKesabazh6w9R`;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((error, req, res, next) => {
  console.log(error.stack);
  res.status(500).send("Something went wrong,");
});

// This backend gets date from the frontend and uses it in the query params

app.get("/post_date", async (req, res) => {
  let { date } = req.query;
  try {
    const response = await fetch(`${url}&date=${date}`);
    const data = await response.json();
    console.log(data);
    res.json(data);
  } catch (error) {
    res.json(error);
  }
});

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
