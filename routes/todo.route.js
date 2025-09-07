import express from "express";
import { createTodo } from "../controller/todo.controller.js";
import { getAllTodos } from "../controller/todo.controller.js";
import { EditTodo, deleteTodo } from "../controller/todo.controller.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:id", EditTodo);
router.delete("/:id", deleteTodo);

export default router;
