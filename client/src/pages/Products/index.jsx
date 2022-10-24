import React, { useEffect, useState } from 'react'
import http from "../../utils/request";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import HotList from '../../Components/HotList'
import NavNavigate from '../../Components/NavNavigate'
import "./Products.css"
import { useSelector } from 'react-redux';

const Products = () => {
    const Navigate = useNavigate()
    const Type = useSelector((state) => state.getProducType)

    const [DataProducts,getDataProducts] = useState([])


    const getDataProductsFunction = async() =>{
        try {
            const res = await http.get("products/getall")
            const dataProducts = res.data
            getDataProducts(dataProducts)
        } catch (error) {
            toast.warning("Hộ thống đang bảo trì")
        }
    }

    const getDataTypeProducts = async(type) =>{
        try {
            const res = await http.get(`products/type/${type}`)
            getDataProducts(res.data)
        } catch (error) {
            toast.warning("Hộ thống đang bảo trì")
        }
    }   

    useEffect(() =>{
        if(!Type){
            getDataProductsFunction()
        }else{
            getDataTypeProducts(Type)
        }
    },[Type])
  return (
    <div className='Products'>
            <NavNavigate title="Sản phẩm" link="/products"/>
            <div className="contener">
                <div className='grid-container'>
                    { DataProducts.map((item,index) =>{
                            return <div onClick={()=>{
                                Navigate(`/products/${item._id}`)
                            }} key={index} class="grid-item">
                                    <img src={item.img} alt="itemimage" />
                                    <p className='TitleProduct'>{item.title}</p>
                                    <p className='price'>{item.price}đ</p>
                            </div>
                        })
                    }
                </div>
                <div className="right">
                    <HotList />
                </div>
        </div>
    </div>
  )
}

export default Products