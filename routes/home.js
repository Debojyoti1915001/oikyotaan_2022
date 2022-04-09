import { Router } from "express";
import { getHomePage } from "../controllers/home.js";

const route = Router();

route.get("/", getHomePage);

export default route;
