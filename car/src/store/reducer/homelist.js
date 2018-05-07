import {GET_LIST} from '../actionTypes/homelist'

const initalState = {
  name:'homelist',
  homelist:null
}

const reducer = (state = initalState,action) => {
  switch(action.type){
    case GET_LIST:
      return {...state,homelist:action.homelist}
    default:
      return state
  }

  }
  export default reducer