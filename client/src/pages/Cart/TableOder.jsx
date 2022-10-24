import React, { useState } from 'react'
import { toast } from 'react-toastify'
import http from '../../utils/request'
import ListProductsTable from './ListProductsTable'

const TableOder = ({CartProduct,handleOderCheck,handleOder}) => {

    const [SelectPayInput,setSelectPayInput] = useState("")
    const [valueInputOder,setValueInputOder]  = useState({
        name : "",
        phone : "",
        email : "",
        buy : CartProduct,
        messenger : "",
        SelectPay :"",
        address :""
    })
    async function SelectPay (e){
        e.preventDefault()
        try {
            const res = await http.post("oder/createoder",{...valueInputOder,SelectPay : SelectPayInput})
            if(res.data.success){
                handleOder()
                setValueInputOder({
                    name : "",
                    phone : "",
                    email : "",
                    buy : CartProduct,
                    messenger : "",
                    SelectPay :"", 
                    address :""
                })
                handleOderCheck()
            }
        } catch (error) {
            toast.error("Lỗi")
        }
    }
    
  return (
    <div className='TableOder'>
        <h1>Điền thông tin người mua</h1>
        <div className='Contener'>
            <div className="left">
                <form>
                    <label htmlFor="">Tên Người mua</label>
                    <input type="text" value={valueInputOder.name} onChange={(e) => setValueInputOder({...valueInputOder,name:e.target.value})} placeholder=' Tên Người mua' />
                    <label htmlFor="">Số điện thoại Người mua</label>
                    <input type="text" value={valueInputOder.phone} onChange={(e) => setValueInputOder({...valueInputOder,phone:e.target.value})}  placeholder=' Số điện thoại Người mua'  />
                    <label htmlFor="">Email Người mua</label>
                    <input type="email" value={valueInputOder.email} onChange={(e) => setValueInputOder({...valueInputOder,email:e.target.value})}  placeholder=' Email Người mua'/>
                    <label htmlFor="">Địa chỉ nhận hàng</label>
                    <input type="text" value={valueInputOder.address} onChange={(e) => setValueInputOder({...valueInputOder,address:e.target.value})}  placeholder=' Địa chỉ nhận hàng'/> 
                    <label htmlFor="">Lời nhắn</label>
                    <input type="text" value={valueInputOder.messenger} onChange={(e) => setValueInputOder({...valueInputOder,messenger:e.target.value})}  placeholder=' Lời nhắn'/> 
                </form>
            </div>
            <div className='right'>
                <h3>Phương thức thanh toán</h3>
                <form className='SelectPay' onSubmit={SelectPay}>
                    <label htmlFor="#cod">Thanh toán khi nhận hàng</label>
                    <input type="radio" onChange={(e) =>setSelectPayInput(e.target.value)} value="cod" name="cod" id="cod" />
                    <label htmlFor="#bank">Internet Banking </label>
                    <input type="radio" onChange={(e) =>setSelectPayInput(e.target.value)} value="bank" name="cod" id="bank" />
                    <button className='btnPay'>Thanh toán</button>
                </form>
            </div>
        </div>
        <ListProductsTable CartProduct={CartProduct} />
        <button className='Xoder' onClick={handleOderCheck}>X</button>
    </div>
  )
}

export default TableOder