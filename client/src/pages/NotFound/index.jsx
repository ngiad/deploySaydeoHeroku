import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const Navigate = useNavigate()
  return (
    <div style={{textAlign : "center",fontSize : "50px"}}>NotFound 404

        <div style={{color : "red" ,cursor:"pointer",textAlign:"justify",margin:"24px"}} onClick={() =>{
            Navigate("/")
        }}>Back Click Here hihi dev hơi lười tí thông cảm hè hè cứ ấn vào dòng chữ này nhé :3 Màu đỏ đẹp hơn r =)) còn phải sửa cả hình con chuột nữa ạ mệt vcl </div>
    </div>
  )
}

export default NotFound