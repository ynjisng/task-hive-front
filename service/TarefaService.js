import http from "@/common/http";

class TarefaService {
    create(data) {
        console.log(data);
        return http.post("/tarefa", data);
    }
    edit(data) {
        console.log(data);
        return http.patch("/tarefa/" + data.id, data);
    }
    list() {
        return http.get("/tarefa");
    }
    delete(id) {
        return http.delete("/tarefa/" + id);
    }
    load(id) {
        return http.get("/tarefa/" + id);
    }
}
export default new TarefaService();