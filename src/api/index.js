import axios from "axios";

const key = '?apikey=b4ae785f';
const configOMB = {
    baseURL: `http://www.omdbapi.com${key}`,
};
export const axiosInstance = axios.create(configOMB);
