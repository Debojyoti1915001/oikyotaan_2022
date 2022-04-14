import { Router } from "express";
import {
  getHomePage,
  getGallery,
  getEvents,
  getTeam,
  getMeetTeam,
} from "../controllers/home.js";
//import { gallery} from "../views/gallery.ejs";

const route = Router();

route.get("/", getHomePage);
route.get("/gallery", getGallery);
route.get("/events", getEvents);
route.get("/team", getTeam);
route.get("/meetTeam", getMeetTeam);

export default route;
