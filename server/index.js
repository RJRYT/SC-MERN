import express from "express";
import "dotenv/config";
import apiRouter from './src/routes'
//import routes from "./src/routes/index"

const app = express();

// PORT
const port = process.env.PORT || 3000;

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Hello from the server!" });
});

// Middleware
app.use("/api",apiRouter);


// server is running.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
