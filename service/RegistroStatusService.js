import http from "@/common/http";

class RegistroStatusService {
    create(data) {
        console.log(data);
        return http.post("/registrostatus", data);
    }
    update(data) {
        console.log(data);
        return http.patch("/registrostatus/" + data.id, data);
    }
    edit(data) {
        console.log(data);
        return http.post("/registrostatus" + data.id, data);
    }
    list() {
        return http.get("/registrostatus");
    }
    delete(id) {
        return http.delete("/registrostatus/" + id);
    }
    load(id) {
        return http.get("/registrostatus/" + id);
    }
    loadTarefa(id) {
        return http.get("/registrostatus/tarefa" + id);
    }
}
export default new RegistroStatusService();