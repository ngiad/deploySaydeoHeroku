import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import http from '../../utils/request'
import "./AdminNews.css"
import ListNews from './ListNews'

const AdminNews = () => {
  const [newNews,setNewNews] = useState({
    title:"",
    p1:"",
    img: "",
    p2: "",
    author: "",
    link : ""
  })

  const [AllNews,setAllNews] = useState([])

  const getNews = async () =>{
    try {
      const res = await http.get("news/getnews")
      setAllNews(res.data)
    } catch (error) {
      toast.warning("Đã sẩy ra lỗi")
    }
  }

  useEffect(() =>{
    getNews()
  },[])

  
  const handleCreateNews = async(e) =>{
    e.preventDefault()
    try {
      const res = await http.post("news/createnews",newNews)
      setAllNews(res.data)
      setNewNews({
          title:"",
          p1:"",
          img: "",
          p2: "",
          author: "",
          link : ""
        })
    } catch (error) {
      toast.warning("Lỗi vui lòng thử lại Hoặc liên hệ hỗ trợ")
    }
  }
  return (
    <div className='mainAdminNews'>
      <div className='newNews'>
      <h1>Thêm bài viết mới</h1>
        <form onSubmit={handleCreateNews}>
          <label >Tên bài viết</label>
          <input type="text" value={newNews.title} onChange={(e) => setNewNews({...newNews,title:e.target.value})} placeholder='  Tên bài viết là ...' />
          <label>Hình ảnh minh họa</label>
          <input type="text" value={newNews.img} onChange={(e) => setNewNews({...newNews,img:e.target.value})} placeholder='  Hình ảnh minh họa ...' />
          <label htmlFor="#p1">Nội dung bài viết</label>
          <textarea id='p1' value={newNews.p1} onChange={(e) => setNewNews({...newNews,p1:e.target.value})}></textarea>
          <label htmlFor="#p2">Kết bài</label>
          <textarea id='p2' value={newNews.p2} onChange={(e) => setNewNews({...newNews,p2:e.target.value})}></textarea>
          <label htmlFor="#p2">Tên tác giả</label>
          <input type="text" value={newNews.author} onChange={(e) => setNewNews({...newNews,author:e.target.value})} placeholder='  Tên tác giả ...' />
          <label htmlFor="#p2">Link sản phẩm</label>
          <input type="text" value={newNews.link} onChange={(e) => setNewNews({...newNews,link:e.target.value})} placeholder='  Link sản phẩm ...' />
          <button>Submit</button>
        </form>
      </div>
        <h1>Danh sách bài viết</h1>
      <div className='listNewsAdmin'>
        {
          AllNews.map((item,index) => {
            return <ListNews key={index} item={item} setAllNews={setAllNews} />
          })
        }
      </div>
    </div>
  )
}

export default AdminNews