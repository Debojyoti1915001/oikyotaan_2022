/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getHomePage = (req, res) => {
  res.render("home");
};

export { getHomePage };
