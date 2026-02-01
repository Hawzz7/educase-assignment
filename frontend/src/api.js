import axios from "axios";

const API = axios.create({
  baseURL: "https://educase-assignment-backend-omn2.onrender.com/api",
  withCredentials: true, 
});

export default API;
