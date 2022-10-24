import React, { useEffect, useState } from "react";
import "./AdminHomePage.css";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
  Tooltip,
} from "recharts";
import http from "../../utils/request";

const AdminHomePage = () => {
  const [data, setData] = useState({
    Oder: [],
    Products: [],
    News: [],
  });

  const getDataOder = async (url) => {
    try {
      const res = await http.get(url);
      setData((prev) => {
        return { ...prev, Oder: res.data };
      });
    } catch (error) {
      alert("Đã sẩy ra lỗi");
    }
  };

  const getDataProducts = async (url) => {
    try {
      const res = await http.get(url);
      setData((prev) => {
        return { ...prev, Products: res.data };
      });
    } catch (error) {
      alert("Đã sẩy ra lỗi");
    }
  };

  const getDataNews = async (url) => {
    try {
      const res = await http.get(url);
      setData((prev) => {
        return { ...prev, News: res.data };
      });
    } catch (error) {
      alert("Đã sẩy ra lỗi");
    }
  };

  useEffect(() => {
    getDataOder("oder/getalloder");
    getDataProducts("products/getall");
    getDataNews("news/getnews");
  }, []);
  console.log(
    "tổng số tiền",
    data.Oder.reduce(
      (total, item) =>
        total +
        item.buy.reduce((total, num) => total + num.price * num.amount, 0),
      0
    )
  );
  return (
    <div className="AdminHome">
      <h1>Thống kê</h1>
      <div className="Oder">
        <h2>Đơn hàng</h2>
        <div className="conent">
          <ResponsiveContainer width={"100%"} aspect={3}>
            <LineChart
              margin={{ top: 24, bottom: 24 }}
              height={300}
              data={data.Oder.map((item) => {
                return {
                  name: item.name,
                  Oder: item.buy.reduce((total, num) => total + num.amount, 0),
                  buy: item.buy.reduce(
                    (total, num) => total + num.price * num.amount,
                    0
                  ),
                };
              })}
            >
              <XAxis interval={"preserveStartEnd"} dataKey="name" />
              <YAxis />
              <Legend />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line dataKey={"Oder"} activeDot={{ r: 8 }} />
              <Line dataKey={"buy"} activeDot={{ r: 8 }} stroke="red" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="products">
        <h2>Sản phẩm</h2>
        <div className="conent">
          <ResponsiveContainer width={"100%"} aspect={3}>
            <BarChart
              margin={{ top: 24, bottom: 24 }}
              data={data.Products.map((item) => {
                return {
                  name: item.title,
                  buyCount: item.buyCount,
                };
              })}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="buyCount" barSize={30} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="news">
        <h2>Lượt xem tin tức</h2>
        <div className="conent">
          <ResponsiveContainer width={"100%"} aspect={3}>
            <LineChart
              margin={{ top: 24, bottom: 24 }}
              height={300}
              data={data.News.map((item) => {
                return {
                  name: item.author,
                  view: item.view,
                };
              })}
            >
              <XAxis interval={"preserveStartEnd"} dataKey="name" />
              <YAxis />
              <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
              <Tooltip />
              <Line type="monotone" dataKey={"view"} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
