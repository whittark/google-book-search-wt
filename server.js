const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

// Port designation
const PORT = proess.env.PORT || 3001;

// Use the Express framework
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// Serve static assets from heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Route setup
app.use(routes);

// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});