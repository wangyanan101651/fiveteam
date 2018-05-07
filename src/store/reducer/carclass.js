import {GET_CAR_CLASS,GET_STATE_LIST} from '../actionTypes/carclass'

const initalState = {
  name:'carclass',
  carclass:null
}

const reducer = (state = initalState,action) => {
  switch(action.type){
    case GET_CAR_CLASS:
      return {...state,carclass:action.carclass}
      
    default :
      return state
   }
  }
  export default reducer