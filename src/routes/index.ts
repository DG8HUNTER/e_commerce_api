import { Router } from "express";
import { productsRouter } from "./products";

export const router = Router();
router.use(productsRouter);
