"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const TransactionsSchema = new Schema({
    buyer: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    productIds: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
}, { timestamps: true, toJSON: { getters: true } });
const Transaction = mongoose_1.default.model("Transaction", TransactionsSchema);
exports.default = Transaction;
