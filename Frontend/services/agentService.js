import http from "./interceptor/Axiosinterceptor";
export default class AgentService {
    LoginMunicipalite(data) {
        return http.post(`/agentmunicipale/loginMunicipalite`, data);
    }
    GetAllAgents() {
        return http.get(`/agentmunicipale/GetAllAgents`)
    }
    AddNewAgent(data) {
        return http.post(`/agentmunicipale/AddNewAgent`, data)
    }
    DeleteAgentById(id) {
        return http.delete(`/agentmunicipale/DeleteAgentById/${id}`)
    }
    UpdateAgentByID(id, data) {
        return http.put(`/agentmunicipale/UpdateAgentByID/${id}`, data)
    }
}