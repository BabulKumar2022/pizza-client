import axios from "axios";
import swal from 'sweetalert';


export const getAllPizzas = () => async (dispatch) =>{
    dispatch({type: "GET_PIZZAS_REQUEST"});
try {
    const res = await axios.get("http://localhost:8000/api/pizzas/getAllPizzas");
    console.log(res)
    dispatch({type: "GET_PIZZAS_SUCCESS", payload: res.data});
} catch (error) {
    dispatch({type: "GET_PIZZAS_FAIL", payload: error})
}
}


//============================//

export const addPizza = (pizza) => async (dispatch) =>{
    dispatch({type: "ADD_PIZZAS_REQUEST"});
try {
    const res = await axios.post("http://localhost:8000/api/pizzas/addPizza",{pizza});
    console.log(res)
    dispatch({type: "ADD_PIZZAS_SUCCESS", payload: res.data});
    window.location.href = "/admin/pizzaList"
} catch (error) {
    dispatch({type: "ADD_PIZZAS_FAIL", payload: error})
}
}
//============================//

export const getPizzaById = (pizzaId) => async (dispatch) =>{
    dispatch({type: "GET_PIZZAS_REQUEST"});
try {
    const res = await axios.post("http://localhost:8000/api/pizzas/getPizzaById",{pizzaId});
    console.log(res)
    dispatch({type: "GET_PIZZAS_SUCCESS", payload: res.data});
} catch (error) {
    dispatch({type: "GET_PIZZAS_FAIL", payload: error})
}
}
//============================//

export const updatePizza= (updatePizza) => async (dispatch) =>{
    dispatch({type: "UPDATE_PIZZAS_REQUEST"});
try {
    const res = await axios.post("http://localhost:8000/api/pizzas/updatePizza",{updatePizza});
    console.log(res)
    dispatch({type: "UPDATE_PIZZAS_SUCCESS", payload: res.data});
    window.location.href = "/admin/pizzaList"
} catch (error) {
    dispatch({type: "UPDATE_PIZZAS_FAIL", payload: error})
}
}

//============delete=============
export const deletePizza =  (pizzaId)=> async (dispatch) =>{
    try {
        const res = await axios.post('http://localhost:8000/api/pizzas/deletePizza', {pizzaId})
        swal("pizza deleted success", "success")
        window.location.href = "/admin/pizzaList"
        console.log(res)
    } catch (error) {
        swal("Error while deleting Pizza")
    }
}