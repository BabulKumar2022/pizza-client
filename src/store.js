import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer, loginUserReducer } from './reducers/userReducer'
import {placeOrderReducer, getUserOrderReducer} from './reducers/orderReducer'



const currentUser = localStorage.getItem('currentUser') 
? JSON.parse(localStorage.getItem('currentUser')) : null
const rooReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
   cartReducer: cartReducer,
   registerUserReducer : registerUserReducer,
   loginUserReducer : loginUserReducer,
   placeOrderReducer : placeOrderReducer,
   getUserOrderReducer : getUserOrderReducer,

});


const cartItems = localStorage.getItem('cartItems')
 ? JSON.parse(localStorage.getItem('cartItems')) : []
 
const initialState = {
    cartReducer :{
        cartItems:  cartItems,
    },
    loginUserReducer: {
        currentUser : currentUser,
    }
}
const middleware = [thunk]


const store = createStore(rooReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;