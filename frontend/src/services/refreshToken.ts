import axios from 'axios';
import { Promise } from "es6-promise";
import { TokenStorage } from "../helpers/token-storage";

import history from 'myHistory';

 const refreshToken = () => {

  axios.interceptors.response.use( (response) => {
      console.log('!!!!')
    // Return a successful response back to the calling service
    return response;
  }, (error) => {
    // Return any error which is not due to authentication back to the calling service
    if (error.response.status !== 401) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Logout user if token refresh didn't work or user is disabled
    if (error.config.url === '/api/auth/jwt/refresh' || error.response.message === 'Account is disabled.') {
      
      TokenStorage.clear();
      history.push('/');

      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    // Try request again with new token
    return TokenStorage.getNewToken()
      .then((token: any) => {

        // New request with new token
        const config = error.config;
        config.headers['Authorization'] = `Bearer ${token}`;

        return new Promise((resolve, reject) => {
          axios.request(config).then(response => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
        });

      })
      .catch((error: any) => {
      	Promise.reject(error);
      });
  });
}

export default refreshToken