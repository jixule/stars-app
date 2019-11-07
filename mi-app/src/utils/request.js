import axios from "axios";
import { Message } from "element-ui";

import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: "http://47.98.226.107:3000", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    config.headers["authorization"] = "Bearer " + getToken();

    return config;
  }
 
);
// response interceptor
service.interceptors.response.use(
 
  response => {
    const res = response.data;

    return res;
   
  },
  error => {
    console.log("err" + error); // for debug
   
    return Promise.reject(error);
  }
);

export const post = (url, data) => service.post(url, data);
export const get = (url, params) => service.get(url, params);
export const put = (url, data) => service.put(url, data);
export const del = (url, data) => service.delete(url, data);

export default service;
