import axios from "axios";

export const POST = (url: string, payload: any) => {
  return axios.post(`${url}`, payload);
};

export const GET = (url: string, payload: any) => {
  return axios.get(`${url}`);
};