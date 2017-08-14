import axios from 'axios'

var api = axios.create({
    baseURL: 'https://api2.laoshi123.com/',
    // baseURL: 'http://192.168.1.21:4005',
    withCredentials: true,
    timeout: 5000,
});
