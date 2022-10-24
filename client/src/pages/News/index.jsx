import React, { useEffect, useState } from "react";
import NavNavigate from "../../Components/NavNavigate";
import HotList from "../../Components/HotList";
import http from "../../utils/request";
import { toast } from "react-toastify";
import "./News.css";
import { useNavigate } from "react-router-dom";

const News = () => {
  const Navigate = useNavigate();
  const [Newss, setNewss] = useState([]);

  const getDataNews = async () => {
    try {
      const res = await http.get("news/getnews");
      setNewss(res.data);
    } catch (error) {
      toast.warning("Đã sẩy ra lỗi vui long liên hệ hỗ trợ");
    }
  };

  useEffect(() => {
    getDataNews();
  }, []);

  const handleClickNews = (id) => {
    Navigate(`/news/${id}`);
  };

  return (
    <div className="mainNews">
      <div className="NavNavigate">
        <NavNavigate title={"Tin tức"} link={"/news"} />
      </div>
      <div className="connener">
        <div className="left">
          <h1>Bài viết</h1>
          {Newss.map((news, index) => {
            return (
              <div
                onClick={() => handleClickNews(news._id)}
                className="NewsContener"
              >
                <div key={index} className="contentPostLeft">
                  <img src={news.img} alt="img" />
                </div>
                <div className="contentPostRight">
                  <h3>{news.title}</h3>
                  <span>
                    Tác giả : {news.author} / Lượt xem : {news.view}
                  </span>
                  <p>{news.p1}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="right">
          <HotList />
        </div>
      </div>
    </div>
  );
};

export default News;
