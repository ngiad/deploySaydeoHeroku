import React from 'react'

const ListProductsTable = ({CartProduct}) => {
  return (
    <div className='ListProductCartOder'>
        {
            CartProduct.map((item,index) => {
                return <div key={index}>
                    <div className='itemCardOder'>
                        <img src={item.img} alt="ảnh sản phẩm" />
                        <h4>{item.title}</h4>
                        <p>Số lượng : {item.amount}</p>
                        <p className='price'>Giá {item.price} đ</p>
                    </div>
                </div>
            })
        }
    </div>
  )
}

export default ListProductsTable