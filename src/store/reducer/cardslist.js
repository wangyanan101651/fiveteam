import {GET_CARDS_LIST} from '../actionTypes/cardslist'

const initalState = {
  name:'cardslist',
  cardslist:null
}

const reducer = (state = initalState,action) => {
  switch(action.type){
    case GET_CARDS_LIST:
    return {...state,cardslist:action.cardslist}
    default :
      return state
      
   }
}
  export default reducer