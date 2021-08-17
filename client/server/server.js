const express = require("express");
const app = express();

app.use("/api/v1/users/", require("./api/v1/routes/usersRoute"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001");
})