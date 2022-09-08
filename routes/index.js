const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo_list");
router.get("/", todoController.todo);

module.exports = router;
