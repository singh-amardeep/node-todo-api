// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, db) => {
    if (err) {
      return console.log("Unsable to connect to mongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany
    // db.collection("Todos")
    //   .deleteMany({ text: "Eat Lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection("Todos")
    //   .deleteOne({ text: "Eat Lunch" })
    //   .then(result => {
    //     console.log(result);
    //   });

    //findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.close();
  }
);
