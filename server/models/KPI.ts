import mongoose from "mongoose";

const Schema = mongoose.Schema;

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    expenses: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    expenses: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    operationalExpenses: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    nonOperationalExpenses: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
  },
  { toJSON: { getters: true } }
);

const KPISchema = new Schema(
  {
    totalProfit: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    totalRevenue: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    totalExpenses: {
      type: Number,
      currency: "USD",
      set: (v: any) => parseFloat(v.replace("$", "")),
      get: (v: any) => v.toFixed(2),
    },
    expensesByCategory: {
      type: Map,
      of: Number,
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
