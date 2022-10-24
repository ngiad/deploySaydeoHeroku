import { NewsModel } from "../Model/News.js";

export const getNews = async(req,res) => {
    try {
        const news = await NewsModel.find().exec()
        res.status(200).json(news)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const getNewsId = async(req,res) =>{
    const { id } = req.params
    try {
        const News = await NewsModel.findOne({_id : id})
        res.status(200).json(News)
    } catch (error) {
        res.status(500).json({false : false})
    }
}   

export const CreateNews = async(req,res) =>{
    const NewNews = req.body
    try {
        const News = await new NewsModel(NewNews)
        await News.save()
        const getAll = await NewsModel.find().exec()
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({false : false})
    }
}

export const UpdateNews = async(req,res) =>{
    const Update = req.body
    try {
        const news = await NewsModel.findByIdAndUpdate({_id :Update._id},Update,{new :  true})
        news.save()
        const getAll = await NewsModel.find().exec()
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({false : false}) 
    }
}

export const DeleteNews = async(req,res) =>{
    const {_id} = req.body
    try {
        const news = await NewsModel.findById({_id : _id})
        await news.remove()
        const getAll = await NewsModel.find().exec()
        res.status(200).json(getAll)
    } catch (error) {
        res.status(500).json({false : false})
    }
}