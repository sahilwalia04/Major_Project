import axios from "axios";

const api = axios.create({
  baseURL: "https://shivamwallu.site/api/users", 
  withCredentials: true, 
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
