import axios from "axios";

const key = `?apikey=${process.env.VUE_APP_OMDB_KEY}`;
const configOMB = {
    baseURL: `http://www.omdbapi.com${key}`,
};
export const axiosInstance = axios.create(configOMB);
