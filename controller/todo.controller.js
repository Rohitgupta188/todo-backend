import { Todo } from "../model/todo.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

export const createTodo = asyncHandler(async (req, res) => {
  const { task } = req.body;
  const newTodo = await Todo.create({ task });
  res.status(201).json(new ApiResponse(201, newTodo, "Todo Created"));
});

export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();// console.log() kara ke check karna hai internet rahega jab
  res.status(200).json(new ApiResponse(200, todos, "All Todos Fetched"));
});

export const EditTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  console.log(id);
  

  const updatedTodo = await Todo.findByIdAndUpdate(
    id,
    { task },
    { new: true, runValidators: true }
  );

  if (!updatedTodo) {
    return res.status(404).json(new ApiResponse(404, null, "Todo not found"));
  }

  res.status(200).json(new ApiResponse(200, updatedTodo, "Todo Updated"));
});

export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedTodo = await Todo.findByIdAndDelete(id);

  if (!deletedTodo) {
    return res.status(404).json(new ApiResponse(404, null, "Todo not found"));
  }

  res.status(200).json(new ApiResponse(200, null, "Todo Deleted"));
});