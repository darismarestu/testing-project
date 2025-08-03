import {loginUser, refreshTokenUser, getUser} from "./helper/user.js";
import { SharedArray } from 'k6/data';

const data = new SharedArray('some name', function () {
  const f = JSON.parse(open('./users.json'));
  return f;
});

export const options = {
    scenarios: {
        refreshToken: {
            exec: "refreshToken",
            executor: "shared-iterations",
            vus: 10,
            iterations: 1000,
            maxDuration: "10s"
        },
        getCurrentUser: {
            exec: "getCurrentUser",
            executor: "constant-vus",
            vus: 10,
            duration: "10s"
        }
    }
}

export function refreshToken() {
    // const user = data[(__VU - 1) % data.length];
    const user = data[Math.floor(Math.random() * data.length)];

    const loginRequest = {
        username: user.username,
        password: user.password,
        expiresInMins: 30,
    };

    const loginResponse = loginUser(loginRequest);
    const refreshToken = loginResponse.json().refreshToken

    const refreshTokenRequest = {
        refreshToken: refreshToken,
        expiresInMins: 30,
    };

    const getRefreshToken = refreshTokenUser(refreshTokenRequest);
}

export function getCurrentUser() {
    // const user = data[(__VU - 1) % data.length];
    const user = data[Math.floor(Math.random() * data.length)];

    const loginRequest = {
        username: user.username,
        password: user.password,
        expiresInMins: 30,
    };

    const loginResponse = loginUser(loginRequest);
    const accessToken = loginResponse.json().accessToken;

    const getUserResponse = getUser(accessToken);
}
