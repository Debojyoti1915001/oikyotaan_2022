import { Router } from "express";
import {
  getHomePage,
  getGallery,
  getEvents,
  getTeam,
} from "../controllers/home.js";
//import { gallery} from "../views/gallery.ejs";

const route = Router();

route.get("/", getHomePage);
route.get("/gallery", getGallery);
route.get("/events", getEvents);
route.get("/team", getTeam);

export default route;
