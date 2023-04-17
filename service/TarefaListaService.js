import http from "@/common/http";

class TarefaService {
    create(data) {
        console.log(data);
        return http.post("/tarefalista", data);
    }
    edit(data) {
        console.log(data);
        return http.patch("/tarefalista/" + data.id, data);
    }
    list() {
        return http.get("/tarefalista");
    }
    delete(id) {
        return http.delete("/tarefalista/" + id);
    }
    load(id) {
        return http.get("/tarefalista/" + id);
    }
}
export default new TarefaService();