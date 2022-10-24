import React, { useState } from 'react'
import NavNavigate from '../../Components/NavNavigate'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import http from '../../utils/request';
import News from '../Home/News';
import "./Search.css"
import ProductSearch from './ProductSearch';
import { toast } from 'react-toastify';



const Search = () => {
  const Search = useSelector((state => state.Search))
  const [ProducSearch,setProducSearch] = useState([])
  const getDataSearch = async(search) =>{
    try {
      const res = await http.get(`products/search?title=`+search)
      setProducSearch(res.data);
    } catch (error) {
      toast.warning(error)
    }
  }
  useEffect(() =>{
    getDataSearch(Search) 
  },[Search])
  return (
    <div className='Search'>
        <div className='NavNavigate'><NavNavigate title={"Search"} link={"/search"}/></div>
        <div className="products">
          {
            ProducSearch.length === 0 
            ? <h1 className='nullProduct'>Không có sản phẩm bạn đang tìm kiếm !</h1> 
            : ProducSearch.map((item,index) =>{
              return <ProductSearch key={index} item={item}/>
            })
          }
        </div>
        <div className='news'>
          <News />
        </div>
    </div>
  )
}

export default Search