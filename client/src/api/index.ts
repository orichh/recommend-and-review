import axios from "axios";

const BASE_URL = axios.create({baseURL: "http://localhost:5000"}) //prettier-ignore

export const getRequest = (url: string, data?: any) => {
  return BASE_URL({
    method: "GET",
    url: url,
    data: data,
    withCredentials: true,
  });
};

export const postRequest = (url: string, data: any) => {
  return BASE_URL({
    method: "POST",
    url: url,
    data: data,
    withCredentials: true,
  });
};

export const deleteRequest = (url: string, data: any) => {
  return BASE_URL({
    method: "DELETE",
    url: url,
    data: data,
    withCredentials: true,
  });
};
