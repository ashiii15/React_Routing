
import { BUY_CAKE } from "./ActionType"
const initialState ={
    noOfcakes :10
}
const CakeReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return{...state,
                noOfcakes :state.noOfcakes -1
            }
            default :
            return state
    }
}
export default CakeReducer