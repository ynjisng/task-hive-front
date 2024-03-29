import http from "@/common/http";

class StatusService {
    create(data) {
        console.log(data);
        return http.post("/status/adicionar", data);
    }
    list() {
        return http.get("/status");
    }
    load(id) {
        return http.get("/status/" + id);
    }
    delete(id) {
        return http.delete("/status/" + id);
    }
}
export default new StatusService();