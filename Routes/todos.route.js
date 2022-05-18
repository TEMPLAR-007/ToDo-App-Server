
const router = require("express").Router();
const { postTodos} = require("../Controller/todos.controller");
/* Post Todos */
router.get("/", postTodos)

module.exports = router;