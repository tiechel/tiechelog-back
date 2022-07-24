const Router = require("express-promise-router");
const router = new Router();

/**
 * @openapi
 * /api/hello:
 *  get:
 *    description: あいさつ
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: name
 *        description: Your name
 *        in: query
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: あいさつを返す
 *        examples:
 *          result:
 *            message: Hello John
 *            name: John
 */
router.get("/hello", async (req, res) => {
  res.json({
    message: `Hello ${req.query.name}`,
    name: req.query.name,
  });
});

module.exports = router;
