import { Request , Response } from "express";
import { getAllProductsService , addProductService , getSingleProductService } from "./products.service";
import { Connection } from "mysql2";
import {z} from "zod"

export async function getAllProducts(req: Request, res: Response) {
  try {
    const connection: Connection = req.app.get("connection");
    const result = await getAllProductsService(connection);
    res.send(result);
    
  } catch (error) {
    res.send(error);
  }
}

export async function addProduct (req: Request, res:Response){
  try {
const productScheme = z.object({
  name:z.string(),
  price:z.coerce.number(),

})
    const connection:Connection =req.app.get("connection");// Awiye
    const {name, price}=productScheme.parse(req.body);
    const result = await  addProductService(connection , name , price);
    res.send(result);

    
  } catch (error) {
    res.send(error)
    
  }
}

export async function  getSingleProduct(req: Request, res:Response){
  try {
    const productScheme= z.object({ 
      id:z.coerce.number()
    })
    const  {id} = productScheme.parse(req.params);
    const connection:Connection =req.app.get("connection");
    const result = await  getSingleProductService(connection , id);
    res.send(result[0])

  } catch (error) {
    res.send(error)
    
  }

}