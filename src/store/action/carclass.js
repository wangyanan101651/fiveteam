import {GET_CAR_CLASS} from '../actionTypes/carclass'

export const carclass = (carclass) => {
    return {
        type:GET_CAR_CLASS,
        carclass
    }
}