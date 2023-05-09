import express from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import { connectDB } from "./db/connect";

const app = express();
const port = process.env.PORT || 9000;

//middleware & security

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(xss());
app.use(cors());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
