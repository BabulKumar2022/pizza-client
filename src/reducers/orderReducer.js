export const placeOrderReducer =(state={}, action)=>{
    switch(action.type){
        case 'PACE_ORDER_REQUEST' :
            return {
                loading: true
            };
        case 'PACE_ORDER_SUCCESS' :
            return {
                loading: false, success: true
            };
        case 'PACE_ORDER_FAIL' :
            return {
                loading: false, 
                error: action.payload
            };
            default:
                return state;
    }
}
///============================//
export const getUserOrderReducer = (state = {orders: []}, action)=>{

    switch(action.type){
        case 'USER_ORDER_REQUEST' :
            return {
                loading: true,
                ...state,
            };
        case 'USER_ORDER_SUCCESS' :
            return {
                loading: false,
                 success: true,
                 orders: action.payload
            };
        case 'USER_ORDER_FAIL' :
            return {
                loading: false, 
                error: action.payload,
            };
            default:
                return state;
    }
}