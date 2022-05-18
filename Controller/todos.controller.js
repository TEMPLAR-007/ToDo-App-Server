/* get all the treatments */
const client = require("../Connection/connection");
const todosCollection = client.db('todos-db').collection("todos");
const postTodos = async(req, res) => {
    await client.connect();
    const data = req.body;
    const decodedId = req.decoded.uid;
    const uid = req.query.uid;
    if(uid === decodedId){
        const result = await todosCollection.insertOne(data);
        if(result.acknowledged){
            res.send({success: true, message: "Todos Added successfully done."})
        }
    }else{
        res.status(403).send({success:false, message: "Forbidden Access."})
    }
}




module.exports = {postTodos}