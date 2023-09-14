import React from "react"
import { useSelector,useDispatch } from "react-redux"
import { BUY_CAKE } from "../Redux/Cake/ActionType"
export const HookCakeContainer =()=>{
   const cakes = useSelector(state=>state.noOfCake)
  const dispatch = useDispatch()
    return(
    <>
        <div>Number of cakes -{cakes}</div>
        {/* <button onClick={()=>dispatch(buycake())}>buycake</button> */}
        </>
    )
}