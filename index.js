const express = require('express');
//initialization
const app = express()

app.get("/", (req, res, next) => {
    res.json({"message" : "this is a test endpoint message"});
})


//starting server
app.listen(3000, () => {
    console.log("Server Started");
});