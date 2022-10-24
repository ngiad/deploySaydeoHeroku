import "./Home.css"
import React from 'react'
import slider from "../../img/slidertop.jpg"
import camsaydeo from "../../img/camsaydeo.jpg"
import thapcamsay from "../../img/thapcamsay.jpg"
import hathanhnhan from "../../img/hathanhnhan.jpg"
import Hotproducts from "./Hotproducts";
import News from "./News";
import HotList from "../../Components/HotList";

const Home = () => {
  return (
    <div>
      <div className="wapSlider">
        <div className="top">
          <div className="left">
            <HotList />
          </div>
          <div className="right">
            <img src={slider} alt="img" />
          </div>
        </div>
      </div>
      <div className="itemdv">
        <img src={camsaydeo} alt="camsaydeo" />
        <img src={thapcamsay} alt="camsaydeo" />
        <img src={hathanhnhan} alt="camsaydeo" />
      </div>
      <Hotproducts />
      <News />
    </div>
  )
}

export default Home