import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://my-task-manager.fly.dev/",
});
