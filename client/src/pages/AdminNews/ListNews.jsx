import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import http from "../../utils/request";
import "./AdminNews.css";

const ListNews = ({ item, setAllNews }) => {
  const { user } = useContext(AuthContext);
  const [checkupdate, setCheckUpdate] = useState(false);

  const [dataUpdateNew, SETdataUpdateNew] = useState({});

  const handleDeleteNews = async () => {
    try {
      const res = await http.delete("news/deletenews", {
        headers: {
          token: user.token,
        },
        data: item,
      });
      setAllNews(res.data);
    } catch (error) {
      alert("Lỗi vui lòng thử lại Hoặc liên hệ hỗ trợ");
    }
  };

  const handleUpdateNews = async (e) => {
    e.preventDefault();
    try {
      const res = await http.post("news/updatenews", dataUpdateNew);
      setAllNews(res.data);
      setCheckUpdate(!checkupdate);
    } catch (error) {
      alert("Lỗi vui lòng thử lại Hoặc liên hệ hỗ trợ");
    }
  };
  return (
    <div className="ListNews">
      <div className="News">
        <div className="content">
          <div className="left">
            <img src={item.img} alt="img" />
          </div>
          <div className="right">
            <p className="title"> {item.title}</p>
            <p className="author">Tên tác giả : {item.author}</p>
            <p className="p2"> {item.p1}</p>
          </div>
          <div className="btnNews">
            <button
              onClick={() => {
                setCheckUpdate(!checkupdate);
                SETdataUpdateNew(item);
              }}
            >
              {checkupdate ? "Giữ nguyên" : "Sửa bài viết"}
            </button>
            <button onClick={handleDeleteNews}>Xóa bài viết</button>
          </div>
        </div>
        {checkupdate && (
          <form onSubmit={handleUpdateNews}>
            <label>Tên bài viết</label>
            <input
              type="text"
              value={dataUpdateNew.title}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, title: e.target.value })
              }
              placeholder="  Tên bài viết là ..."
            />
            <label>Hình ảnh minh họa</label>
            <input
              type="text"
              value={dataUpdateNew.img}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, img: e.target.value })
              }
              placeholder="  Hình ảnh minh họa ..."
            />
            <label htmlFor="#p1">Nội dung bài viết</label>
            <textarea
              id="p1"
              value={dataUpdateNew.p1}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, p1: e.target.value })
              }
            ></textarea>
            <label htmlFor="#p2">Kết bài</label>
            <textarea
              id="p2"
              value={dataUpdateNew.p2}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, p2: e.target.value })
              }
            ></textarea>
            <label htmlFor="#p2">Tên tác giả</label>
            <input
              type="text"
              value={dataUpdateNew.author}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, author: e.target.value })
              }
              placeholder="  Tên tác giả ..."
            />
            <label htmlFor="#p2">Link sản phẩm</label>
            <input
              type="text"
              value={dataUpdateNew.link}
              onChange={(e) =>
                SETdataUpdateNew({ ...dataUpdateNew, link: e.target.value })
              }
              placeholder="  Link sản phẩm ..."
            />
            <button>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ListNews;
