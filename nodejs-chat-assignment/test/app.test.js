const { expect } = require("chai");
const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("../src/app");
const Message = require("../src/models/Message");

describe("Chat application API", function () {
  let mongo;

  before(async function () {
    mongo = await MongoMemoryServer.create();
    await mongoose.connect(mongo.getUri());
  });

  after(async function () {
    await mongoose.disconnect();
    await mongo.stop();
  });

  beforeEach(async function () {
    await Message.deleteMany({});
  });

  it("returns a healthy status", async function () {
    const res = await request(app).get("/api/health");
    expect(res.status).to.equal(200);
    expect(res.body.status).to.equal("ok");
  });

  it("creates a message", async function () {
    const res = await request(app)
      .post("/api/messages")
      .send({ username: "Alice", text: "Hello!" });

    expect(res.status).to.equal(201);
    expect(res.body.username).to.equal("Alice");
    expect(res.body.text).to.equal("Hello!");
  });

  it("rejects an incomplete message", async function () {
    const res = await request(app)
      .post("/api/messages")
      .send({ username: "Alice" });

    expect(res.status).to.equal(400);
  });

  it("returns chat history", async function () {
    await Message.create({ username: "Bob", text: "First message" });

    const res = await request(app).get("/api/messages");

    expect(res.status).to.equal(200);
    expect(res.body).to.have.lengthOf(1);
    expect(res.body[0].text).to.equal("First message");
  });
});
