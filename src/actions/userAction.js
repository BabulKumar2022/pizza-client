import axios from "axios";




export const registerUser =(user)=> async (dispatch)=>{
    dispatch({type: 'USER_REGISTER_REQUEST'})
        try {
            const res = await axios.post('http://localhost:8000/api/users/register', user)
            dispatch({type: 'USER_REGISTER_SUCCESS', payload: res.data})
        } catch (error) {
            dispatch({type: 'USER_REGISTER_FAIL', payload:error})
        }
}

///=======================///
export const loginUser = (user)=> async(dispatch)=>{
    dispatch({type: 'USER_LOGIN_REQUEST'})
    try {
        const response= await axios.post('http://localhost:8000/api/users/login', user)
        console.log(response)
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: response.data})
        localStorage.setItem('currentUser', JSON.stringify(response.data))
        window.location.href= '/'

    } catch (error) {
        dispatch({type: 'USER_LOGIN_FAILED', payload: error})
    }
}

//////////=====================logout============/////////////////
export const logoutUser = ()=> (dispatch) =>{
    localStorage.removeItem('currentUser')
    window.location.href = '/login'
}






//============get all users==========
export const getAllUsers = () => async (dispatch) =>{
    dispatch({type: "GET_USERS_REQUEST"});
try {
    const res = await axios.get("http://localhost:8000/api/users/getAllUsers");
    // console.log(res)
    dispatch({type: "GET_USERS_SUCCESS", payload: res.data});
} catch (error) {
    dispatch({type: "GET_USERS_FAIL", payload: error})
}
}