import cors from 'cors';
import express from "express";
import morgan from 'morgan'
import connectDB from "./config/db.js";
import personRoutes from "./routes/personRoutes.js";
import errorHandler from "./middlewares/errorHandler.js"

const app = express();
app.use(morgan('dev'));
app.use(cors());
// Middleware
app.use(express.json());

// routes
app.use("/api/person", personRoutes);

// custom global errorHandler
app.use(errorHandler);

// connect to the database 
connectDB();

export default app;
