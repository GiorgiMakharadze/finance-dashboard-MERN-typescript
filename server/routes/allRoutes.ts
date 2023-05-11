import express, { Router } from "express";
import { getKpi } from "../controllers/kpi";
import { getProduct } from "../controllers/product";
import { getTransaction } from "../controllers/transactions";

const router = Router();

router.route("/kpis").get(getKpi);
router.route("/products").get(getProduct);
router.route("/transactions").get(getTransaction);

export default router;
