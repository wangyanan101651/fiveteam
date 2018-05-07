import {GET_LIST} from '../actionTypes/homelist'

export const homelist = (homelist) => {
    return {
        type:GET_LIST,
        homelist
    }
}