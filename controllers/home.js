/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getHomePage = (req, res) => {
  res.render("home");
};

const getGallery = (req, res) => {
  res.render("gallery");
};

const getEvents = (req, res) => {
  res.render("events");
};

const getTeam = (req, res) => {
  res.render("team");
};

export { getHomePage, getGallery, getEvents, getTeam };
