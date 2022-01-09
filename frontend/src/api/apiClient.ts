import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://127.0.0.1:8000/v1.0/`,
});

apiClient.interceptors.request.use((config) => {
  if (config.url) {
    const token = localStorage.getItem("access-token");
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});

export { apiClient };
