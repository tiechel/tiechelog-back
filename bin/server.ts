import { app } from "../src/app";

const port = parseInt(process.env.PORT || "3000");
const hostname = process.env.HOST || "localhost";

export const server = app.listen(port, hostname, () => {
  console.log(`Listen on ${hostname}:${port}`);
});
