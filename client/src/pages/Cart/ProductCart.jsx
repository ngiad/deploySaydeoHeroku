import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { RemoveProduct, UpdateProduct } from "../../Redux/CartSlice";
import "./Cart.css";

const ProductCart = ({ product, STT }) => {
  const Dispatch = useDispatch();

  const ChangeAmount = (e) => {
    Dispatch(UpdateProduct({ ...product, amount: +e.target.value }));
  };

  const handleDeleteProductCard = () => {
    Dispatch(RemoveProduct(product));
    toast.success("Xóa sản phẩm");
  };
  return (
    <tr className="contentTable">
      <td>{STT}</td>
      <td className="tableImg">
        <img src={product.img} alt="product" />
      </td>
      <td className="titleProduct">{product.title}</td>
      <td>
        <input
          className="Amount"
          onChange={ChangeAmount}
          type="number"
          value={product.amount}
        />
      </td>
      <td className="priceByQuantity">
        {product.priceByQuantity} đ{" "}
        <button onClick={handleDeleteProductCard} className="deletabtnCart">
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductCart;
