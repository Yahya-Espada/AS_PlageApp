import http from "./interceptor/Axiosinterceptor";
export default class OffreService {
    GetAllAppels() {
        return http.get(`/appel/GetAllAppels`)
    }
}