import  express  from "express";
import { CreateNews, DeleteNews, getNews, getNewsId, UpdateNews } from "../controlles/News.js";

const NewsRouter = express()


NewsRouter.get("/getnews",getNews)
NewsRouter.get("/getnews/:id",getNewsId)
NewsRouter.post("/createnews",CreateNews)
NewsRouter.post("/updatenews",UpdateNews)
NewsRouter.delete("/deletenews",DeleteNews)

export default NewsRouter