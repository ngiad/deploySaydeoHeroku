import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import HotList from '../../Components/HotList'
import NavNavigate from '../../Components/NavNavigate'
import http from '../../utils/request'
import "./PostsNews.css"

const PostsNews = () => {
    const {id} = useParams()

    const [news,setNews] = useState({})

    const getDataNews = async() => {
        try {
            const res = await http.get(`news/getnews/${id}`)
            setNews(res.data)
            await http.post(`news/updatenews`,{...res.data,view : res.data.view + 1})
        } catch (error) {
            toast.warning("Đã sẩy ra lỗi")
        }
    }

    useEffect(() => {
        getDataNews()
    },[])

    console.log(news)
  return (
    <div className='mainPostNews'>
        <div className="NavNavigate">
            <NavNavigate title={"Bài viết"} link={`/news/${id}`} />
        </div>
        <div className="contener">
            <div className="left">
                <h1>{news.title}</h1>
                <span>Tác giả : {news.author} / {news.updatedAt} / View : {news.view}</span>
                <p>{news.p1}</p>
                <img src={news.img} alt="ảnh" />
                <p>{news.p2}</p>
            </div>
            <div className="right">
                <HotList />
            </div>
        </div>
    </div>
  )
}

export default PostsNews