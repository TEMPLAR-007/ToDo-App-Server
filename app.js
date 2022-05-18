/* init server  */
const express = require('express');
const cors = require('cors');
require("dotenv").config();


const app = express();
const todosRoute = require("./Routes/todos.route.js")
const loginRouter = require("./Routes/login.route.js")

// middleware 
app.use(cors());
app.use(express.json())

/* get treatments */
app.use('/todos', todosRoute)

/* login  */
app.use("/login", loginRouter)


/* test first end points */
app.get("/", (req, res) =>{
    res.send({success: true, message: "Task ToDos EndPoints Running"})
});

/* not found routes */
app.use((req, res, next) =>{
    res.status(404).send({success: false, message: "Not Found Route"})
})
/* Server Error Routes */
app.use((err, req,res, next) =>{
    res.status(500).send({success: false, message: "Something Broke of your API"})
})


module.exports = app;