import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    price: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    expense: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
