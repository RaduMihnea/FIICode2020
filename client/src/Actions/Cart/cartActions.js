import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, EMPTY_CART} from "./cartActionsTypes"


//add cart action
export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}
//remove item action
export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        item
    }
}
//subtract qt action
export const subtractQuantity = (item) => {
    return {
        type: SUB_QUANTITY,
        item
    }
}
//add qt action
export const addQuantity = (item) => {
    return {
        type: ADD_QUANTITY,
        item
    }


}
//empty cart when leaving page
export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        
    }


}