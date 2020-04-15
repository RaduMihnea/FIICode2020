import axios from 'axios';
import {store} from '../Reducers/configStore'

const axiosRequest = axios.create({
    baseURL:  process.env.REACT_APP_SERVER_APP_URL
});


axiosRequest.interceptors.request.use((axiosConfig) => {
        return new Promise((resolve, reject) => {
            let token = store.getState().auth.user.token;
            axiosConfig.headers = {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            resolve(axiosConfig);
        });
    },
    (err) => {

    });

axiosRequest.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export const setAxiosToken = (token) => {
    if (token) {
        axiosRequest.defaults.headers.common.Authorization = 'Bearer ' + token;
    }
    axiosRequest.defaults.headers.common.Authorization = null;
};

export default axiosRequest;