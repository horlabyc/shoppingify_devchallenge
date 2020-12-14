import axios from "axios";

const baseurl = 'https://shoply.herokuapp.com/'
export const POST = (endpoint: string, payload: any) => {
  return axios.post(`${baseurl}${endpoint}`, payload);
};

export const GET = (endpoint: string, payload?: any) => {
  return axios.get(`${baseurl}${endpoint}`);
};