import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransactionsSchema = new Schema(
  {
    buyer: {
      type: String,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    amount: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Transaction = mongoose.model("Transaction", TransactionsSchema);

export default Transaction;
