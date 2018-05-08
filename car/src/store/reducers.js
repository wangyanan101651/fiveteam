import {
    combineReducers
} from 'redux'
import mock from '../mock'
mock()
export const GET_DATA = 'GET_DATA'
export const GET_UP_DATA = 'GET_UP_DATA'
export const GET_CAR_DATA = 'GET_CAR_DATA'
let initState = {
    get_data: [],
    get_arr:[],
    get_up_data:[]
}

function cart_list(state = initState,action) {
    switch (action.type) {
        case GET_DATA:
                 return {...state, data: action.data,arrData:action.data.get_arr}           
                // return action.data
            break;
        case GET_UP_DATA:
                 //return {data:action.data.get_updata}           
                 return {...state,data:action.data}
            break;
        case GET_CAR_DATA:
                 //return {data:action.data.get_updata}           
                 return {...state,data:action.data}
            break;
        default:
            return state
    }
    return state
}
export default combineReducers({
     get_data:cart_list
})