import axios from "axios";

const instance = axios.create({
  // API (cloud function) URL
  baseURL: " https://us-central1-clone-bc826.cloudfunctions.net/api",
  //'http://localhost:5001/clone-bc826/us-central1/api'
});

export default instance;
