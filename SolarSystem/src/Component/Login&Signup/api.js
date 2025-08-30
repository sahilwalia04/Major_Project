import axios from "axios";

const api = axios.create({
  baseURL: "https://shivamwallu.site/api/users", // backend
  withCredentials: true,
});

export const googleAuth = (code) => api.post("/google/code", { code });
