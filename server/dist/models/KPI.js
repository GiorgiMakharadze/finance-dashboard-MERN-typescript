"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_currency_1 = require("mongoose-currency");
const Schema = mongoose_1.default.Schema;
(0, mongoose_currency_1.loadType)(mongoose_1.default);
const daySchema = new Schema({
    date: String,
    revenue: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    expenses: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
}, { toJSON: { getters: true } });
const monthSchema = new Schema({
    month: String,
    revenue: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    expenses: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    operationalExpenses: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    nonOperationalExpenses: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
}, { toJSON: { getters: true } });
const KPISchema = new Schema({
    totalProfit: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    totalRevenue: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    totalExpenses: {
        type: mongoose_1.default.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    expensesByCategory: [
        {
            name: String,
            value: {
                type: mongoose_1.default.Types.Currency,
                currency: "USD",
                get: (v) => v / 100,
            },
        },
    ],
    monthlyData: [monthSchema],
    dailyData: [daySchema],
}, { timestamps: true, toJSON: { getters: true } });
const KPI = mongoose_1.default.model("KPI", KPISchema);
exports.default = KPI;
