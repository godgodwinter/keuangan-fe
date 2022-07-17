// Api.js
import axios from "axios";
// https://dev.to/lukocastillo/svelte-3-how-to-connect-your-app-with-a-rest-api-axios-2h4e
const BASE_URL = import.meta.env.VITE_API_URL
  ? import.meta.env.VITE_API_URL
  : "http://localhost:8000/";
// Create a instance of axios to use the same base url.
const axiosAPI = axios.create({
  baseURL: `${BASE_URL}api/`, // it's not recommended to have this info here.
});

// implement a method to execute all the request from here.
const apiRequest = (method: string, url: string, request: any) => {
  // console.log(localStorage.getItem('token'));
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  // using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};
const apiRequestDown = (method: string, url: string, request: any) => {
  // console.log(localStorage.getItem('token'));
  const headers = {
    authorization: `Bearer ${localStorage.getItem("token")}`,
    responseType: "blob",
  };
  // using the axios instance to perform the request that received from each http method
  return axiosAPI({
    method,
    url,
    data: request,
    headers,
  })
    .then((res) => Promise.resolve(res.data))
    .catch((err) => Promise.reject(err));
};

// function to execute the http get request
const get = (url: string, request: any) => apiRequest("get", url, request);

// function to execute the http delete request
const deleteRequest = (url: string, request: any) => apiRequest("delete", url, request);

// function to execute the http post request
const post = (url: string, request: any) => apiRequest("post", url, request);
const postDown = (url: string, request: any) => apiRequestDown("post", url, request);

// function to execute the http put request
const put = (url: string, request: any) => apiRequest("put", url, request);

// function to execute the http path request
const patch = (url: string, request: any) => apiRequest("patch", url, request);

// expose your method to other services or actions
const API = {
  get,
  delete: deleteRequest,
  post,
  postDown,
  put,
  patch,
};
export default API;
