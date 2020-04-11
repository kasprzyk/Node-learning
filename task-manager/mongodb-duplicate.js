// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectId = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id);
console.log(id.id);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("connected correctly");

    const db = client.db(databaseName);
    db.collection("users").findOne(
      { _id: new ObjectId("5e8f8567a4e4e653ecf8ce17") },
      (error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result);
      }
    );

    db.collection("users")
      .find({ name: "Piotr" })
      .toArray((error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result);
      });

    db.collection("users")
      .find({ name: "Piotr" })
      .count((error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result);
      });

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });

    const updatePromise = db.collection("users").updateOne(
      {
        _id: new ObjectId("5e8f8567a4e4e653ecf8ce17"),
      },
      {
        $set: {
          name: "Stefan",
          age: 101,
        },
      }
    );

    updatePromise
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
