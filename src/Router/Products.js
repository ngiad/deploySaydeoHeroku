import  express  from "express";
import { CreateProduct, DeleteProduct, getParamProduct, getParamTypeProducts, getProducts, getProductsLimit, QueryListProducts, UpdateProduct } from "../controlles/Products.js";


const ProductRouter = express()

ProductRouter.get("/getall",getProducts)
ProductRouter.get("/search",QueryListProducts)
ProductRouter.get("/search/:id",getParamProduct)
ProductRouter.get("/type/:type",getParamTypeProducts)
ProductRouter.get("/limit",getProductsLimit)
ProductRouter.post("/create",CreateProduct)
ProductRouter.post("/update",UpdateProduct)

ProductRouter.delete("/delete",DeleteProduct)

export default ProductRouter


