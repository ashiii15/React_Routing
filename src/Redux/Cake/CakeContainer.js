import React from "react";
import { buyCake } from "./CakeAction";
import { connect } from "react-redux";
export const CakeContainer =(props)=>{
    return(
        <>
        <h2>CakeContainer {props.noOfcakes}</h2>
        <button onClick={props.buyCake}>click</button>
        </>
    )
}

const mapStateToProps = (state)=>{
    return{
        noOfcakes :state.noOfcakes

    }

}
const MapDisPatchToProps =(dispatch)=>{
    return{
    buyCake :()=>dispatch(buyCake())
}

}
export default connect(mapStateToProps,MapDisPatchToProps)(CakeContainer)