import {actionTypes} from './actions';

export default function (state = {}, action) {
    switch (action.type) {
        case actionTypes.GET_SUBSCRIPTIONS:
        case actionTypes.STORE_TOKEN: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state;
    }
}