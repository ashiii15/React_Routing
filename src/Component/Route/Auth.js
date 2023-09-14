import { createContext, useContext, useState } from "react";
const AuthContex =createContext(null)
export const AuthProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const login =(user)=>{
        setUser(user)
    }
    const logOut = ()=>{
        setUser(null)
    }
    return (
        <AuthContex.Provider value={{user,login,logOut}}>{children}</AuthContex.Provider>
    )

}
export const useAuth = ()=>{
    return useContext(AuthContex)
}