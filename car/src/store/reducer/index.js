import {combineReducers} from 'redux'
import home from './home'
import buycar from './buycar'
import sellcar from './sellcar'
import mine from './mine'
import homelist from './homelist'
import cardslist from './cardslist'

const rotRouter = combineReducers({
  home,
  buycar,
  sellcar,
  mine,
  homelist,
  cardslist
})

export default rotRouter