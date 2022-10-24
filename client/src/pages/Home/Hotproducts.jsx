import React, { useEffect, useState } from 'react'
import "./Home.css"
import http from "../../utils/request";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateType } from '../../Redux/getProductType';

const Hotproducts = () => {
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const [products,setProducs] = useState([])
 
    const getDataProductLimit = async() =>{
        try {
            const res = await http.get(`products/limit?limit=${6}`)
            setProducs(res.data)
        } catch (error) {
            toast.warning("Lỗi")
        }
    }

    useEffect(() => {
        getDataProductLimit()
    },[])
    
    const clickProductHome = (id) =>{
        Navigate(`/products/${id}`)
    }

    const getDataType = (type) =>{
        Dispatch(updateType(type))
        Navigate("/products")
      }
  return (
    <div className='HotproductsHome'>
        <div className="navHotproductsHome">
            <button>SẢN PHẨM HOT</button>
            <ul>
                <li onClick={() => getDataType("trái cây sấy dẻo")}>TRÁI CÂY SẤY DẺO</li>
                <li onClick={() => getDataType("trái cây sấy khô")}>TRÁI CÂY SẤY KHÔ</li>
                <li onClick={() => getDataType("hạt dinh dưỡng")}>HẠT DINH DƯỠNG</li>
                <li onClick={() => getDataType("nho sấy khô")}>NHO SẤY KHÔ</li>
                <li onClick={() => getDataType("")}>+ Xem tất cả</li>
            </ul>
        </div>
        <div class="grid-container">
            {
                products.map((product,index) => {
                    return <div onClick={() => clickProductHome(product._id) } key={index} class="grid-item">
                                <img src={product.img} alt="gungsaydeo" />
                                <p className='titleProduct'>{product.title}</p>
                                <p className='cordProduc'>{product.price} đ</p>    
                            </div>
                })
            }  
        </div>
    </div>
  )
}

export default Hotproducts