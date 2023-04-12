import http from "@/common/http";

class UsuarioService {
    create(data) {
        return http.post("/usuario/cadastrar", data);
    }
    getPorId(id) {
        return http.get("/usuario/" + id);
    }
    login(data) {
        return http.get("/usuario/login", data);
    }
}
export default new UsuarioService();