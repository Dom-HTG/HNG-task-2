import { Router } from "express";
import { classifyNumber } from "../controller/controller.js";

const router = Router();

router.get('/classify-number', classifyNumber);

export default router;