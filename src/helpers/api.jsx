import axios from "axios";

const api = axios.create({
  baseURL: "https://white-seahorse-266682.hostingersite.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;