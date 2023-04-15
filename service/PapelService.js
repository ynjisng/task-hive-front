import http from "@/common/http";

class PapelService {
    create(data) {
        console.log(data);
        return http.post("/papel/cadastrar", data);
    }
    list() {
        return http.get("/papel/lista");
    }
    load(id) {
        return http.get("/papel/" + id);
    }
    loadProjetos(id) {
        return http.get("/papel/" + id + "/projetos");
    }
}
export default new PapelService();