module.exports.notFound = (req, res, next) => {
  res.status(404);
  res.json({
    message: "Not found.",
  });
};

module.exports.serverError = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: `Server error. ${err}`,
  });
};
