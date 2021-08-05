const express = require("express");
const app = express();

app.use("/users/", require("./routes/usersRoute"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001");
})