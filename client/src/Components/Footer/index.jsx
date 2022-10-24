import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const Navigate = useNavigate()
  return (
    <div className='Footer'>
        <div class="grid-container">
          <div class="grid-item">
            <h2>VỀ CHÚNG TÔI</h2>
            <ul className='listCf'>
              <li>CÔNG TY TNHH THỰC PHẨM P$T VIỆT NAM</li>
              <li>ĐỊA CHỈ : D1/8 Khu A cụm 591 Liên Ninh - Thanh Trì - Hà Nội (Cạnh KCN Ngọc hồi)</li>
              <li>Email : devwebdainghia@gmail.com</li>
              <li>Mã số doanh nghiệp : 0107821792 Do sở kế hoạt và đầu tư Hà Nội cấp ngày 25/4/2017</li>
              <li>Hotline : 0962673018</li>
            </ul>
          </div>
          <div class="grid-item">
            <h2>CHÍNH SÁCH HỖ TRỢ</h2>
            <ul onClick={()=> Navigate("/guide")} className='ListCt_2'>
              <li>Chính sách thanh toán</li>
              <li>Chính sánh vận chuyển</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách đổi trả</li>
            </ul>
          </div>
          <div class="grid-item">
              <h2>LIÊN HỆ</h2>
              <ul className='contact'>
                <li><AiFillPhone /> : 0962673018</li>
                <li><BsFacebook /> : <a  target="_blank" rel="noreferrer"  href='https://www.facebook.com/traicaysaydeovietnam/'>Thế giới Trái cây sấy dẻo</a> </li>
              </ul>
          </div>  
        </div>
    </div>
  )
}

export default Footer