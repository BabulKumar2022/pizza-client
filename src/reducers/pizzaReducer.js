export const getAllPizzaReducer = (state = {pizzas: []}, action) =>{
    switch (action.type){
        case "GET_PIZZAS_REQUEST":
            return{
                ...state,
                loading: true,
            };
            case "GET_PIZZAS_SUCCESS":
                return{
                    pizzas: action.payload,
                    loading: false,
                };
                case "GET_PIZZAS_FAIL":
                    return{
                        error: action.payload,
                        loading: false,
                    };
                    default:
                        return state;
    }
};

//===============================//

export const addPizzaReducer = (state = {}, action) =>{
    switch (action.type){
        case "Add_PIZZAS_REQUEST":
            return{
                ...state,
                loading: true,
            };
            case "Add_PIZZAS_SUCCESS":
                return{
                    success: true,
                    loading: false,
                };
                case "Add_PIZZAS_FAIL":
                    return{
                        error: action.payload,
                        loading: false,
                    };
                    default:
                        return state;
    }
};
//=============GetPizzaById==================//

export const getPizzaByIdReducer = (state = {}, action) =>{
    switch (action.type){
        case "GET_PIZZAS_REQUEST":
            return{
                ...state,
                loading: true,
            };
            case "GET_PIZZAS_SUCCESS":
                return{
                    pizza: action.payload,
                    loading: false,
                };
                case "GET_PIZZAS_FAIL":
                    return{
                        error: action.payload,
                        loading: false,
                    };
                    default:
                        return state;
    }
};
//=============updatePizza==================//

export const updatePizzaByIdReducer = (state = {}, action) =>{
    switch (action.type){
        case "UPDATE_PIZZAS_REQUEST":
            return{
                ...state,
                updateLoading: true,
            };
            case "UPDATE_PIZZAS_SUCCESS":
                return{
                    updateSuccess: true,
                    updateLoading: false,
                };
                case "UPDATE_PIZZAS_FAIL":
                    return{
                        updateError: action.payload,
                        updateLoading: false,
                    };
                    default:
                        return state;
    }
};