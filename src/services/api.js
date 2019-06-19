import axios from "axios";

const api = axios.create({
  // para android/ios USB -> http:// ip da maquina :3333
  // para android (genymotion) -> http://10.0.3.2:3333
  // para android (android studio) -> http://10.0.2.2:3333
  // para ios -> http://localhost:3333
  baseURL: "http://10.0.2.2:3333"
});

export default api;
