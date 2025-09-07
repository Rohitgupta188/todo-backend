import express from "express";
import mongoose from "mongoose";
import todoRoutes from "./routes/todo.route.js";
import cors from 'cors'

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN , 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "todo_app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(express.json({ limit: "16kb" }));


app.use("/api/v1/todos", todoRoutes);


export default app;
