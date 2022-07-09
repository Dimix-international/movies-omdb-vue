import axios from "axios";

const key = process.env.VUE_APP_OMDB_KEY;
const configOMB = {
    baseURL: `http://www.omdbapi.com`,
};


const axiosInstance = axios.create(configOMB);

export default {
    searchMovies(title) {
        return axiosInstance.get(`/?apikey=b4ae785f&s=${title}`)
    }
}