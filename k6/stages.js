import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 20 },   
        { duration: '10s', target: 20 },   
        { duration: '20s', target: 40 },   
        { duration: '20s', target: 40 },  
        { duration: '10s', target: 0 }, 
    ],
};

export default function () {
    let res = http.get('https://jsonplaceholder.typicode.com/posts/1'); 
    check(res, {
        'status is 200': (r) => r.status === 200,
    });
    sleep(1);
}
