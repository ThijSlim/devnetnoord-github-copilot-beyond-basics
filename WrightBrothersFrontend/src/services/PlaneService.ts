import axios from "axios";

const API_URL = "http://localhost:1903/planes/";

class PlaneService {
  getPlanes() {
    return axios.get(API_URL);
  }

  getPlaneById(id: string) {
    return axios.get(API_URL + id);
  }

  createPlane(plane: any) {
    return axios.post(API_URL, plane);
  }

  calculateFlightPath(plane: any) {
    return axios.post(API_URL + "calculateFlightPath", plane);
  }
}

export default new PlaneService();
