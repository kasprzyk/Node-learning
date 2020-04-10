// CRUD create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    console.log("connected correctly");

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Piotr",
    //     age: 32,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    db.collection("users").insertMany(
      [
        {
          name: "Kate",
          age: 28,
        },
        {
          name: "Kasprzyk",
          age: 32,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result.ops);
      }
    );
  }
);
