import express from "express";
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/version", (req, res) => {
  res.send("4"); // change this string to ensure a new version deployed
});

app.get("/", (req, res) => {
  res.send("Hello to my new app");
});

app.get("/health", (req, res) => {
  res.send("ok");
});
