import {combineReducers} from 'redux'
import buy from './buy'
import buychild from './buychild'
import bout from './bout'
const rootReducers=combineReducers({
    buy,
    buychild,
    bout
})
export default rootReducers