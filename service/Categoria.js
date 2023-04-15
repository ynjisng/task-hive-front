import http from "@/common/http";

class CategoriaService {
    create(data) {
        console.log(data);
        return http.post("/categoria/adicionar", data);
    }
    load(id) {
        return http.get("/categoria/" + id);
    }
    delete(id) {
        return http.delete("/categoria/" + id);
    }
}
export default new CategoriaService();