import { ProductModel } from "../Model/ProductShema.js";

export const getProducts = async (req,res)  =>{
    try {
        const Products = await ProductModel.find()
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const getParamProduct = async(req,res) =>{
    const { id } = req.params
    try {
        const Product = await ProductModel.findOne({_id : id})
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const getProductsLimit = async(req,res) =>{
    const { limit } = req.query
    try {
        const Product = await ProductModel.find().limit(limit)
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const getParamTypeProducts = async(req,res) =>{
    const { type } = req.params
    try {
        const Product = await ProductModel.find({type : type})
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const QueryListProducts = async (req,res) =>{
    const {title} = req.query
    try {
        const Product = await ProductModel.find({title : {$regex : title}})
        res.status(200).json(Product)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const CreateProduct = async(req,res) =>{
    const NewProduct = req.body
    try {
        const product = await new ProductModel(NewProduct)
        await product.save()
        const Products = await ProductModel.find()
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const UpdateProduct = async(req,res) =>{
    const UpdateProduct = req.body
    try {
        const product = await ProductModel.findByIdAndUpdate({_id : UpdateProduct._id},UpdateProduct,{new : true})
        await product.save()
        const Products = await ProductModel.find()
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const DeleteProduct = async(req,res) =>{
    //console.log("đã chạy vào đây",req.body,req.headers);
    const {_id} = req.body
    try {
        const Product = await ProductModel.findById({_id : _id}).exec()
        await Product.remove()
        const Products = await ProductModel.find().exec()
        res.status(200).json(Products)
    } catch (error) {
        res.status(500).json({false : false})
    }
}