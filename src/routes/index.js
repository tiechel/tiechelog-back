const Router = require("express-promise-router");
const router = new Router();

router.use("/api", require("./api"));

module.exports = router;
