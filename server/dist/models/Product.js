"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_currency_1 = require("mongoose-currency");
const Schema = mongoose_1.default.Schema;
(0, mongoose_currency_1.loadType)(mongoose_1.default);
const ProductSchema = new Schema({
    price: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    expense: {
        type: Number,
        currency: "USD",
        set: (v) => parseFloat(v.replace("$", "")),
        get: (v) => v.toFixed(2),
    },
    transactions: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Transaction",
        },
    ],
}, { timestamps: true, toJSON: { getters: true } });
const Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
