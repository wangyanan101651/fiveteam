import {GET_CARDS_LIST} from '../actionTypes/cardslist'

export const cardslist = (cardslist) => {
    return {
        type:GET_CARDS_LIST,
        cardslist
    }
}