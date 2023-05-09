import express, { Router } from "express";
import { getKpi } from "../controllers/kpi";
import { getProduct } from "../controllers/product";

const router = Router();

router.route("/kpis").get(getKpi);
router.route("/products").get(getProduct);

export default router;
