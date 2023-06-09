import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionsSchema = new Schema(
  {
    buyer: {
      type: String,
      required: true,
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
