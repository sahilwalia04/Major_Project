import axios from "axios";

const api = axios.create({
  baseURL: "http://shivamwallu.site:5000/users", 
  withCredentials: true, 
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
