const app = require("./app");

// port 
const port = process.env.PORT || 5000;

/* Test Listen Port */
app.listen(port, ()=>{
    console.log(`TASK TODO SERVER RUNNING ON ${port}`);
});