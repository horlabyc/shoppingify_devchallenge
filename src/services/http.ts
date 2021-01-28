import axios from "axios";

const baseurl = 'https://shoply.herokuapp.com/'
export const POST = (endpoint: string, payload: any) => {
  return axios.post(`${baseurl}${endpoint}`, payload);
};

export const PUT = (endpoint: string, payload?: any) => {
  return axios.put(`${baseurl}${endpoint}`, payload);
};

export const GET = (endpoint: string, payload?: any) => {
  return axios.get(`${baseurl}${endpoint}`);
};

export const DELETE = (endpoint: string, payload?: any) => {
  return axios.delete(`${baseurl}${endpoint}`);
};