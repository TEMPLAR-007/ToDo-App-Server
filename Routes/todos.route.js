
const router = require("express").Router();
const { postTodos, getTodos, deleteTodos, patchToDos} = require("../Controller/todos.controller");
const VerifyToken = require("../VerifyToken/VerifyToken.js")
/* Post Todos */
router.post("/",VerifyToken, postTodos)
router.get("/",VerifyToken, getTodos)
router.delete("/",VerifyToken, deleteTodos)
router.patch("/",VerifyToken, patchToDos)

module.exports = router;