// @ts-nocheck
import axios, { AxiosRequestConfig } from 'axios';
import { Promise } from 'es6-promise';

export class TokenStorage {

  private static readonly LOCAL_STORAGE_TOKEN = 'token';
  private static readonly LOCAL_STORAGE_REFRESH_TOKEN = 'refresh_token';

  public static isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  public static getAuthentication(): AxiosRequestConfig {
    return {
      headers: { 'Authorization': 'Bearer ' + this.getToken() }
    };
  }

  public static getNewToken(): Promise<string> {
      
    return new Promise((resolve, reject) => {
      axios
        .post('https://api.dev.hibrain.ladcloud.ru/api/auth/jwt/refresh', { token: this.getToken() }, {headers: { 'Authorization': 'Bearer ' + this.getToken() }})
        .then(response => {
            console.log('ewdsadsdd')
          this.storeToken(response.data.data.accessToken);
        //   this.storeRefreshToken(response.data.refresh_token);

          resolve(response.data.data.accessToken);
        })
        .catch((error) => {
            console.log('error')
          reject(error);
        });
    });
  }

  public static storeToken(token: string): void {
    localStorage.setItem(TokenStorage.LOCAL_STORAGE_TOKEN, token);
  }

  public static storeRefreshToken(refreshToken: string): void {
    localStorage.setItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN, refreshToken);
  }

  public static clear(): void {
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_TOKEN);
    localStorage.removeItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  private static getRefreshToken(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_REFRESH_TOKEN);
  }

  private static getToken(): string | null {
    return localStorage.getItem(TokenStorage.LOCAL_STORAGE_TOKEN);
  }
}