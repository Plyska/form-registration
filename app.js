const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

app.use("/api/auth", require("./routes/auth.routes"))

//const PORT = config.get("port") || 5000;

const PORT = process.env.PORT || 5000;

async function start() {
  try {
   await mongoose.connect(process.env.MONGODB_URI || config.get('mongoUri'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

   });

   if (process.env.NODE_ENV === 'production') {
     app.use(express.static("./client/build/"));

     app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
     })
   }

   app.listen(PORT, () => {
    console.log(`Apps has been started on port: ${PORT}...`);
  });
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }
}

start();
