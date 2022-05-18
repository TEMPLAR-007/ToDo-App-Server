
const router = require("express").Router();
const { postTodos} = require("../Controller/todos.controller");
const VerifyToken = require("../VerifyToken/VerifyToken.js")
/* Post Todos */
router.post("/",VerifyToken, postTodos)

module.exports = router;