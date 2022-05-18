/* get all the treatments */
const client = require("../Connection/connection");
const todosCollection = client.db('todos-db').collection("todos");
const postTodos = async(req, res) => {
    await client.connect();
   
    res.send({success: true, result})
}




module.exports = {postTodos}