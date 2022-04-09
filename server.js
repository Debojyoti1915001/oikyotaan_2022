// DOTENV CONFIG
import { config } from "dotenv";
config();

// IMPORTS
import express from "express";
import path from "path";
import expressPartials from "express-partials";

// ROUTE IMPORTS
import homeRoutes from "./routes/home.js";

// VARIABLES
const app = express();
const PORT = process.env.PORT || 9000;

// CONFIGURATION
app.set("view engine", "ejs").set("views", path.join(path.resolve(), "views"));

// MIDDLEWARES
app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(express.static(path.join(path.resolve(), "public")))
  .use(expressPartials());

// ROUTES DEFINITION
app.use("/", homeRoutes);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT PORT ${PORT}`);
});
