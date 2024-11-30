import { helloWord } from "../Controllers/TestFunctions/testFunctions.js";
import { expect } from "chai";
import request from "supertest";

describe("Test Fuctions", () => {
  describe("Hello World Function", () => {
    it("Result should be Hello World", () => {
      expect(helloWord()).to.equal("Hello World");
    });
    it("Result should be a string", () => {
      expect(helloWord()).to.be.a("string");
    });
  });
});
