import axios from "axios";


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
} catch (error) {
    dispatch({type: "ADD_PIZZAS_FAIL", payload: error})
}
}