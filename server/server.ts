import express from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import helmet from "helmet";
import morgan from "morgan";
import xss from "xss-clean";
import { connectDB } from "./db/connect";
import kpiRoutes from "./routes/allRoutes";
import productRoutes from "./routes/allRoutes";
import transactionRoutes from "./routes/allRoutes";
import { notFoundMiddleware, errorHandlerMiddleware } from "./middleware/";
import KPI from "./models/KPI";
import Product from "./models/Product";
import { kpis, products, transactions } from "./data/data";
import Transaction from "./models/Transactions";

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
app.use("/product", productRoutes);
app.use("/transaction", transactionRoutes);

// error handling
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL!);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port} ...`)
    );
    const countKpi = await KPI.countDocuments();
    if (countKpi === 0) {
      await KPI.insertMany(kpis);
    }
    const countProduct = await Product.countDocuments();
    if (countProduct === 0) {
      await Product.insertMany(products);
    }
    const transactionCount = await Transaction.countDocuments();
    if (transactionCount === 0) {
      await Transaction.insertMany(transactions);
    }
  } catch (error) {
    console.log(error);
  }
};

start();
