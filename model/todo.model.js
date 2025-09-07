import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  }
});

export const Todo = mongoose.model("Todo", todoSchema);
