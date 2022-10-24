import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductSearch = ({item}) => {
  const Navigate = useNavigate()
  const handleClickProduct = () => {
    Navigate(`/products/${item._id}`)
  }
  return (
    <div onClick={handleClickProduct} className='ProductSearch'>
      <img src={item.img} alt="img" />
      <div className='titleSearch'>
        <h3>{item.title}</h3>
        <p>{item.price} đ</p>
        <span>{item.describe}</span>
      </div>
    </div>
  )
}

export default ProductSearch