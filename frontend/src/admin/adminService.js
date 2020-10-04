import {actions} from "./redux/actions";
import {NO_AUTH_API, AUTH_API} from "../API";

export const login = (form) => (dispatch) => {
    const {username, password} = form;
    const request = {
        username: username.value,
        password: password.value
    }

    return NO_AUTH_API().post('/login', request).then(resp => {
        const {data:{token}} = resp;
        dispatch(actions.storeToken(token));
        return token;
    })
}

export const fetchItems = () => (dispatch) => {
    return AUTH_API().get('/admin').then(resp => {
        const {data} = resp;
        dispatch(actions.getSubscriptions(data));
        return resp;
    })
}