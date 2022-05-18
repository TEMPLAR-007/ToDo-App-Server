
const router = require("express").Router();
const { postTodos, getTodos, deleteTodos} = require("../Controller/todos.controller");
const VerifyToken = require("../VerifyToken/VerifyToken.js")
/* Post Todos */
router.post("/",VerifyToken, postTodos)
router.get("/",VerifyToken, getTodos)
router.delete("/",VerifyToken, deleteTodos)

module.exports = router;