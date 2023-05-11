import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllPizzaReducer } from './reducers/pizzaReducer'
import { cartReducer } from './reducers/cartReducer'


const rooReducer = combineReducers({
    getAllPizzaReducer: getAllPizzaReducer,
   cartReducer: cartReducer,
});


const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cartReducer :{
        cartItems:  cartItems,
    }
}
const middleware = [thunk]


const store = createStore(rooReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;