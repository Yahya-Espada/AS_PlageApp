import http from "./interceptor/Axiosinterceptor";
export default class PlageService {
    GetAllPlages() {
        return http.get(`/Plage/getAllPlages`)
    }
}