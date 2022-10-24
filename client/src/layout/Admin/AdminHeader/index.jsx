import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../admin.css"

const AdminHeader = () => {
    const Navigate = useNavigate()
  return (
    <div className='HeaderAdmin'>
        <div className='backStore' onClick={() =>{
            Navigate("/")
        }}>
            Back To Shop
        </div>
        <ul>
            <li><Link to="/admin">TRANG CHỦ</Link></li>
            <li><Link to="/admin/products">SẢN PHẨM</Link></li>
            <li><Link to="/admin/News">NEWS</Link></li>
        </ul>
    </div>
  )
}

export default AdminHeader