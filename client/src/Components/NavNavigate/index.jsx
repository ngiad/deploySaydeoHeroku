import React from 'react'
import { Link } from 'react-router-dom'
import { FiLink } from 'react-icons/fi';
import "./style.css"

const NavNavigate = ({title,link}) => {
  return (
    <div className="back">
      <ul>
          <li><FiLink/> <Link to="/">Trang chủ</Link></li>
          <li><Link to={link}> {title}</Link></li>
      </ul>
    </div>
  )
}

export default NavNavigate