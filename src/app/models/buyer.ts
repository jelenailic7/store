import { Product } from "./product";

export class Buyer {


constructor(
public id?:number,
public firstName?:string,
public lastName?:string,
public email?:string,
public products?:Product[]
){}
}


