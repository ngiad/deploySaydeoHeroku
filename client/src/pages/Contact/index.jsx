import React, { useState } from 'react'
import HotList from '../../Components/HotList'
import NavNavigate from '../../Components/NavNavigate'
import "./Contact.css"
import http from "../../utils/request";
import { toast } from 'react-toastify';

const Contact = () => {
  const [MESSENGE,setMESSENGE] = useState({
    name:"",
    phone:"",
    email:"",
    messenge:""
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await http.post("contact/sendmessenge",MESSENGE)
      if(res.data){
        toast.success("Gửi thành công")
        setMESSENGE({
          name:"",
          phone:"",
          email:"",
          messenge:""
        })
      }
    } catch (error) {
      toast.warning("Đã sẩy ra lỗi")
    }
  }
  
  return (
    <div className='mainContact'>
       <div className='NavNavigate'><NavNavigate title={"Liên hệ"} link={"/contact"}/></div>
       <div className="contener">
        <div className="left">
         <h1>Liên hệ</h1> 
         <p>CONG TY TNHH THUC PHAM P&T VIET NAM</p>
         <p>Địa chi: D1/8 Khu A cum 591 Liên Ninh - Thanh Tri - Hä Nội ( Canh KCN NgOc Hoi )</p>
         <p>Hotline: 0962673018</p>
        <h2>Liên hệ với chúng tôi</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={MESSENGE.name} onChange={(e) =>setMESSENGE({...MESSENGE,name : e.target.value })} placeholder='Họ và tên của bạn '/>
          <input type="text" value={MESSENGE.phone} onChange={(e) =>setMESSENGE({...MESSENGE,phone : e.target.value })} placeholder='Số điện thoại của bạn' />
          <input type="email" value={MESSENGE.email} onChange={(e) =>setMESSENGE({...MESSENGE,email : e.target.value })} placeholder='Email liên hệ '/>
          <input type="text" value={MESSENGE.messenge} onChange={(e) =>setMESSENGE({...MESSENGE,messenge : e.target.value })} placeholder='Nội dung tin nhắn hoặc phản hồi của bạn' />
          <button>SEND MESSENGE</button>
        </form>
        </div>
        <div className="right">
          <HotList/>
        </div>
       </div>
    </div>
  )
}

export default Contact