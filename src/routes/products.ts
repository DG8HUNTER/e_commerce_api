import { Router } from "express";
import { getAllProducts  , addProduct , getSingleProduct} from "../products/products.controller";


export const productsRouter = Router();

productsRouter.post("/products/addproduct",addProduct)
productsRouter.get("/products/getSingleProduct/:id",getSingleProduct)
productsRouter.get("/products/getAllproducts", getAllProducts);
