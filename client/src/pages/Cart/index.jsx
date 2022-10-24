import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import NavNavigate from '../../Components/NavNavigate'
import "./Cart.css"
import ProductCart from './ProductCart'
import TableOder from './TableOder'

const Cart = () => {
  const CartProduct = useSelector((state) => state.Cart)

  const [checkOder,setCheckOder] = useState(false)


  const handleOderCheck =() =>{
    setCheckOder(!checkOder)
  }
  const handleOder = () => {
      toast.success("Đặt hàng thành công")
  }
  return (
    <div className='cart'>
      <div className='NavNavigate'><NavNavigate title={"Giỏ hàng"} link={"/cart"}/></div>
      <div className='ContenerCart'>
        <h1>Giỏ hàng</h1>
        <div className="contentCart">
          <table id="customers">
              <tr>
                  <th>STT</th>
                  <th>Sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
              </tr>
                {
                  CartProduct.map((product,index) =>{
                    return <ProductCart key={index} product={product} STT={index + 1} />
                  })
                }
          </table>
        </div>
        <div className='pay'>
            <h2>Tổng giá : <span> {CartProduct.reduce((total,product)=>total + product.priceByQuantity ,0)} đ</span></h2>
            <button onClick={() => setCheckOder(!checkOder)}>Đặt hàng</button>
        </div>
      </div>
      {
        checkOder && <TableOder handleOder={handleOder} CartProduct={CartProduct} handleOderCheck={handleOderCheck}  />
      }
    </div>
  )
}

export default Cart