import axios from "axios";

const configOMB = {
    baseURL: `http://www.omdbapi.com`,
};
export const axiosInstance = axios.create(configOMB);
