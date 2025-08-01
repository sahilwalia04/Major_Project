import axios from "axios";

const api = axios.create({
  baseURL: "http://13.49.73.215:5000/users", 
  withCredentials: true, 
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
