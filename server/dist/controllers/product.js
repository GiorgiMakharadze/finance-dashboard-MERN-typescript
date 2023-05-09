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
exports.getProduct = void 0;
const http_status_codes_1 = require("http-status-codes");
const Product_1 = __importDefault(require("../models/Product"));
const errors_1 = require("../errors");
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield Product_1.default.find();
    if (!products) {
        throw new errors_1.NotFoundError("Can't find data");
    }
    res.status(http_status_codes_1.StatusCodes.OK).json(products);
});
exports.getProduct = getProduct;
