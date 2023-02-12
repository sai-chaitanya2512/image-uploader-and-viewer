const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://prasannakumar:qweasdzxc@cluster0.p97np.mongodb.net";

const client = new MongoClient(
  uri,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 },
  () => console.log("db connected")
);

const database = client.db("images");

exports.user = database.collection("user");
exports.picture = database.collection("pictures");
