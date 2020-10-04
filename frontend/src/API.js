import axios from 'axios';
import store from "./redux/store";

const API_URL = 'http://localhost:8080';

export const AUTH_API = () => {
    const token = store.getState().admin.token;
    return axios.create({
        baseURL: API_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
}

export const NO_AUTH_API = () => {
    return axios.create({
        baseURL: API_URL
    });
}
