import express from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import mongoose from "mongoose";
import { connectDB } from "./db/connect";
import kpiRoutes from "./routes/kpi";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
import KPI from "./models/KPI";
import { kpis } from "./data/data";

const app = express();
const port = process.env.PORT || 9000;

//middleware & security
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(xss());
app.use(cors());

//routes
app.use("/kpi", kpiRoutes);

// error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} ...`)
    );
    //await mongoose.connection.db.dropDatabase();
    KPI.insertMany(kpis);
  } catch (error) {
    console.log(error);
  }
};

start();
