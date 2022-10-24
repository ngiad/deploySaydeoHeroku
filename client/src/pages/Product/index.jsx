import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import NavNavigate from "../../Components/NavNavigate";
import { AddProduct } from "../../Redux/CartSlice";
import http from "../../utils/request";
import News from "../Home/News";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const DisPatch = useDispatch();
  const [DataProduct, getDataProduct] = useState({});
  const getDataProductFunction = async () => {
    try {
      const res = await http.get("products/search/" + id);
      getDataProduct(res.data);
    } catch (error) {
      toast.warning("Đã sẩy ra lỗi vui long liên hệ hỗ trợ")
    }
  };
  const AddProductToCart = () => {
    DisPatch(AddProduct({ ...DataProduct, amount: 1,priceByQuantity : DataProduct.price }));
    toast.success("Đã thêm sản phẩm")
  };
  useEffect(() => {
    getDataProductFunction();
  }, []);
  return (
    <div>
      <div className="NavNavigate">
        <NavNavigate title={"Sản phẩm"} link={"/products"} />
      </div>
      <div className="contenerProduct">
        <img src={DataProduct.img} alt="itemimage" />
        <div>
          <h3>{DataProduct.title}</h3>
          <p className="CountBuy">Lượt mua : {DataProduct.buyCount}</p>
          <p>{DataProduct.price} đ</p>
          <span>
            {DataProduct.describe}
          </span>
          <button onClick={AddProductToCart}>Thêm vào giỏ</button>
        </div>
      </div>
      <News />
    </div>
  );
};

export default Product;
