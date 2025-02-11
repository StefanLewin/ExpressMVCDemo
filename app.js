const express = require("express");
const app = express();

PORT = 3000;

//Setup EJS 
app.set("view engine", "ejs");
app.set("views", "Views");

app.use(express.static("public"));

//Setup Routes
const homeRouter = require('./routes/home-route');
const cardRouter = require('./routes/card-route');

app.use("/", homeRouter);
app.use("/card", cardRouter);

//Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`)
});