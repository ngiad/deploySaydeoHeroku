import React, { useContext } from "react";
import "./AdminProducts.css";
import http from "../../utils/request";
import { AuthContext } from "../../contexts/AuthContext";
import ProductCompunent from "./Product";

const ListProducts = ({ Products,setProduct }) => {
  const { user } = useContext(AuthContext);

  const handleCheckUpdate = async (item) => {
    const CheckUpdateProduct = { ...item, update: !item.update };
    try {
      const res = await http.post("products/update", CheckUpdateProduct);
      setProduct(res.data)
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ");
    }
  };

  const handleDeleteProduct = async (item) => {
    try {
      const res = await http.delete("products/delete", {
        headers: {
          token: user.token,
        },
        data: item,
      });
      setProduct(res.data)
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ");
    }
  };
  return (
    <div className="MainListProductsAdmin">
      <h1>Danh sách sản phẩm</h1>
      <div className="Products">
        {Products.map((item, index) => {
          return (
            <ProductCompunent
              setProduct={setProduct}
              index={index}
              key={index}
              item={item}
              handleCheckUpdate={handleCheckUpdate}
              handleDeleteProduct={handleDeleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListProducts;
