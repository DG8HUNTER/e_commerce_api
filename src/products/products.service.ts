import { Connection } from "mysql2";
export interface Product {
  product_id: number | null;
  name: string | null;
  price: number | null;
}
export  function getAllProductsService(
  connection: Connection
): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    connection.query("select * from product", (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result as Product[]);
    });
  });
}

export function addProductService(connection:Connection, name:string, price:number):Promise<any>{
  return new Promise ((resolve, reject)=>{
    connection.query("Insert Into product (name, price) values (?,?)", [name , price] , (error , result)=>{
      if(error){
        reject(error);
      }
      resolve(result)
    })
  }
  )

}

export function getSingleProductService(connection:Connection , id:number):Promise<Product[]>{
  return new Promise ((resolve, reject)=>{
    connection.query("Select * from product where product_id =?" , [id] , (error , result)=>{
      if(error){
        reject(error);
      }
      resolve(result as Product[])
    })
  })
}
