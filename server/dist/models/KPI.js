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
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    expenses: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
}, { toJSON: { getters: true } });
const monthSchema = new Schema({
    month: String,
    revenue: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    expenses: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    operationalExpenses: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    nonOperationalExpenses: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
}, { toJSON: { getters: true } });
const KPISchema = new Schema({
    totalProfit: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    totalRevenue: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    totalExpenses: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    expensesByCategory: {
        type: Map,
        of: Number,
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
}, { timestamps: true, toJSON: { getters: true } });
const KPI = mongoose_1.default.model("KPI", KPISchema);
exports.default = KPI;
