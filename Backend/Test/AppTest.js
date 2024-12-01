import { helloWord } from "../Controllers/TestFunctions/testFunctions.js";

import * as chai from "chai"; // Import everything from chai
import chaiHttp from "chai-http";
import { expect } from "chai";
import { app } from "../index.js";
import request from "supertest";
import mongoose from "mongoose";

let server = request.agent(app);

describe("Post Request", () => {
  describe("Add New Post to Query API /api/v1/queries", () => {
    it("Success should return true", () => {
      server
        .post("/api/v1/queries")
        .send({
          name: "Abhishek Kr. Pandey",
          email: "pandey0801abhi@gmail.com",
          phone: "7585824862",
          message: "Is there a opening for a Software Developer?",
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
        });
    });
  });
});

describe("Get Request", () => {
  describe("GET Query API /api/v1/queries", () => {
    it("Success should return []", () => {
      server.get("/api/v1/queries").end((err, res) => {
        expect(res.status).to.equal(200);
        // expect(res.body).to.be.a("Object");
      });
    });
  });
});

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
