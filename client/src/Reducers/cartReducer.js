import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY} from '../Actions/Cart/cartActionsTypes';
import _ from 'lodash';
import { EMPTY_CART } from '../Actions/Cart/cartActionsTypes';

const initState = {
    items: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (!_.find(state.items, {id: action.item.id})) {
                action.item.quantity += 1;
                return {
                    items: [...state.items, action.item],
                    total: state.total + action.item.price
                };
            } else {
                return {
                    items: _.map(state.items, function (o) {
                        return o.id === action.item.id ? {...o, quantity: o.quantity + 1,} : o;
                    }),
                    total: state.total + action.item.price,
                };
            }
        case REMOVE_ITEM:
            return {
                items: _.reject(state.items, function (el) {
                    return el.id === action.item.id
                }),
                total: state.total - (action.item.price * action.item.quantity)
            };
        case ADD_QUANTITY:
            return {
                items: _.map(state.items, function (o) {
                    return o.id === action.item.id ? {...o, quantity: o.quantity + 1,} : o;
                }),
                total: state.total + action.item.price,
            };
        case SUB_QUANTITY:
            return {
                items: _.map(state.items, function (o) {
                    return o.id === action.item.id && o.quantity !== 1 ? {...o, quantity: o.quantity - 1,} : o;
                }),
                total: state.total - action.item.price
            };

        case EMPTY_CART:
            return initState;
        
        default:
            return state;
    }
}

export default cartReducer