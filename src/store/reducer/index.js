import {combineReducers} from 'redux'
import home from './home'
import buycar from './buycar'
import sellcar from './sellcar'
import mine from './mine'
import homelist from './homelist'
import cardslist from './cardslist'
import carclass from './carclass'

const rotRouter = combineReducers({
  home,
  buycar,
  sellcar,
  mine,
  homelist,
  cardslist,
  carclass
})

export default rotRouter