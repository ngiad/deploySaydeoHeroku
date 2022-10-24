import React from 'react'
import HotList from '../../Components/HotList'
import NavNavigate from '../../Components/NavNavigate'
import daychuyensanxuat from "../../img/daychuyensanxuat.jpg"
import daychuyensanxuat2 from "../../img/daychuyensanxuat2.jpg"
import "./style.css"

const About = () => {
  return (
    <div className='PageAbout'>
      <NavNavigate title="Giới thiệu" link="/about"/>
      <div className="contenerAbout">
        <div className="left">
          <h1>GIỚI THIỆU</h1>
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. At, nam dicta! Quidem, mollitia iusto quis excepturi reprehenderit repudiandae earum nemo accusamus necessitatibus, 
            quae soluta enim aliquid, praesentium minima itaque cupiditate?
          </p>

          <div className="imgDaychuyensanxuat">
            <img src={daychuyensanxuat} alt="daychuyensanxuat" />
            <span>Hoàn thiện đóng gói sản phẩm</span>
          </div>
          <div className="imgDaychuyensanxuat">
            <img src={daychuyensanxuat2} alt="daychuyensanxuat2" />
            <span>Hoàn thiện đóng gói sấy dẻo sản phẩm</span>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Animi mollitia quis omnis ex,
             tempore commodi repellat consequatur cum laboriosam
              ratione praesentium fugit error. Consequuntur voluptates
               possimus ullam a magnam quaerat!
          </p>
        </div>
        <div className="right">
          <HotList />
        </div>
      </div>
    </div>
  )
}

export default About