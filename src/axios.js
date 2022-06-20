import axios from "axios";

const instance = axios.create({
  baseURL: "https://amzon-clone-bhu.herokuapp.com/",
});

export default instance;
