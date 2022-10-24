import React, { useEffect, useState } from "react";
import "./Home.css";
import http from "../../utils/request";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const News = () => {
  const Navigate = useNavigate()
  const [Newss, setNewss] = useState([]);

  const getNews = async () => {
    try {
      const res = await http.get("news/getnews");
      setNewss(res.data);
    } catch (error) {
      toast.warning("Đã sẩy ra lỗi");
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const handleClick = (id) => {
    Navigate(`/news/${id}`)
  };

  return (
    <div className="NewHome">
      <h2>TIN TỨC</h2>
      <div className="contenerNewsHome">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {Newss.map((news, index) => {
            return (
              <SwiperSlide key={index}>
                <div onClick={() => handleClick(news._id)} class="grid-item">
                  <img src={news.img} alt="img" />
                  <h5 className="titleNewsHome">{news.title}</h5>
                  <p>{news.p1}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default News;
