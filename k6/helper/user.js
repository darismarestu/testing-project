import http from "k6/http";
import {check, fail, sleep} from "k6";

export function loginUser(body) {
    const loginResponse = http.post('https://dummyjson.com/auth/login', JSON.stringify(body), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    const checkLogin = check(loginResponse, {
        'login response status must 200': (response) => response.status === 200,
    });
    if (!checkLogin) {
        fail(`Failed to login user-${body.username}`);
    }
    return loginResponse;
}

export function refreshTokenUser(body) {
    const refreshTokenResponse = http.post('https://dummyjson.com/auth/refresh', JSON.stringify(body), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });

    check(refreshTokenResponse, {
        'refresh token response status must 200': (response) => response.status === 200,
        'access token must exists': (response) => response.json().accessToken != null,
        'refresh token must exists': (response) => response.json().refreshToken != null,
    });
    // sleep(1);
    return refreshTokenResponse;
}

export function getUser(token) {
    const currentResponse = http.get('https://dummyjson.com/auth/me', {
        headers: {
            'Accept': 'application/json',
            'Authorization': token
        }
    });

    check(currentResponse, {
        'current response status must 200': (response) => response.status === 200,
        'current response data username must not null': (response) => response.json().username != null
    });
    // sleep(1);
    return currentResponse;
}