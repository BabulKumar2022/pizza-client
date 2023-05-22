import axios from "axios";




export const placeOrder =(token, subTotal)=> async(dispatch,getState)=>{
    dispatch({type: "PLACE_ ORDER_REQUEST"});
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().cartReducer.cartItems
    try {
        const res = await axios.post("http://localhost:8000/api/orders/placeOrder",{token, subTotal, currentUser, cartItems});
        console.log(res)
        dispatch({type: "PLACE_ ORDER_SUCCESS"});
    } catch (error) {
        dispatch({type: "PLACE_ ORDER_FAIL"})
        console.log(error)
    }
}

//================//get User Order Action Function=================
export const getUserOrders = () => async(dispatch, getState)=>{
    const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type: 'USER_ORDER_REQUEST'
    })
    try {
        const response = await axios.post('http://localhost:8000/api/orders/getUserOrder',
        {userId: currentUser._id}
        )
        // console.log(response)
        dispatch({type: 'USER_ORDER_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'USER_ORDER_FAIL', payload: error});
    }
}
//================//get All Order Action Function=================
 
export const getAllOrders = () => async(dispatch, getState)=>{
    // const currentUser = getState().loginUserReducer.currentUser;
    dispatch({
        type: 'All_ORDER_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:8000/api/orders/allUserOrder' )
        // console.log(response)
        dispatch({type: 'All_ORDER_SUCCESS', payload: response.data});
    } catch (error) {
        dispatch({type: 'All_ORDER_FAIL', payload: error});
    }
}