import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { AuthContext } from '../../contexts/AuthContext'
import http from '../../utils/request'
import "./Login.css"

const LoginAdmin = () => {
  const Navigate = useNavigate()

  const { login,setLogin } = useContext(AuthContext)


  const [user,setUser] = useState({
    username : "",
    passwork : ""
  })
  const handleChange =  E =>{
    setUser(p =>{
      return {...p,[E.target.id] : E.target.value}
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault()
    if(!user.username || !user.passwork){
      toast.warning("Nhập đầy đủ thông tin !")
      return
    }
    try {
      const res = await http.post("login",user)
      login({token : res.data.token});
      setLogin()
      toast.success("Login thành công")
      Navigate("/admin")
    } catch (error) {
      toast.warning("server disconnect ...")
    }
  }


  return (
    <div className='MainLogin'>
    <ToastContainer/>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} placeholder="   User Name" type="text" id='username' />
          <input onChange={handleChange} type="password" placeholder='   User Password' id='passwork' />
          <button>Login</button>
        </form>
        <button onClick={() => Navigate(-1)}>Back</button>
      </div>
    </div>
  )
}

export default LoginAdmin