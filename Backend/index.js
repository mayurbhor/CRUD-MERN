const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb+srv://mayurbhor:nETC0nbNVmAlFzrd@cluster0.hfvhp.mongodb.net/mern-crud?retryWrites=true&w=majority");



const app = express();
app.use(bodyparser.json());
app.use(cors());

app.use("/posts", require("./routes/post"));

app.get("/",(req,res)=>{
    res.send({Project:"MERN CRUD"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);