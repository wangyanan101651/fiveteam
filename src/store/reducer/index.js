import {combineReducers} from 'redux'
import buy from './buy'
import buychild from './buychild'
import bout from './bout'
import car from './car'
const rootReducers=combineReducers({
    buy,
    buychild,
    bout,
    car
})
export default rootReducers