"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kpi_1 = require("../controllers/kpi");
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.route("/kpis").get(kpi_1.getKpi);
router.route("/products").get(product_1.getProduct);
exports.default = router;
