const express = require('express');
const cors = require('cors');

require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

/* test first end points */
app.get("/", (req, res) =>{
    res.send({success: true, message: "Task ToDos EndPoints Running"})
});


/* Test Listen Port */
app.listen(port, ()=>{
    console.log(`TASK TODO SERVER RUNNING ON ${port}`);
    
});