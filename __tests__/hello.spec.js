const request = require("supertest");
const server = require("../src/app");

describe("[API] Hello", () => {
  describe("Normal", () => {
    test("Hello API", async () => {
      const name = "hogehoge";
      const response = await request(server).get(`/hello?name=${name}`);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe(name);
    });
  });
  describe("Exception", () => {
    test("NotFound", async () => {
      const response = await request(server).get(`/notfound`);
      expect(response.status).toBe(404);
    });
  });
});
