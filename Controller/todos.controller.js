/* get all the treatments */
const { ObjectId } = require("mongodb");
const client = require("../Connection/connection");
const todosCollection = client.db('todos-db').collection("todos");

const postTodos = async (req, res) => {
    await client.connect();
    const data = req.body;
    const decodedId = req.decoded.uid;
    const uid = req.query.uid;
    if (uid === decodedId) {
        const result = await todosCollection.insertOne(data);
        if (result.acknowledged) {
            res.send({ success: true, message: "Todos Added successfully done." })
        }
    } else {
        res.status(403).send({ success: false, message: "Forbidden Access." })
    }
}

const getTodos = async (req, res) => {
    await client.connect();
    const uid = req.query.uid;
    const decodedId = req.decoded.uid;
    if (uid === decodedId) {
        const query = { "author.uid": uid };
        const result = await todosCollection.find(query).toArray();
        if (result) {
            res.send({ success: true, result })
        }
    } else {
        res.status(403).send({ success: false, message: "Forbidden Access." })
    }
}


const deleteTodos = async (req, res) => {
    await client.connect();
    const postId = req.query.todoId;
    const decodedId = req.decoded.uid;
    const uid = req.query.uid;
    if (uid === decodedId) {
        const result = await todosCollection.deleteOne({ _id: ObjectId(postId) });
        if (result.acknowledged) {
            res.send({ success: true, message: "ToDo deleted successfully done." })
        }
    } else {
        res.status(403).send({ success: false, message: "Forbidden Access." })
    }
}


const patchToDos = async (req, res) => {
    await client.connect();
    const decodedId = req.decoded.uid;
    const uid = req.query.uid;
    const todoId = req.query.todoId;
    if (uid === decodedId) {
        const query = { _id: ObjectId(todoId) };
        const updateDoc = {
            $set: { completed: true }
        }
        const result = await todosCollection.updateOne(query, updateDoc);
        if (result.acknowledged) {
            res.send({ success: true, message: "Completed done." })
        }
    } else {
        res.status(403).send({ success: false, message: "Forbidden Access." })
    }

}

const updateToDos = async (req, res) => {
    await client.connect();
    const decodedId = req.decoded.uid;
    const uid = req.query.uid;
    const updateTodo = req.body;
    const todoId = req.query.todoId;
    if (uid === decodedId) {
        const query = { _id: ObjectId(todoId) };
        const options = { upsert: true };
        const updateDoc = {
            $set: updateTodo,
        }
        const result = await todosCollection.updateOne(query, updateDoc, options);
        if (result.acknowledged) {
            res.send({ success: true, message: "Update done." })
        }
    } else {
        res.status(403).send({ success: false, message: "Forbidden Access." })
    }

}



module.exports = { postTodos, getTodos, deleteTodos, patchToDos, updateToDos }