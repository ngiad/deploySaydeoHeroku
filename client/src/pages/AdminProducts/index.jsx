import React, { useEffect, useState } from "react";
import http from "../../utils/request";
import "./AdminProducts.css";
import ListProducts from "./ListProducts";

const AdminProducts = () => {
  const [NewProduct, SetNewProduct] = useState({
    title: "",
    price: "",
    img: "",
    describe: "",
    type : ""
  });
  const [Products, setProduct] = useState([]);

  const getDataProducts = async () => {
    try {
      const res = await http.get("products/getall");
      setProduct(res.data);
    } catch (error) {
      alert("Liên hệ hỗ trợ");
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  const createProduct = async (Product) => {
    try {
      const res = await http.post("products/create", Product);
      setProduct(res.data);
      return true;
    } catch (error) {
      alert("Lỗi vui lòng thử lại Hoặc liên hệ hỗ trợ");
      return false;
    }
  };
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    if (createProduct(NewProduct)) {
      SetNewProduct({
        title: "",
        price: "",
        img: "",
        describe: "",
        type : ""
      });
    }
  };

  return (
    <div className="mainAdminProducts">
      <div className="NewProduct">
        <h1>Thêm sản phẩm mới</h1>
        <form onSubmit={handleAddNewProduct}>
        <label htmlFor="#title">Loại sản phẩm</label>
          <input
            type="text"
            value={NewProduct.type}
            onChange={(e) =>
              SetNewProduct({ ...NewProduct, type: e.target.value })
            }
            id="title"
            placeholder="   Nhập tên sản phẩm"
          />
          <label htmlFor="#title">Tên sản phẩm</label>
          <input
            type="text"
            value={NewProduct.title}
            onChange={(e) =>
              SetNewProduct({ ...NewProduct, title: e.target.value })
            }
            id="title"
            placeholder="   Nhập tên sản phẩm"
          />
          <label htmlFor="#price">Giá sản phẩm</label>
          <input
            type="text"
            value={NewProduct.price}
            onChange={(e) =>
              SetNewProduct({ ...NewProduct, price: Number(e.target.value) })
            }
            id="price"
            placeholder="   Nhập Giá sản phẩm"
          />
          <label htmlFor="#img">Ảnh minh họa sản phẩm</label>
          <input
            type="text"
            value={NewProduct.img}
            onChange={(e) =>
              SetNewProduct({ ...NewProduct, img: e.target.value })
            }
            id="img"
            placeholder="   Nhập Ảnh minh họa sản phẩm"
          />
          <label htmlFor="#describe">Mô tả sản phẩm</label>
          <input
            type="text"
            value={NewProduct.describe}
            onChange={(e) =>
              SetNewProduct({ ...NewProduct, describe: e.target.value })
            }
            id="describe"
            placeholder="   Nhập Mô tả sản phẩm"
          />
          <button>Submit</button>
        </form>
      </div>
      <ListProducts setProduct={setProduct} Products={Products}
 />
    </div>
  );
};

export default AdminProducts;
