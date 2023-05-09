import express, { Router } from "express";
import { getKpi } from "../controllers/kpi";

const router = Router();

router.route("/kpis").get(getKpi);

export default router;
