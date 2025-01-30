import axios from "axios";

axios.defaults.baseURL = "https://f1-social-api-910f5cff82da.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
