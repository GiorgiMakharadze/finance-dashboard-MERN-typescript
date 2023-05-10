"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
require("express-async-errors");
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const xss_clean_1 = __importDefault(require("xss-clean"));
const connect_1 = require("./db/connect");
const allRoutes_1 = __importDefault(require("./routes/allRoutes"));
const allRoutes_2 = __importDefault(require("./routes/allRoutes"));
const allRoutes_3 = __importDefault(require("./routes/allRoutes"));
const middleware_1 = require("./middleware/");
const KPI_1 = __importDefault(require("./models/KPI"));
const Product_1 = __importDefault(require("./models/Product"));
const data_1 = require("./data/data");
const Transactions_1 = __importDefault(require("./models/Transactions"));
const app = (0, express_1.default)();
const port = process.env.PORT || 9000;
//middleware & security
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use((0, morgan_1.default)("common"));
app.use((0, xss_clean_1.default)());
app.use((0, cors_1.default)());
//routes
app.use("/kpi", allRoutes_1.default);
app.use("/product", allRoutes_2.default);
app.use("/transaction", allRoutes_3.default);
// error handling
app.use(middleware_1.notFoundMiddleware);
app.use(middleware_1.errorHandlerMiddleware);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connect_1.connectDB)(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server is listening on port ${port} ...`));
        const countKpi = yield KPI_1.default.countDocuments();
        if (countKpi === 0) {
            yield KPI_1.default.insertMany(data_1.kpis);
        }
        const countProduct = yield Product_1.default.countDocuments();
        if (countProduct === 0) {
            yield Product_1.default.insertMany(data_1.products);
        }
        const transactionCount = yield Transactions_1.default.countDocuments();
        if (transactionCount === 0) {
            yield Transactions_1.default.insertMany(data_1.transactions);
        }
    }
    catch (error) {
        console.log(error);
    }
});
start();
