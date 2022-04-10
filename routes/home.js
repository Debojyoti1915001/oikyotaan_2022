import { Router } from "express";
import { getHomePage } from "../controllers/home.js";
import { getGallery } from "../controllers/home.js";
//import { gallery} from "../views/gallery.ejs";

const route = Router();

route.get("/", getHomePage);
route.get("/gallery", getGallery);

export default route;
