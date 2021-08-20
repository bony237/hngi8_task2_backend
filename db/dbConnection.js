const mongoose = require("mongoose");
let isConnected;
require("dotenv").config();

// MongoDBAtlas connection URL
const connectionURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
// mongodb+srv://bony237:9a67z6dnzK8SBWk@cluster0.83kco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const dbOption = {
  connectTimeoutMS: 300000, // 5 minutes
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
const connectToDatabase = async () => {
  if (isConnected) {
    console.log("using existing database connection");
    return Promise.resolve();
  }

  console.log("creating new database connection");
  const database = await mongoose.connect(connectionURL, dbOption);
  isConnected = database.connections[0].readyState;
  return isConnected;
};

module.exports = connectToDatabase;
