const CheckKey = (req, res, next) => {
  const {key} = req.headers;
  if (key && key === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports = { CheckKey };
