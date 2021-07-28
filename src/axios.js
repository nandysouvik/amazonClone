import axios from 'axios';

const instance = axios.create({
  baseUrl: "http://localhost:5001/clone-ccc8b/us-central1/api",
});

export default instance;