import http from "@/common/http";

class ComentarioService {
    create(data) {
        console.log(data);
        return http.post("/comentario/adicionar", data);
    }
    load(id) {
        return http.get("/comentario/" + id);
    }
    delete(id) {
        return http.delete("/comentario/" + id);
    }
}
export default new ComentarioService();