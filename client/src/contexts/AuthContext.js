import { createContext, useState } from "react"


export const AuthContext = createContext()


const AuthProvider = ({children}) =>{
    const [LoginSuccect,setLoginSuccect] = useState(false)
    const [user,setUser] = useState({
        token : ""
    })
    const login = user =>{
        setUser(user)
    }
    const setLogin = () =>{
        setLoginSuccect(!LoginSuccect)
    }
    const data = {
        user,
        login,
        LoginSuccect,
        setLogin
    }
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}

export default AuthProvider