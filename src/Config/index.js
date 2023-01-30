import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api-mkx-node.fly.dev/",
});
