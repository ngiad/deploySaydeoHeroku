import React, { useEffect, useState } from 'react'
import './Header.css'
import vi from "../../img/vi.png"
import en from "../../img/en.png"
import logo from "../../img/logo.jpg"
import { AiFillPhone } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../Redux/Slice'

const Header = () => {
  const Dispatch = useDispatch()
  const Navigate = useNavigate()

  const Products =  useSelector((state) => state.Cart)
  const [inputValue,setInputvalue] = useState("")

  const [amount,setAmount] = useState(0)
  // const InputSearch = useSelector((state) => state.Search)
  const HandleSearch = (e)  =>{
    e.preventDefault()
    Dispatch(update(inputValue))
    const result = inputValue.split(' ').join('').toLowerCase()
    Navigate(`/search?title=${result}`)
    setInputvalue("")
  }
  const handleChange = (e) => {
    setInputvalue(e.target.value)
  }

  useEffect(() =>{
    if(Products !== undefined){
      setAmount(Products.reduce((total,product) =>total + product.amount,0))
    }
  },[Products])
  
  return (
    <div>
      <div className="wapNav">
        <div className="left">
          <p><AiFillPhone style={{marginRight: '10px',}} /> 0962673018  <GoLocation style={{marginRight: '10px',marginLeft:"40px"}}/> Dẹ 1 - Văn miếu - Thanh Sơn - Phú thọ</p>
        </div>
        <div className="right">
          <ul>
            <li><Link to="/about">GIỚI THIỆU</Link></li>
            <li><Link to="/contact">LIÊN HỆ</Link></li>
            <li className='vi'><img src={vi} alt="img" /></li>
            <li className='en'><img src={en} alt="img" /></li>
          </ul>
        </div>
      </div>
      <div className="boxNav">
          <img src={logo} alt="img" />
          <form onSubmit={HandleSearch}>
            <input placeholder='   Nhập từ khóa tìm kiếm...' type="text" value={inputValue}  onChange={handleChange}/>
            <button><BsSearch /></button>
          </form>
          <div className='DivbtnCart'>
            {amount === 0 ? null : <span className='amountCart'>{amount}</span>}
            <button className='btnCart' onClick={() => Navigate("cart")}><BsFillCartCheckFill/>   Giỏ Hàng</button>
          </div>
      </div>
      <div className="wapMenu">
        <ul>
          <li>
            <Link to="/">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/about">GIỚI THIỆU</Link>
          </li>
          <li>
            <Link to="/products">SẢN PHẨM</Link>
          </li>
          <li>
            <Link to="/guide">HƯỚNG DẪN MUA HÀNG</Link>
          </li>
          <li>
            <Link to="news">TIN TỨC</Link>
          </li>
          <li>
            <Link to="contact">LIÊN HỆ</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header