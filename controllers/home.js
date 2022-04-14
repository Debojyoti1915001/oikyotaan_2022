/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

 import moment from "moment";
const getHomePage = (req, res) => {
  res.render("home");
};

const getGallery = (req, res) => {
  res.render("gallery",{ moment: moment });
};

const getEvents = (req, res) => {
  res.render("events");
};

const getTeam = (req, res) => {
  res.render("team");
};

export { getHomePage, getGallery, getEvents, getTeam };
